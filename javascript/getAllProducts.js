

const getAllProducts = async () => {

    let response = await fetch("products.json");
    let data = await response.json();

    //console.log(data);

    var product = document.querySelector('.productPageProducts');
    //console.log(product);
    /*
        function getBasket() {
            let basket = (localStorage.getItem("basket"));
            if (basket == null) {
                return [];
            }
            else {
                return JSON.parse(basket);
            }
        }
    
        var basket = getBasket();
    
    */

    data.forEach(element => {

        let cloneproduct = document.importNode(product, true);

        let imageproduct = cloneproduct.querySelector('.image_product');
        let nameproduct = cloneproduct.querySelector('.nameProduct');
        let priceproduct = cloneproduct.querySelector('.price');

        imageproduct.src = `${element.image}`
        nameproduct.innerHTML = element.name;
        priceproduct.innerHTML = element.price;

        /*
        cloneproduct.addEventListener('click', () => {
            console.log('added to cart!');
            localStorage.setItem("product", JSON.stringify(element));
            let product = (localStorage.getItem("product"));
            console.log(product);
            console.log(basket);
            basket.push(JSON.parse(product));

            basket.forEach(element => {

                let cloneproduct2 = cloneproduct;
                console.log(cloneproduct2);
                console.log(cloneproduct);

                let target2 = document.querySelector('.BasketProducts');
                console.log(target2);
                target2.appendChild(cloneproduct2);

            })

        })

        */

        let target = document.querySelector('.rowAllProducts');
        target.appendChild(cloneproduct);

    });

    product.style.display = "none";

}

getAllProducts();