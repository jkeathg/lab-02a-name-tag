const nameElement = document.getElementById('name');
const updateButton = document.getElementById('updateButton');
const nameInput = document.getElementById('name-input');


// user clicks on the button
updateButton.addEventListener('click', () => {
    console.log('button was clicked');
});



// get the text in the input
console.log(nameInput.value);

// update the name element with the text
nameElement.textContent = name;



// nameInput.addEventListener('input',() => {
//     // get the text in the input
// console.log(nameInput.value);

// // update the name element with the text
// nameElement.textContent = name;
// }