// const basket = require("./../../controllers/basketController.js");
const getHomeProducts2 = async () => {
  //modify route to fetch with express route
  let response = await fetch("api/products");
  let res = await response.json();
  let data = res.data.products;

  // console.log(data);

  var product = document.querySelector(".productIndexLastProducts");
  //console.log(product);

  data.forEach((element) => {
    if (element.id > 4) {
      let cloneproduct = document.importNode(product, true);

      let imageproduct = cloneproduct.querySelector(".image_product");
      let nameproduct = cloneproduct.querySelector(".nameProduct");
      let priceproduct = cloneproduct.querySelector(".price");

      imageproduct.src = `${element.image}`;
      nameproduct.innerHTML = element.name;
      priceproduct.innerHTML = element.price;

      cloneproduct.addEventListener("click", async () => {
        // console.log("added to cart! 2");
        let basket = JSON.parse(localStorage.getItem("basket"));
        if (basket == null) {
          basket = [];
        }
        basket.push(element);
        localStorage.setItem("basket", JSON.stringify(basket));
        // TODO show an alert when added to cart
      });

      let target = document.querySelector(".rowIndexLastProducts");
      target.appendChild(cloneproduct);
    }
  });

  product.style.display = "none";
};

getHomeProducts2();
