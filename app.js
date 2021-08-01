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
            const newOptGroup = document.createElement('optgroup');
            newOptGroup.label = breed;
            breedList[breed].forEach(function(singleBreed){
                const newOption = document.createElement('option');
                newOption.textContent = singleBreed;
                newOptGroup.appendChild(newOption);
            })
            select.appendChild(newOptGroup);
        }else{
            const newOption = document.createElement('option');
            newOption.textContent = breed;
            select.appendChild(newOption);
        }
    }
}