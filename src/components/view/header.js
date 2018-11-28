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
    return (
      <div id='topBar' className='d-flex align-center'>
        <div id='topBar-container' className='d-flex align-center justify-center'>
          <span id='contactInfo'>Street - City - Call us: 555-555-555 - email: username@gmail.com</span>
          <span id='topBar-buttons'>
            <button id='myAccountBtn'>My account</button>
            <button id='cartBtn'><FontAwesomeIcon icon={faShoppingCart} /></button>
            <button id='burguerMenuBtn'><FontAwesomeIcon icon={faBars} /></button>
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
              <img id='logo-main' src='http://www.ghibli.jp/img/home.png' alt='Logo' />
              <span id='tagline'><strong>B</strong>ook <strong>S</strong>tore</span>
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

    const menuList = ['Home', 'About', 'Popular', 'Deals', 'Categories', 'Blog', 'Contact'].map((elem) => {
      return (
        <li className='navList-item d-flex align-center justify-center'>
          <a className='nav-link'>{elem}</a>
        </li>
      );
    })

    return (
      <nav id='mainNav' className='d-flex align-center justify-center'>
        <ul id='navList' className='d-flex'>
          {menuList}
        </ul>
      </nav>

    );
  }
}


export default Header;
