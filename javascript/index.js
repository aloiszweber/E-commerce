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

document.body.addEventListener('click', (e) => {

})