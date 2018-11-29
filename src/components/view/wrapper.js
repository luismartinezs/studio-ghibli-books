import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import Home from './home';
import Detail from './detail';
import Cart from './cart';
import './styles.css';

class Wrapper extends Component {
  render() {

    const props = this.props.props;
    const screen = props.currentScreen;
    console.log("Wrapper props:",props);

      return (
        <div id="wrapper">
          <Header props={props}/>
          {screen === "HOME" ? <Home props={props}/> : screen === "CART" ? <Cart /> : <Detail props={props}/>}
          <Footer props={props}/>
        </div>
      );
    }
  }

export default Wrapper;