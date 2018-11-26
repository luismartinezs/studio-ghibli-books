import React, { Component } from 'react';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPlay } from '@fortawesome/free-solid-svg-icons'
// library.add(faPlay) // adds an icon to lib
// <FontAwesomeIcon icon={faPlay} />
import Header from './header';
import Footer from './footer';
import Home from './home';
import Detail from './detail';
import './styles.css';

const screen = 'detail'; // home, detail, checkout

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
  }
}

export default Wrapper;