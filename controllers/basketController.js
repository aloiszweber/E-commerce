const getBasket = () => {
  let basket = window.localStorage.getItem("basket");
  if (basket == null) {
    return [];
  } else {
    return JSON.parse(basket);
  }
};

exports.addToBasket = () => {
  basket = getBasket();
  console.log(basket);
};
