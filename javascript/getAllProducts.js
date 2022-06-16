const getAllProducts = async () => {

    let response = await fetch("products.json");
    let data = await response.json();

    //console.log(data);

    var product = document.querySelector('.productPageProducts');
    //console.log(product);

    data.forEach(element => {

        let cloneproduct = document.importNode(product, true);

        let imageproduct = cloneproduct.querySelector('.image_product');
        let nameproduct = cloneproduct.querySelector('.nameProduct');
        let priceproduct = cloneproduct.querySelector('.price');

        imageproduct.src = `${element.image}`
        nameproduct.innerHTML = element.name;
        priceproduct.innerHTML = element.price;

        let target = document.querySelector('.rowAllProducts');
        console.log(target);
        target.appendChild(cloneproduct);

    });

    product.style.display = "none";

}

getAllProducts();