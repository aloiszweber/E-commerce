import { addBasket } from "./basket.js";
// code for the burger menu
const burgerBox = document.getElementById("burger_box");
const burger = document.getElementById("burger_button");

const continueButton = document.getElementById("continueButton");
const cancelButton = document.getElementById("cancelButton");

const message = document.getElementsByClassName("popup");
const header = document.querySelector("#header-section");

burger.addEventListener("click", (e) => {
  if (e.target.classList.contains("active")) {
    e.target.classList = "";
    burgerBox.style.display = "none";
  } else {
    burger.classList = "active";
    burgerBox.style.display = "block";
    header.style.marginTop = "-151px";
  }
});

if (burger.classList.contains("active")) {
  header.style.marginTop = "0px";
}

//add to cart listeners
const productCards = document.getElementsByClassName(
  "productIndexBestProducts"
);
for (let i = 0; i < productCards.length; i++) {
  productCards[i].addEventListener("click", () => {
    fetch(`api/products/${productCards[i].id}`)
      .then((res) => res.json())
      .then((data) => {
        addBasket(data.data.product);
      });
  });
}

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

function popup() {
  continueButton.addEventListener("click", () => {
    message[0].style.display = "none";
  });

  cancelButton.addEventListener("click", () => {
    window.close();
  });
}

popup();
