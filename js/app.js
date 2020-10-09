document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript Loaded');

const createSpeciesItem = function(form) {
    const speciesItem = document.createElement('li');

    const type = document.createElement('h2');
    type.textContent = form.type.value;
    speciesItem.appendChild(type);

    const distribution = document.createElement('h3');
    distribution.textContent = form.distribution.value;
    speciesItem.appendChild(distribution);

    const status = document.createElement('h3');
    status.textContent = form.status.value;
    speciesItem.appendChild(status);

    return speciesItem
}



const handleFormSubmit = function(event) {
    event.preventDefault();
    const speciesListItem = createSpeciesItem(event.target);
    const speciesList = document.querySelector('#endangered-list');
    speciesList.appendChild(speciesListItem);
    event.target.reset();
}


const newSpeciesItem = document.querySelector('#new-species-form');
newSpeciesItem.addEventListener('submit', handleFormSubmit);

const handleDeleteAll = function() {
    const endangeredList = document.querySelector('#endangered-list');
    endangeredList.innerHTML = '';
}

const deleteAll = document.querySelector('#delete-all');
deleteAll.addEventListener('click', handleDeleteAll);

})
