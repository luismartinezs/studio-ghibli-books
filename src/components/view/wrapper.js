import React, { Component } from 'react';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPlay } from '@fortawesome/free-solid-svg-icons'
// library.add(faPlay) // adds an icon to lib
// <FontAwesomeIcon icon={faPlay} />
import './styles.css';
import Header from './header';
import Footer from './footer';
import Home from './home';

class Wrapper extends Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default Wrapper;