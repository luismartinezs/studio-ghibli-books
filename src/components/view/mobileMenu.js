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

        const menuList = ['Home', 'About', 'Popular', 'Deals', 'Categories', 'Blog', 'Contact'].map((elem) => {
            return (
                <li key={elem}>
                    <button className="anchor-btn">{elem}</button>
                </li>
            );
        })

        return (
            <div id='mobileMenuWrapper' className="h100">
                <div id='mobileMenuContainer' className="d-flex d-col">
                    <button id="closeBtn" className="d-block">
                        <FontAwesomeIcon icon={faTimesCircle} />
                    </button>
                    <div id="menuListWrapper">
                        <ul id="menuList" className="d-flex d-col justify-center align-center text-center">
                            {menuList}
                            <li id="myAccount">My Account</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default MobileMenu;
