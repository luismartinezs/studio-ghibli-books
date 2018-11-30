import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faSearch, faBars } from '@fortawesome/free-solid-svg-icons'
library.add(faShoppingCart, faSearch);


class Header extends Component {
  render() {
    const props = this.props.props;

    return (
      <header>
        <TopBar props={props} />
        <LogoArea props={props} />
        <Navbar props={props} />
      </header>
    );
  }
}

class TopBar extends Component {
  render() {
    const props = this.props.props;

    return (
      <div id='topBar' className='d-flex align-center'>
        <div id='topBar-container' className='d-flex align-center justify-center'>
          <span id='contactInfo'>Street - City - Call us: 555-555-555 - email: username@gmail.com</span>
          <span id='topBar-buttons'>
            <button id='myAccountBtn'>My account</button>
            <button id='cartBtn' onClick={() => props.showScreen("CART")}><FontAwesomeIcon icon={faShoppingCart} /></button>
            <button id='burguerMenuBtn' onClick={() => props.showScreen("MOBILE_MENU")}><FontAwesomeIcon icon={faBars} /></button>
          </span>
        </div>
      </div>
    );
  }
}

class LogoArea extends Component {
  render() {
    const props = this.props.props;

    return (
      <div id='logoArea' className='d-flex align-center'>

        <div id='logoArea-container' className='d-flex align-center'>

          <button id='logoAnchor' onClick={() => props.showScreen("HOME")}>
            <div id='logo-container' className='d-flex align-center'>
              <img id='logo-main' src='http://www.ghibli.jp/img/home.png' alt='Logo' />
              <span id='tagline'><strong>B</strong>ook <strong>S</strong>tore</span>
            </div>
          </button>

          <SearchBar />

        </div>
      </div>
    );
  }
}

class SearchBar extends Component {
  render() {

    return (
      <div id='searchBar' onSubmit={(e) => { e.preventDefault() }}>
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
    const props = this.props.props;

    const menuList = [
      {
        name: 'Home',
        method: () => props.showScreen("HOME")
      }, {
        name: 'About',
        method: () => false
      }, {
        name: 'Popular',
        method: () => false
      }, {
        name: 'Deals',
        method: () => false
      }, {
        name: 'Categories',
        method: () => false
      }, {
        name: 'Blog',
        method: () => false
      }, {
        name: 'Contact',
        method: () => false
      },
    ].map((elem) => {
      return (
        <li key={elem.name} className='navList-item d-flex align-center justify-center'>
          <button className='nav-link anchor-btn' onClick={elem.method}>{elem.name}</button>
        </li>
      );
    });

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
