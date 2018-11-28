import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import Header from './header';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons'
// library.add(faShoppingCart, faSearch) // adds an icon to lib
// <FontAwesomeIcon icon={faPlay} />


class Footer extends Component {
    render() {
        return (
            <footer>
                <MainWrapper />
                <BottomBar />
            </footer>
        );
    }
}

class MainWrapper extends Component {
    render() {

        const linkList = ['Home', 'About', 'Popular', 'Deals', 'Blog', 'Contact'].map( (elem) => {
            return (
                <li key={elem}><a>{elem}</a></li>
            );
        });

        const categoryList = ['Fantasy', 'Fantasy', 'Fantasy', 'Fantasy', 'Fantasy', 'Fantasy'].map( (elem) => {
            return (
                <li key={elem}><a>{elem}</a></li>
            );
        });

        return (
            <div id='footerMain-wrapper' className='d-flex justify-center align-center w100'>

                <div id='footerMain-container' className='d-flex justify-center align-start w100'>

                    <div id='footerLinks-container' className='footerCol'>

                        <h3>Links</h3>

                        <ul>
                            {linkList}
                        </ul>

                    </div>

                    <div id='footerCategories-container' className='footerCol'>

                        <h3>Categories</h3>

                        <ul>
                            {categoryList}
                        </ul>

                    </div>

                    <div id='footerContact-container' className='footerCol'>

                        <h3>Contact</h3>

                        <ul>
                            <li>Studio Ghibli</li>
                            <li>Address</li>
                            <li>City, country</li>
                            <li>(555)-555-555</li>
                            <li><a href='mailto:username@gmail.com'> username@gmail.com</a></li>
                        </ul>
                        <div id='footerSocialMediaIcons' className='d-flex'>
                            <a href='#'><i className="fab fa-facebook fa-2x"></i></a>
                            <a href='#'><i className="fab fa-twitter-square fa-2x"></i></a>
                            <a href='#'><i className="fab fa-youtube-square fa-2x"></i></a>
                            <a href='#'><i className="fab fa-amazon fa-2x"></i></a>
                        </div>

                    </div>

                </div>

            </div>
        );
    }
}

class BottomBar extends Component {
    render() {
        return (

            <div id='bottomBar-wrapper' className=' d-flex justify-center align-center w100 text-center'>

                <div id='bottomBar-container'>
                    <span id='bottomBarMsg'>Made with React by Luis Martinez, 2018</span>
                </div>

            </div>
        );
    }
}

export default Footer;