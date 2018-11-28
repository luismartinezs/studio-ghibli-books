import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import Home from './home';
import Detail from './detail';
import Cart from './cart';
import './styles.css';

const screen = 'home'; // home, detail, cart

class Wrapper extends Component {
  render() {
    if (screen === 'home') {
      return (
        <div>
          <Header />
          <Home />
          <Footer />
        </div>
      );
    }
    if (screen === 'detail') {
      return (
        <div>
          <Header />
          <Detail />
          <Footer />
        </div>
      );
    }
    if (screen === 'cart') {
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