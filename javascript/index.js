// code for the burger menu

const burgerBox = document.getElementById('burger_box');
const burger = document.getElementById('burger_button');


burger.addEventListener('click', (e) => {

    if (e.target.classList.contains("active")) {
        e.target.classList = '';
        burgerBox.style.display = "none";
    }

    else {
        burger.classList = 'active';
        burgerBox.style.display = "block";
    }
})

/*

document.body.addEventListener('click', () => {

    if (e.target.classList.contains("active")) {
        e.target.classList = '';
        burgerBox.style.display = "none";
    }

    else {
        e.target.classList = 'active';
        burgerBox.style.display = "block";
    }

})

*/

const continueButton = document.getElementById("continueButton");
const cancelButton = document.getElementById("cancelButton");

const message = document.getElementsByClassName("popup");

let mediaMin470 = window.matchMedia("(min-width:500px)");
let mediaMax768 = window.matchMedia("(max-width:768px)");
let mediaMin768 = window.matchMedia("(min-width:768px)");

console.log(message);

continueButton.addEventListener('click', () => {
    message[0].style.display = "none";
})

cancelButton.addEventListener('click', () => {
    window.close();
    console.log(window);
})

window.addEventListener('load', (e) => {
    if (mediaMin470.matches && mediaMax768.matches) {
        message[0].style.display = "block";
    }
    else if (mediaMin768.matches) {
        message[0].style.display = "none";
    }
})







