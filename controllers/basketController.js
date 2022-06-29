exports.getBasket = () => {
  let basket = localStorage.getItem("basket");
  if (basket == null) {
    return [];
  } else {
    return JSON.parse(basket);
  }
};

exports.addToBasket = (req, res) => {
  basket = getBasket();
  console.log(basket);
};
