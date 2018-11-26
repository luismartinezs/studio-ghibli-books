import React, { Component } from 'react';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPlay } from '@fortawesome/free-solid-svg-icons'
// library.add(faPlay) // adds an icon to lib
// <FontAwesomeIcon icon={faPlay} />
import './styles.css';
import './header';
import './footer';
import './home';

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