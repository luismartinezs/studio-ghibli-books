import React, { Component } from "react";
import Header from "./shared/header";
import Footer from "./shared/footer";
import Home from "./home";
import Detail from "./detail";
import Cart from "./cart";
import MobileMenu from "./shared/mobileMenu";
import Loading from "./loading";
import Error from "./error";
import "./styles.css";

class PresentationalWrapper extends Component {
  render() {
    const { props } = this.props;
    const { currentScreen } = props;

    if (currentScreen === "LOADING") {
      return <Loading />;
    }

    if (currentScreen === "ERROR") {
      return <Error />;
    }

    if (currentScreen === "MOBILE_MENU") {
      return <MobileMenu props={props} />;
    }

    return (
      <div>
        <Header props={props} />
        {currentScreen === "HOME" && <Home props={props} />}
        {currentScreen === "CART" && <Cart props={props} />}
        {currentScreen === "DETAIL" && <Detail props={props} />}
        <Footer props={props} />
      </div>
    );
  }
}

export default PresentationalWrapper;
