document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM is loading")

    const newAnimalForm = document.querySelector('#new-animal-form');
    newAnimalForm.addEventListener('submit', handleNewAnimalFormSubmit);

    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewAnimalFormSubmit = function (event) {
    event.preventDefault();
    const newAnimal = createAnimal(event.target);
    const animalList = document.querySelector('#animals-spotted');
    animalList.appendChild(newAnimal);

    event.target.reset();
}

const createAnimal = function (form) {
    const newAnimal = document.createElement('li');
    newAnimal.classList.add('new-animal');

    const name = document.createElement('h3');
    name.textContent = form.name.value;
    newAnimal.appendChild(name);

    const species = document.createElement('h4');
    species.textContent = form.species.value;
    newAnimal.appendChild(species);

    const endangered = document.createElement('p');
    endangered.textContent = form.endangered.value;
    newAnimal.appendChild(endangered);

    return newAnimal;
}

const handleDeleteAllClick = function (event) {
    const animalList = document.querySelector('#animals-spotted');
    animalList.innerHTML = 'Deleted All';
}
