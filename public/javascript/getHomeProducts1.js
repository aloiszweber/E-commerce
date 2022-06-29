const getHomeProducts1 = async () => {
  //modify route to fetch with express route
  let response = await fetch("api/products");
  let res = await response.json();
  let data = res.data.products;

  //console.log(data);

  var product = document.querySelector(".productIndexBestProducts");
  //console.log(product);

  data.forEach((element) => {
    if (element.id < 5) {
      let cloneproduct = document.importNode(product, true);

      let imageproduct = cloneproduct.querySelector(".image_product");
      let nameproduct = cloneproduct.querySelector(".nameProduct");
      let priceproduct = cloneproduct.querySelector(".price");

      imageproduct.src = `${element.image}`;
      nameproduct.innerHTML = element.name;
      priceproduct.innerHTML = element.price;

      cloneproduct.addEventListener("click", () => {
        console.log("added to cart! 1");
      });

      let target = document.querySelector(".rowIndexBestProducts");
      target.appendChild(cloneproduct);
    }
  });

  product.style.display = "none";
};

getHomeProducts1();