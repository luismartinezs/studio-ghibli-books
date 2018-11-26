import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons'
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
    return (
      <div id='topBar' class='d-flex align-center'>
        <div id='topBar-container' class='d-flex align-center justify-center'>
          <span id='contactInfo'>Bag End - Hobbiton - Call us: 555-555-555 - email: bilbobaggins@theshire.hob</span>
          <span id='topBar-buttons'>
            <button>My account</button>
            <button><FontAwesomeIcon icon={faShoppingCart} /></button>
          </span>
        </div>
      </div>
    );
  }
}

class LogoArea extends Component {
  render() {
    return (
      <div id='logoArea' class='d-flex align-center'>

        <div id='logoArea-container' class='d-flex align-center'>

          <a id='logoAnchor' href="#">
            <div id='logo-container' class='d-flex align-center'>
              <img id='logo-main' src='./images/one_ring.png' alt='One Ring Logo' />
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
      <nav id='mainNav' class='d-flex align-center justify-center'>
        <ul id='navList' class='d-flex'>
          <li class='navList-item d-flex align-center justify-center'>
            <a class='nav-link'>Home</a>
          </li>
          <li class='navList-item d-flex align-center justify-center'>
            <a class='nav-link'>About</a>
          </li>
          <li class='navList-item d-flex align-center justify-center'>
            <a class='nav-link'>Popular</a>
          </li>
          <li class='navList-item d-flex align-center justify-center'>
            <a class='nav-link'>Best deals</a>
          </li>
          <li class='navList-item d-flex align-center justify-center'>
            <a class='nav-link'>Categories</a>
          </li>
          <li class='navList-item d-flex align-center justify-center'>
            <a class='nav-link'>Blog</a>
          </li>
          <li class='navList-item d-flex align-center justify-center' id='contactBtn'>
            <a class='nav-link'>Contact</a>
          </li>
        </ul>
      </nav>

    );
  }
}


export default Header;
