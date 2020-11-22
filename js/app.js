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

    const where = document.createElement('p');
    where.textContent = form.where.value;
    newAnimal.appendChild(where);

    const when = document.createElement('p');
    when.textContent = form.when.value;
    newAnimal.appendChild(when);

    const food = document.createElement('p');
    food.textContent = form.food.value;
    newAnimal.appendChild(food);

    const enjoyment = document.createElement('p');
    enjoyment.textContent = form.enjoyment.value;
    newAnimal.appendChild(enjoyment);

    return newAnimal;
}

const handleDeleteAllClick = function (event) {
    const animalList = document.querySelector('#animals-spotted');
    animalList.innerHTML = 'Deleted All';
}
