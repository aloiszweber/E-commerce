function saveBasket(basket) {
  localStorage.setItem("basket", JSON.stringify(basket));
}

function getBasket() {
  let basket = localStorage.getItem("basket");
  if (basket == null) {
    return [];
  } else {
    return JSON.parse(basket);
  }
}

export function addBasket(product) {
  let basket = getBasket();
  //we find by name instead of id or _id
  let foundProduct = basket.find((p) => p.name == product.name);
  console.log(foundProduct);
  if (foundProduct != undefined) {
    foundProduct.quantity++;
  } else {
    product.quantity = 1;
    basket.push(product);
  }
  saveBasket(basket);
}

function removeFromBasket(product) {
  let basket = getBasket();
  basket = basket.filter((p) => p.id != product.id);
  saveBasket(basket);
}

function changeQuantity(product, quantity) {
  let basket = getBasket();
  let foundProduct = basket.find((p) => p.id == product.id);
  if (foundProduct != undefined) {
    foundProduct.quantity += quantity;
    if (foundProduct.quantity <= 0) {
      removeFromBasket(foundProduct);
    } else {
      saveBasket(basket);
    }
  }
}

function getNumberProduct() {
  let basket = getBasket();
  let number = 0;
  for (let product of basket) {
    number += product.quantity;
  }
  return number;
}

function getTotalPrice() {
  let basket = getBasket();
  let total = 0;
  for (let product of basket) {
    total += product.quantity * product.price;
  }
  return total;
}

const basketCard = document.getElementById("basketProductList");
const basket = getBasket();
for (let i = 0; i < basket.length; i++) {
  basketCard.innerHTML += `
        <div id="basketProduct" class="basketProduct part">
            <div id="blockImage">
                <img id="laurier" src="${basket[i].image}" alt="image by default">
            </div>
            <div id="blockProduct" class="blockProduct part">
                <h2> Product </h2>
                <p> ${basket[i].name} </p>
                <p> ${basket[i].price} </p>
                <p> Ref:${basket[i]._id} </p>
                <p> en Stock </p>
            </div>
            <div id="changeProduct" class="changeProduct part">
                <div class="center">
                    <button class="minusButton"> - </button>
                    <span class="quantityProduct"> ${basket[i].quantity} </span>
                    <button class="plusButton"> + </button>
                </div>
            </div>
        </div>
  `;
}

// const productBasket = async () => {
//   let response = await fetch("../../dev-data/products.json");
//   let data = await response.json();
//   console.log(data);

//   var product = document.querySelector(".productPageProducts");
//   console.log(product);

//   function getBasket() {
//     let basket = localStorage.getItem("basket");
//     if (basket == null) {
//       return [];
//     } else {
//       return JSON.parse(basket);
//     }
//   }

//   var basket = getBasket();

//   data.forEach((element) => {
//     let cloneproduct = document.importNode(product, true);

//     let imageproduct = cloneproduct.querySelector(".image_product");
//     let nameproduct = cloneproduct.querySelector(".nameProduct");
//     let priceproduct = cloneproduct.querySelector(".price");

//     console.log(imageproduct);
//     console.log(nameproduct);
//     console.log(priceproduct);

//     product.addEventListener("click", () => {

//             console.log('added to cart!');
//             localStorage.setItem("product", JSON.stringify(element));
//             let product = (localStorage.getItem("product"));
//             console.log(product);
//             console.log(basket);
//             basket.push(JSON.parse(product));

//             basket.forEach(element => {

//                 console.log('coucou');

//             })

//       console.log("coucou");
//     });
//   });
// };

// productBasket();
