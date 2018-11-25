import React, { Component } from 'react';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPlay } from '@fortawesome/free-solid-svg-icons'
// library.add(faPlay) // adds an icon to lib
// <FontAwesomeIcon icon={faPlay} />
import './styles.css';
import './header';

class Wrapper extends Component {
  render() {
    return (
      <div>
      <Header />
      </div>
    );
  }
}

export default Wrapper;