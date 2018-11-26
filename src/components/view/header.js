import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faSearch, faBars } from '@fortawesome/free-solid-svg-icons'
library.add(faShoppingCart, faSearch) // adds an icon to lib
// <FontAwesomeIcon icon={faPlay} />


class Header extends Component {
  render() {
    return (
      <header>
        <TopBar />
        <LogoArea />
        <Navbar />
      </header>
    );
  }
}

class TopBar extends Component {
  render() {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    let myVar = '';
    if (w < 700) { myVar = 'You can only see me in your phone'; }
    console.log(w, h);
    return (
      <div id='topBar' className='d-flex align-center'>
        <div id='topBar-container' className='d-flex align-center justify-center'>
          <span id='contactInfo'>Bag End - Hobbiton - Call us: 555-555-555 - email: bilbobaggins@theshire.hob</span>
          <span id='topBar-buttons'>
            {myVar}
            <button>My account</button>
            <button><FontAwesomeIcon icon={faShoppingCart} /></button>
            <button><FontAwesomeIcon icon={faBars} /></button>
          </span>
        </div>
      </div>
    );
  }
}

class LogoArea extends Component {
  render() {
    return (
      <div id='logoArea' className='d-flex align-center'>

        <div id='logoArea-container' className='d-flex align-center'>

          <a id='logoAnchor' href="#">
            <div id='logo-container' className='d-flex align-center'>
              <img id='logo-main' src={require('./images/one_ring.png')} alt='One Ring Logo' />
              <span id='tagline'><strong>B</strong>ag <strong>E</strong>nd<br /> <strong>B</strong>ooks</span>
            </div>
          </a>

          <SearchBar />

        </div>
      </div>
    );
  }
}

class SearchBar extends Component {
  render() {
    return (
      <div id='searchBar'>
        <form>
          <input id='searchInput' type='text' placeholder='Search by book, author, keyword...' />
          <button id='searchBtn'><FontAwesomeIcon icon={faSearch} /></button>
        </form>
      </div>
    );
  }
}

class Navbar extends Component {
  render() {
    return (
      <nav id='mainNav' className='d-flex align-center justify-center'>
        <ul id='navList' className='d-flex'>
          <li className='navList-item d-flex align-center justify-center'>
            <a className='nav-link'>Home</a>
          </li>
          <li className='navList-item d-flex align-center justify-center'>
            <a className='nav-link'>About</a>
          </li>
          <li className='navList-item d-flex align-center justify-center'>
            <a className='nav-link'>Popular</a>
          </li>
          <li className='navList-item d-flex align-center justify-center'>
            <a className='nav-link'>Best deals</a>
          </li>
          <li className='navList-item d-flex align-center justify-center'>
            <a className='nav-link'>Categories</a>
          </li>
          <li className='navList-item d-flex align-center justify-center'>
            <a className='nav-link'>Blog</a>
          </li>
          <li className='navList-item d-flex align-center justify-center' id='contactBtn'>
            <a className='nav-link'>Contact</a>
          </li>
        </ul>
      </nav>

    );
  }
}


export default Header;
