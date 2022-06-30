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
const addToBasketListener = (domEL) => {
  for (let i = 0; i < domEL.length; i++) {
    domEL[i].addEventListener("click", (e) => {
      e.preventDefault();
      fetch(`api/products/${domEL[i].id}`)
        .then((res) => res.json())
        .then((data) => {
          addBasket(data.data.product);
          // console.log(data.data.product._id);
        });
    });
  }
};
const bestProductCards = document.getElementsByClassName(
  "productIndexBestProducts"
);
addToBasketListener(bestProductCards);
const lastProductCards = document.getElementsByClassName(
  "productIndexLastProducts"
);
addToBasketListener(lastProductCards);

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
