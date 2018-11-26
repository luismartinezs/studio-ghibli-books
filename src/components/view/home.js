import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons'
// library.add(faShoppingCart, faSearch) // adds an icon to lib
// <FontAwesomeIcon icon={faPlay} />


class Home extends Component {
    render() {
        return (
            <main>
                <Featured />
                <Popular />
                <Categories />
                <Popular />
                <Newsletter />
            </main>
        );
    }
}

class Featured extends Component {
    render() {
        return (
            <section id='featured'>

                <div className='mask d-flex align-center justify-center'>

                    <div id='featuredContainer' className='d-flex align-center justify-center text-center'>

                        <div id='featuredBook-wrapper'>
                            <img id='featuredBookThumbnail' src='https://images-na.ssl-images-amazon.com/images/I/51eq24cRtRL._SX331_BO1,204,203,200_.jpg'
                                alt='lord of the rings 50th anniversary edition' />
                        </div>

                        <div id='featuredBox-container'>
                            <h1>The Lord of the Rings</h1>
                            <span>50th anniversary edition</span>
                            <button id='buyNowBtn'>Buy now</button>
                        </div>

                    </div>

                </div>

            </section>
        );
    }
}

class Popular extends Component {
    render() {
        return (
            <section id='popular' className='boxes-wrapper d-flex justify-center'>

                <div id='popular-container' className='boxes-container d-flex d-col justify-center align-center'>

                    <h2>Most popular</h2>
                    <ul id='popularList' className='boxes-list d-flex justify-center'>

                        <li className='boxes-list-item text-center'>
                            <img src='https://images-na.ssl-images-amazon.com/images/I/51uYlDqoIyL._AC_US218_.jpg' alt='The Hobbit' />
                            <p><a href='#'>The Hobbit</a></p>
                        </li>

                        <li className='boxes-list-item text-center'>
                            <img src='https://images-na.ssl-images-amazon.com/images/I/714PP8U4G4L._AC_SR201,266_.jpg' alt='The Fall of Gondolin' />
                            <p><a href='#'>The Fall of Gondolin</a></p>
                        </li>

                        <li className='boxes-list-item text-center'>
                            <img src='https://images-na.ssl-images-amazon.com/images/I/41953X1GWGL._AC_US218_.jpg' alt='Lord of the Rings deluxe' />
                            <p><a href='#'>The Lord of the Rings Deluxe Edition</a></p>
                        </li>

                        <li className='boxes-list-item text-center'>
                            <img src='https://images-na.ssl-images-amazon.com/images/I/41mro76Ot2L._AC_US218_.jpg' alt='The Children of Húrin' />
                            <p><a href='#'>The Children of Húrin</a></p>
                        </li>

                        <li className='boxes-list-item text-center'>
                            <img src='https://images-na.ssl-images-amazon.com/images/I/5186KTZNTyL._AC_US218_.jpg' alt='Beren and Lúthien' />
                            <p><a href='#'>Beren and Lúthien</a></p>
                        </li>

                    </ul>

                    <button className='btn seeMoreBtn'>See more</button>

                </div>

            </section>
        );
    }
}

class Categories extends Component {
    render() {
        return (
            <section id='categories' className='d-flex d-col align-center justify-center w100'>

                <div id='categories-container' className='d-flex d-col justify-center align-center'>

                    <h2>Categories</h2>
                    <ul id='categoriesList' className='d-flex justify-center align-baseline w100'>

                        <li className='categories-list-item text-center d-flex d-col justify-center align-center'>
                            <div id='swordIcon'></div>
                            <h3><a href='#'>Battles & Glory</a></h3>
                        </li>

                        <li className='categories-list-item text-center d-flex d-col justify-center align-center'>
                            <div id='elfIcon'></div>
                            <h3><a href='#'>Rivendell Poems</a></h3>
                        </li>

                        <li className='categories-list-item text-center d-flex d-col justify-center align-center'>
                            <div id='firstAgeIcon'></div>
                            <h3><a href='#'>First Age</a></h3>
                        </li>

                        <li className='categories-list-item text-center d-flex d-col justify-center align-center'>
                            <div id='sauronIcon'></div>
                            <h3><a href='#'>Dark Tales</a></h3>
                        </li>

                        <li className='categories-list-item text-center d-flex d-col justify-center align-center'>
                            <div id='loreIcon'></div>
                            <h3><a href='#'>Gondor Lore</a></h3>
                        </li>

                    </ul>

                </div>

            </section>
        );
    }
}

class Newsletter extends Component {
    render() {
        return (
            <section id='newsletter' className='d-flex justify-center align-center w100'>

                <div id='newsletterContainer' className='d-flex d-col justify-center align-center'>

                    <h2>Subscribe</h2>

                    <form id='newsletterForm'>
                        <input id='newsletterInput' type='text' placeholder='Enter your email' />
                        <button id='submitBtn'>Submit</button>
                    </form>

                    <p id='spamMsg' className='text-center'>
                        We don't ever send spam.
                        Like you, we hate spam and we know that if we send spam to you, you will immediately unsubscribe
                    (and you should).</p>

                </div>

            </section>
        );
    }
}

export default Home;