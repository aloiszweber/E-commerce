const getHomeProducts1 = async () => {

    let response = await fetch("products.json");
    let data = await response.json();

    //console.log(data);

    var product = document.querySelector('.productIndexBestProducts');
    //console.log(product);

    data.forEach(element => {
        if (element.id < 5) {

            let cloneproduct = document.importNode(product, true);

            let imageproduct = cloneproduct.querySelector('.image_product');
            let nameproduct = cloneproduct.querySelector('.nameProduct');
            let priceproduct = cloneproduct.querySelector('.price');

            imageproduct.src = `${element.image}`
            nameproduct.innerHTML = element.name;
            priceproduct.innerHTML = element.price;

            let target = document.querySelector('.rowIndexBestProducts');
            console.log(target);
            target.appendChild(cloneproduct);
        }
    });

    product.style.display = "none";

}

getHomeProducts1();