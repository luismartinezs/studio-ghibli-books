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
    const props = this.props.props;
    const screen = props.currentScreen;

    if (screen === "LOADING") {
      return <Loading />;
    }

    if (screen === "ERROR") {
      return <Error />;
    }

    if (screen === "MOBILE_MENU") {
      return <MobileMenu props={props} />;
    }

    return (
      <div id="PresentationalWrapper">
        <Header props={props} />
        {screen === "HOME" && <Home props={props} />}
        {screen === "CART" && <Cart props={props} />}
        {screen === "DETAIL" && <Detail props={props} />}
        <Footer props={props} />
      </div>
    );
  }
}

export default PresentationalWrapper;
