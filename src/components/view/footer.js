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
        return (
            <div id='footerMain-wrapper' class='d-flex justify-center align-center w100'>

                <div id='footerMain-container' class='d-flex justify-center align-start w100'>

                    <div id='footerLinks-container' class='footerCol'>

                        <h3>Links</h3>

                        <ul>
                            <li><a>Home</a></li>
                            <li><a>About</a></li>
                            <li><a>Popular</a></li>
                            <li><a>Best deals</a></li>
                            <li><a>Blog</a></li>
                            <li><a>Content</a></li>
                        </ul>

                    </div>

                    <div id='footerCategories-container' class='footerCol'>

                        <h3>Categories</h3>

                        <ul>
                            <li><a>Battles & Glory</a></li>
                            <li><a>Rivendell Poems</a></li>
                            <li><a>First Age</a></li>
                            <li><a>Dark Tales</a></li>
                            <li><a>Gondor Lore</a></li>
                        </ul>

                    </div>

                    <div id='footerContact-container' class='footerCol'>

                        <h3>Contact</h3>

                        <ul>
                            <li>Bilbo Baggins</li>
                            <li>Bag End, Hobbiton</li>
                            <li>The Shire, Middle Earth</li>
                            <li>(555)-555-555</li>
                            <li><a href='mailto:bilbobaggins@theshire.hob'> bilbobaggins@theshire.hob</a></li>
                        </ul>
                        <div id='footerSocialMediaIcons' class='d-flex'>
                            <a href='#'><i class="fab fa-facebook fa-2x"></i></a>
                            <a href='#'><i class="fab fa-twitter-square fa-2x"></i></a>
                            <a href='#'><i class="fab fa-youtube-square fa-2x"></i></a>
                            <a href='#'><i class="fab fa-amazon fa-2x"></i></a>
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

            <div id='bottomBar-wrapper' class=' d-flex justify-center align-center w100 text-center'>

                <div id='bottomBar-container'>
                    <span id='bottomBarMsg'>Made with plain HTML & CSS3 by Luis Martinez, 2018</span>
                </div>

            </div>
        );
    }
}

export default Footer;