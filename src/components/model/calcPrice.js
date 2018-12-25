/**
 * @param retailPrice {string} Should have any valid currency shape, with or without currency symbol, e.g: 99.9€, ¥33, 0.000$, etc
 * return price {obj} with properties unitPrice {number} and currency {string}
 */
function calcPrice(retailPrice) {
  const price = {
    unitPrice: "0",
    currency: "€"
  };

  // strip any trailing non numbers from pvp
  price.unitPrice = (
    +(
    retailPrice.match(/\d+.{0,1}\d+/)
  )
  ).toFixed(2)

  let currency = retailPrice.match(/[^.0-9]/);
  price.currency = currency !== null ? currency[0] : price.currency;
  // price.taxes = 0.21; // this is a constant

  // these cannot be calculated from one single price (well, yes, but it doesnt make sense)
  // price.subtotal = (price.unitPrice * props.cart.length).toFixed(2);
  // price.totalPrice = (price.subtotal * (1 + price.taxes)).toFixed(2);

  return price;
}

export default calcPrice;
