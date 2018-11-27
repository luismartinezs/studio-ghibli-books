import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
library.add(faTrashAlt) // adds an icon to lib


class Cart extends Component {
    render() {
        return (
            <div id='cartWrapper'>
                <div id='cartContainer'>
                    <h1 id='cartHeading'>Shopping cart</h1>
                    <div id='shippingCostContainer'>
                        <p>Shipping cost starting from 7€</p>
                    </div>
                    <div id='cartListContainer' className='w100'>
                        <ul id='cartList' className='d-flex d-col w100'>
                            <CartItem />
                            <CartItem />
                        </ul>
                    </div>
                    <div id='cartTotalWrapper'>
                        <ul id='cartTotalContainer'>
                            <li className='d-flex'>
                                <span className='cartTotalBox firstCol'>Sub-total</span>
                                <span className='cartTotalBox lastCol'>{(19.90 * 2).toFixed(2)}€</span>
                            </li>
                            <li className='d-flex'>
                                <span className='cartTotalBox firstCol'>Taxes</span>
                                <span className='cartTotalBox lastCol'>{(19.90 * 2 * 0.21).toFixed(2)}€</span>
                            </li>
                            <li className='d-flex'>
                                <span className='cartTotalBox firstCol'>Total</span>
                                <span className='cartTotalBox lastCol'>{(19.90 * 2 * 1.21).toFixed(2)}€</span>
                            </li>
                        </ul>
                    </div>
                    <button id='checkoutBtn' className='btn btn-primary btn-block'>Checkout</button>
                    <button id='shopMoreBtn' className='btn btn-secondary btn-block'>Continue shopping</button>
                </div>
            </div>
        );
    }
}

class CartItem extends Component {
    render() {
        return (
            <li className='cart-item-wrapper'>
                <div className='cart-item-container d-flex d-col'>
                    <div className='cart-item-flex d-flex justify-start'>
                        <div className='cart-item-img-wrapper'>
                            <img className='cart-item-img' src='https://images-na.ssl-images-amazon.com/images/I/51uYlDqoIyL._AC_US218_.jpg' alt='The Hobbit' />
                        </div>
                        <div>
                            <h3>The Hobbit</h3>
                            <button className='btn delete-btn'><FontAwesomeIcon icon={faTrashAlt} /></button>
                        </div>
                    </div>
                    <div>
                        <span>19.90€</span>
                    </div>
                </div>
            </li>
        );
    }
}

export default Cart;