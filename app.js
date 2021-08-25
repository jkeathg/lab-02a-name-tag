const nameElement = document.getElementById('name');
const updateButton = document.getElementById('updateButton');
const nameInput = document.getElementById('name-input');


// user clicks on the button
updateButton.addEventListener('click', () => {
    nameElement.textContent = nameInput.value;
});


const updateBgButton = document.getElementById('updateBackground');



updateBgButton.addEventListener('click', () => {
    const bgColor = document.getElementById('tag');
    const colorSelect = document.getElementById('colors').value;

    bgColor.style.backgroundColor = colorSelect;
    console.log('button clicked');

});

const updatePronoun = document.getElementById('updatePronoun');

updatePronoun.addEventListener('click', () => {
    const pronoun = document.getElementById('pronoun');


    nameElement.textContent += pronoun.value;
    console.log(updatePronoun);

});

