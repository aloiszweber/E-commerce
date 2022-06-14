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

/* Selecting of the product */


const getAllProducts = async () => {

    let response = await fetch("products.json"); // put the array of my promise from the database in the variable response
    let data = await response.json(); // put the value (an array) of response with the json format in the data variable

    console.log(data);

    var product = document.querySelector('.productPageProducts'); // selection of the div with product as classname
    console.log(product);


    data.forEach(element => {

        let cloneproduct = document.importNode(product, true); // creation of a clone of the div with product as classname
        // with its children

        let imageproduct = cloneproduct.querySelector('.image_product'); // taking of the clone child (tag "img") with image as the classname
        let nameproduct = cloneproduct.querySelector('.nameProduct'); // taking of the clone child (tag h3) with name as the classname
        let priceproduct = cloneproduct.querySelector('.price'); // taking of the clone child (tag "p") with price as the classname

        imageproduct.src = `${element.image}` // adding of the image of the product from the database to the clone child (classname: image)
        nameproduct.innerHTML = element.name; // adding of the name of the product from the database to the clone child (classname: name)
        priceproduct.innerHTML = element.price; // adding of the name of the product from the database to the clone child (classname: price)

        let target = document.querySelector('.rowAllProducts'); // selection of the container (main content) as a target
        console.log(target);
        target.appendChild(cloneproduct); // adding the clone of product (and its content) to the target (main content) 

    });

    product.style.display = "none";

}

getAllProducts();


const getHomeProducts1 = async () => {

    let response = await fetch("products.json"); // put the array of my promise from the database in the variable response
    let data = await response.json(); // put the value (an array) of response with the json format in the data variable

    console.log(data);

    var product = document.querySelector('.productIndexBestProducts'); // selection of the div with product as classname
    console.log(product);


    data.forEach(element => {

        let cloneproduct = document.importNode(product, true); // creation of a clone of the div with product as classname
        // with its children

        let imageproduct = cloneproduct.querySelector('.image_product'); // taking of the clone child (tag "img") with image as the classname
        let nameproduct = cloneproduct.querySelector('.nameProduct'); // taking of the clone child (tag h3) with name as the classname
        let priceproduct = cloneproduct.querySelector('.price'); // taking of the clone child (tag "p") with price as the classname

        imageproduct.src = `${element.image}` // adding of the image of the product from the database to the clone child (classname: image)
        nameproduct.innerHTML = element.name; // adding of the name of the product from the database to the clone child (classname: name)
        priceproduct.innerHTML = element.price; // adding of the name of the product from the database to the clone child (classname: price)

        let target = document.querySelector('.rowIndexBestProducts'); // selection of the container (main content) as a target
        console.log(target);
        target.appendChild(cloneproduct); // adding the clone of product (and its content) to the target (main content) 

    });

    product.style.display = "none";

}

getHomeProducts1();


const getHomeProducts2 = async () => {

    let response = await fetch("products.json"); // put the array of my promise from the database in the variable response
    let data = await response.json(); // put the value (an array) of response with the json format in the data variable

    console.log(data);

    var product = document.querySelector('.productIndexLastProducts'); // selection of the div with product as classname
    console.log(product);


    data.forEach(element => {

        let cloneproduct = document.importNode(product, true); // creation of a clone of the div with product as classname
        // with its children

        let imageproduct = cloneproduct.querySelector('.image_product'); // taking of the clone child (tag "img") with image as the classname
        let nameproduct = cloneproduct.querySelector('.nameProduct'); // taking of the clone child (tag h3) with name as the classname
        let priceproduct = cloneproduct.querySelector('.price'); // taking of the clone child (tag "p") with price as the classname

        imageproduct.src = `${element.image}` // adding of the image of the product from the database to the clone child (classname: image)
        nameproduct.innerHTML = element.name; // adding of the name of the product from the database to the clone child (classname: name)
        priceproduct.innerHTML = element.price; // adding of the name of the product from the database to the clone child (classname: price)

        let target = document.querySelector('.rowIndexLastProducts'); // selection of the container (main content) as a target
        console.log(target);
        target.appendChild(cloneproduct); // adding the clone of product (and its content) to the target (main content) 

    });

    product.style.display = "none";

}

getHomeProducts2();