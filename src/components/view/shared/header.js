import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faSearch,
  faBars
} from "@fortawesome/free-solid-svg-icons";
library.add(faShoppingCart, faSearch);

class Header extends Component {
  render() {
    const { props } = this.props;

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
    const { props } = this.props;

    return (
      <div className="d-flex align-center top-bar">
        <div className="d-flex align-center justify-center top-bar__container">
          <span className="contact-info">
            Street - City - Call us: 555-555-555 - email: username@gmail.com
          </span>
          <span className="top-bar__buttons">
            <button className="my-account__button">My account</button>
            <button onClick={() => props.showScreen("CART")}>
              <FontAwesomeIcon icon={faShoppingCart} />
            </button>
            <button
              className="burger-menu__button"
              onClick={() => props.showScreen("MOBILE_MENU")}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </span>
        </div>
      </div>
    );
  }
}

class LogoArea extends Component {
  render() {
    const { props } = this.props;

    return (
      <div className="d-flex align-center logo-area">
        <div className="d-flex align-center logo-area__container">
          <button
            className="logo__anchor"
            onClick={() => props.showScreen("HOME")}
          >
            <div className="d-flex align-center logo__container">
              <img
                className="logo__main"
                src="http://www.ghibli.jp/img/home.png"
                alt="Logo"
              />
              <span className="tagline">
                <strong>B</strong>ook <strong>S</strong>tore
              </span>
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
      <div
        className="search__bar"
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <form>
          <input
            className="search__input"
            type="text"
            placeholder="Search by book, author, keyword..."
          />
          <button className="search__button">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </div>
    );
  }
}

class Navbar extends Component {
  render() {
    const { props } = this.props;

    const menuList = [
      {
        name: "Home",
        method: () => props.showScreen("HOME")
      },
      {
        name: "About",
        method: () => false
      },
      {
        name: "Popular",
        method: () => false
      },
      {
        name: "Deals",
        method: () => false
      },
      {
        name: "Categories",
        method: () => false
      },
      {
        name: "Blog",
        method: () => false
      },
      {
        name: "Contact",
        method: () => false
      }
    ].map(elem => {
      return (
        <li
          key={elem.name}
          className="nav-list__item d-flex align-center justify-center"
        >
          <button className="nav-link anchor-btn" onClick={elem.method}>
            {elem.name}
          </button>
        </li>
      );
    });

    return (
      <nav className="d-flex align-center justify-center main-nav">
        <ul className="d-flex nav-list">{menuList}</ul>
      </nav>
    );
  }
}

export default Header;
