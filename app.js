//getting values

const select = document.getElementById('breed_list');
let check = false;

//events

select.addEventListener('change', function(e){
    const breedName = e.target.value;
    fetchBreedImage(breedName);
})


//functions

async function start(){
    const response = await fetch('https://dog.ceo/api/breeds/list/all');
    const data = await response.json();
    
    createBreedList(data.message);
}

start();

function createBreedList(breedList){
    
    const select = document.getElementById('breed_list');
    for(const breed in breedList){
        if(breedList[breed].length > 0){
            const newOption = document.createElement('option');
            newOption.textContent = breed;
            select.appendChild(newOption);
            breedList[breed].forEach(function(singleBreed){
                
            });
            
        }else{
            const newOption = document.createElement('option');
            newOption.textContent = breed;
            select.appendChild(newOption);
        }
    }
}

async function fetchBreedImage(breedName){
    const response = await fetch(`https://dog.ceo/api/breed/${breedName}/images`);
    const data = await response.json();
    showingImages(data.message);
    
}

function showingImages(images){
    
    const parentDiv = document.getElementById('main-div');
    if(check){
        var child = parentDiv.lastElementChild; 
        while (child) {
            parentDiv.removeChild(child);
            child = parentDiv.lastElementChild;
        }
        check = false;
    }
    for(const image in images){
        const imageDiv = document.createElement('div');
        imageDiv.classList.add('row');
        const colDiv = document.createElement('div');
        colDiv.classList.add('col');
        const imageElement = document.createElement('img');
        imageElement.classList.add('image-style');
        imageElement.src = images[image];
        parentDiv.classList.add('parentDiv-style');
        parentDiv.appendChild(imageElement);
        check = true;
    }
}

