import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
library.add(faTrashAlt);


class Cart extends Component {
    render() {

        const props = this.props.props;

        const price = {
            unitPrice: 19.90.toFixed(2),
            currency: "€",
            taxes: 0.21,
        };

        price.subtotal = (price.unitPrice * props.cart.length).toFixed(2);
        price.totalPrice = (price.subtotal * (1 + price.taxes)).toFixed(2);

        let cartItems;
        if (props.cart.length > 0) {
            cartItems = props.cart.map((index) => { return <CartItem props={props} index={index} price={price} key={index}/> });
        }

        if (props.cart.length === 0) {
            return (
                <div id='cartWrapper'>
                    <div id='cartContainer' className="d-flex d-col justify-center align-center text-center">
                        <h1 id='cartHeading'>Shopping cart</h1>
                        <p>You didn't add anything to your cart yet</p>
                        <div id='checkoutBtnContainerEmptyCart' className='d-flex d-col justify-center align-center text-center w100'>
                            <button id='shopMoreBtn' className='btn btn-secondary btn-block' onClick={() => props.showScreen("HOME")}>Continue shopping</button>
                        </div>
                    </div>
                </div>
            );
        }

        if (props.cart.length > 0) {
            return (
                <div id='cartWrapper'>
                    <div id='cartContainer'>
                        <h1 id='cartHeading'>Shopping cart</h1>
                        <div id='shippingCostContainer'>
                            <p>Shipping cost starting from 7€</p>
                        </div>

                        <div id='cartListContainer' className='w100'>
                            <ul id='cartList-mobile' className='d-flex d-col w100'>
                                <li id='cartItemHead' className='text-center w100'>
                                    <div id='headTrash'>
                                        <span className='head-item'></span>
                                    </div>
                                    <div id='headImage'>
                                        <span className='head-item'>Image</span>
                                    </div>
                                    <div id='headName'>
                                        <span className='head-item'>Product Name</span>
                                    </div>
                                    <div id='headTotal'>
                                        <span className='head-item'>Total</span>
                                    </div>
                                </li>
                                {cartItems}
                            </ul>
                        </div>

                        <div id='cartTotalWrapper'>
                            <ul id='cartTotalContainer'>
                                <li className='d-flex'>
                                    <span className='cartTotalBox firstCol'>Sub-total:</span>
                                    <span className='cartTotalBox lastCol'>{price.subtotal + price.currency}</span>
                                </li>
                                <li className='d-flex'>
                                    <span className='cartTotalBox firstCol'>Taxes:</span>
                                    <span className='cartTotalBox lastCol'>{(price.taxes * price.subtotal).toFixed(2) + price.currency}</span>
                                </li>
                                <li className='d-flex'>
                                    <span className='cartTotalBox firstCol'>Total:</span>
                                    <span className='cartTotalBox lastCol'>{price.totalPrice + price.currency}</span>
                                </li>
                            </ul>
                        </div>
                        <div id='checkoutBtnContainer' className='d-flex d-col w100'>
                            <button id='shopMoreBtn' className='btn btn-secondary btn-block' onClick={() => props.showScreen("HOME")}>Continue shopping</button>
                            <button id='checkoutBtn' className='btn btn-primary btn-block'>Checkout</button>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

class CartItem extends Component {
    render() {
        const props = this.props.props;
        const price = this.props.price;
        const index = this.props.index;
        const movie = props.movies[index];

        return (
            <div className='cart-item-wrapper'>
                <li className='mobile'>
                    <div className='cart-item-container d-flex d-col'>
                        <div className='cart-item-flex d-flex justify-start'>
                            <div className='cart-item-img-wrapper'>
                                <img className='cart-item-img' src={require('./images/book_cover_template.jpg')} alt='Book template' />
                            </div>
                            <div>
                                <h3>{movie.title}</h3>
                                <button className='btn delete-btn' onClick={() => props.removeFromCart(index)}><FontAwesomeIcon icon={faTrashAlt} /></button>
                            </div>
                        </div>
                        <div>
                            <span>{price.unitPrice + price.currency}</span>
                        </div>
                    </div>
                </li>
                <li className='cart-item-wrapper desktop'>
                    <div className='cart-item-container d-flex justify-center align-center'>
                        <div id='itemTrash' className='d-flex justify-center align-center'>
                            <button className='btn delete-btn' onClick={() => props.removeFromCart(index)}><FontAwesomeIcon icon={faTrashAlt} /></button>
                        </div>
                        <div id='itemImage' className='d-flex justify-center align-center'>
                            <div className='cart-item-img-wrapper d-flex justify-center align-center'>
                                <img className='cart-item-img' src={require('./images/book_cover_template.jpg')} alt='Book template' />
                            </div>
                        </div>

                        <div id='itemName'>
                            <h3>{movie.title}</h3>
                        </div>
                        <div id='itemTotal'>
                            <span>{price.unitPrice + price.currency}</span>
                        </div>
                    </div>
                </li>
            </div>
        );
    }
}

export default Cart;