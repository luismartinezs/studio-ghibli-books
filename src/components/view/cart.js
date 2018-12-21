import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
library.add(faTrashAlt);

class CartContainer extends Component {
  render() {
    const { props } = this.props;

    const price = {
      unitPrice: (19.9).toFixed(2),
      currency: "€",
      taxes: 0.21
    };

    price.subtotal = (price.unitPrice * props.cart.length).toFixed(2);
    price.totalPrice = (price.subtotal * (1 + price.taxes)).toFixed(2);

    return <Cart props={props} price={price} />;
  }
}

class Cart extends Component {
  render() {
    const { props, price } = this.props;

    if (props.cart.length === 0) {
      return <EmptyCart props={props} />;
    }

    if (props.cart.length > 0) {
      return <FullCart props={props} price={price} />;
    }
  }
}

class EmptyCart extends Component {
  render() {
    const { props } = this.props;

    return (
      <div id="cartWrapper" className="cart__wrapper">
        <div
          id="cartContainer"
          className="d-flex d-col justify-center align-center text-center cart__container"
        >
          <h1 id="cartHeading" className="cart__heading">
            Shopping cart
          </h1>
          <p>You didn't add anything to your cart yet</p>
          <div
            id="checkoutBtnContainerEmptyCart"
            className="d-flex d-col justify-center align-center text-center w100 checkout-button-container--empty-cart"
          >
            <button
              id="shopMoreBtn"
              className="btn btn-secondary btn-block shop-more-button"
              onClick={() => props.showScreen("HOME")}
            >
              Continue shopping
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const CartHeader = () => (
  <div>
    <h1 id="cartHeading">Shopping cart</h1>
    <div id="shippingCostContainer" className="shipping-cost__container">
      <p>Shipping cost starting from 7€</p>
    </div>
  </div>
);

const CartList = ({ cartItems }) => (
  <div id="cartListContainer" className="w100">
    <ul id="cartList-mobile" className="d-flex d-col w100 cart-list--mobile">
      <li id="cartItemHead" className="text-center w100 cart-item__head">
        <div id="headTrash" className="cart-list__head__trash">
          <span className="head-item" />
        </div>

        <div id="headImage" className="cart-list__head__image">
          <span className="head-item">Image</span>
        </div>

        <div id="headName" className="cart-list__head__name">
          <span className="head-item">Product Name</span>
        </div>

        <div id="headTotal" className="cart-list__head__total">
          <span className="head-item">Total</span>
        </div>
      </li>

      {cartItems}
    </ul>
  </div>
);

const CartPrice = ({ price }) => (
  <div id="cartTotalWrapper" className="cart-total__wrapper">
    <ul id="cartTotalContainer">
      <li className="d-flex">
        <span className="cart-total__box first-col">Sub-total:</span>
        <span className="cart-total__box last-col">
          {price.subtotal + price.currency}
        </span>
      </li>

      <li className="d-flex">
        <span className="cart-total__box first-col">Taxes:</span>
        <span className="cart-total__box last-col">
          {(price.taxes * price.subtotal).toFixed(2) + price.currency}
        </span>
      </li>

      <li className="d-flex">
        <span className="cart-total__box first-col">Total:</span>
        <span className="cart-total__box last-col">
          {price.totalPrice + price.currency}
        </span>
      </li>
    </ul>
  </div>
);

const CartButtons = ({ props }) => (
  <div
    id="checkoutBtnContainer"
    className="d-flex d-col w100 checkout-button__container"
  >
    <button
      id="shopMoreBtn"
      className="btn btn-secondary btn-block shop-more-button"
      onClick={() => props.showScreen("HOME")}
    >
      Continue shopping
    </button>
    <button
      id="checkoutBtn"
      className="btn btn-primary btn-block checkout-button"
    >
      Checkout
    </button>
  </div>
);

class FullCart extends Component {
  render() {
    const { props, price } = this.props;

    let cartItems;
    if (props.cart.length > 0) {
      cartItems = props.cart.map(index => {
        return (
          <CartItem props={props} index={index} price={price} key={index} />
        );
      });
    }

    return (
      <div id="cartWrapper" className="cart__wrapper">
        <div id="cartContainer" className="cart__container">
          <CartHeader />

          <CartList cartItems={cartItems} />

          <CartPrice price={price} />

          <CartButtons props={props} />
        </div>
      </div>
    );
  }
}

class CartItem extends Component {
  render() {
    const { props, price, index } = this.props;

    return (
      <div className="cart-item__wrapper">
        <CartItemMobile props={props} price={price} index={index} />

        <CartItemDesktop props={props} price={price} index={index} />
      </div>
    );
  }
}

// Since the layout for the cart items in mobile and desktop versions is quite different, I created two different versions for these (CartItemMobile and CartItemDesktop). The logic (hiding / showing the appropriate html) for this part (and any other viewport-size dependent properties) is handled by CSS
class CartItemMobile extends Component {
  render() {
    const { props, price, index } = this.props;
    const movie = props.movies[index];

    return (
      <li className="mobile">
        <div className="cart-item__container d-flex d-col">
          <div className="cart-item--flex d-flex justify-start">
            <div className="cart-item__img-wrapper">
              <img
                className="cart-item__img"
                src={require("./images/book_cover_template.jpg")}
                alt="Book template"
              />
            </div>

            <div>
              <h3>{movie.title}</h3>
              <button
                className="btn delete-button"
                onClick={() => props.removeFromCart(index)}
              >
                <FontAwesomeIcon icon={faTrashAlt} />
              </button>
            </div>
          </div>

          <div>
            <span>{price.unitPrice + price.currency}</span>
          </div>
        </div>
      </li>
    );
  }
}

class CartItemDesktop extends Component {
  render() {
    const { props } = this.props;
    const price = this.props.price;
    const index = this.props.index;
    const movie = props.movies[index];

    return (
      <li className="cart-item-wrapper desktop">
        <div className="cart-item-container d-flex justify-center align-center">
          <div
            id="itemTrash"
            className="d-flex justify-center align-center cart-item__trash"
          >
            <button
              className="btn delete-button"
              onClick={() => props.removeFromCart(index)}
            >
              <FontAwesomeIcon icon={faTrashAlt} />
            </button>
          </div>

          <div
            id="itemImage"
            className="d-flex justify-center align-center cart-item__img-box"
          >
            <div className="cart-item__img-wrapper d-flex justify-center align-center">
              <img
                className="cart-item__img"
                src={require("./images/book_cover_template.jpg")}
                alt="Book template"
              />
            </div>
          </div>

          <div id="itemName" className="cart-item__name">
            <h3>{movie.title}</h3>
          </div>

          <div id="itemTotal" className="cart-item__total">
            <span>{price.unitPrice + price.currency}</span>
          </div>
        </div>
      </li>
    );
  }
}

export default CartContainer;
