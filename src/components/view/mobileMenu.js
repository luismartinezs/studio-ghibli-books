import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
library.add(faTimesCircle) // adds an icon to lib
// <FontAwesomeIcon icon={faPlay} />


class MobileMenu extends Component {
    render() {
        const props = this.props.props;
        console.log("MobileMenu props:", props);

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
                <li key={elem.name}>
                    <button className="anchor-btn" onClick={elem.method}>{elem.name}</button>
                </li>
            );
        })

        return (
            <div id='mobileMenuWrapper' className="h100">
                <div id='mobileMenuContainer' className="d-flex d-col">
                    <button id="closeBtn" className="d-block" onClick={() => props.closeMenu()}>
                        <FontAwesomeIcon icon={faTimesCircle} />
                    </button>
                    <div id="menuListWrapper">
                        <ul id="menuList" className="d-flex d-col justify-center align-center text-center">
                            {menuList}
                            <li id="myAccount"><button id="menuListAccountBtn" className="anchor-btn">My Account</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default MobileMenu;
