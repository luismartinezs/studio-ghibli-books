import React, { Component } from 'react';
import Header from '../view/shared/header';
import Footer from '../view/shared/footer';
import Home from '../view/home';
import Detail from '../view/detail';
import Cart from '../view/cart';
import MobileMenu from '../view/shared/mobileMenu';
import Loading from '../view/loading';
import Error from '../view/error';
import '../view/styles.css';

class Wrapper extends Component {
  render() {

    const props = this.props.props;
    const screen = props.currentScreen;

    if (screen === "LOADING") {
      return (
        <Loading />
      );
    }

    if (screen === "ERROR") {
      return (
        <Error />
      );
    }

    if (screen === "MOBILE_MENU") {
      return (
        <MobileMenu props={props} />
      );
    }

    return (
      <div id="wrapper">
        <Header props={props} />
        {screen === "HOME" && <Home props={props} />}
        {screen === "CART" && <Cart props={props} />}
        {screen === "DETAIL" && <Detail props={props} />}
        <Footer props={props} />
      </div>
    );
  }
}

export default Wrapper;