import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import Home from './home';
import Detail from './detail';
import Cart from './cart';
import './styles.css';

class Wrapper extends Component {
  render() {

    const screen = this.props.currentScreen;

    if (screen === 'HOME') {
      return (
        <div>
          <Header />
          <Home />
          <Footer />
        </div>
      );
    }
    if (screen === 'DETAIL') {
      return (
        <div>
          <Header />
          <Detail />
          <Footer />
        </div>
      );
    }
    if (screen === 'CART') {
      return (
        <div>
          <Header />
          <Cart />
          <Footer />
        </div>
      );
    }
  }
}

export default Wrapper;