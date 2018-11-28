import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
library.add(faCheckCircle) // adds an icon to lib
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
                            <img id='featuredBookThumbnail' src={require('./images/book_cover_template.jpg')}
                                alt='lord of the rings 50th anniversary edition' />
                        </div>

                        <div id='featuredBox-container'>
                            <h1>My Neighbor Totoro</h1>
                            <span>25th anniversary edition</span>
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

        const itemList = [0,1,2,3,4].map( (elem) => {
            return (<li className='boxes-list-item text-center' key={elem}>
            <img src={require('./images/book_cover_template.jpg')} alt='My Neighbor Totoro' />
            <p><a href='#'>My Neighbor Totoro</a></p>
        </li>)
        });

        return (
            <section id='popular' className='boxes-wrapper d-flex justify-center'>

                <div id='popular-container' className='boxes-container d-flex d-col justify-center align-center'>

                    <h2>Most popular</h2>
                    <ul id='popularList' className='boxes-list d-flex justify-center'>

                        {itemList}

                    </ul>

                    <button className='btn seeMoreBtn'>See more</button>

                </div>

            </section>
        );
    }
}

class Categories extends Component {
    render() {

        const categoryList = [0,1,2,3,4].map( (elem) => {
            return (<li className='categories-list-item text-center d-flex d-col justify-center align-center'>
            <div className='categoryIcon'><FontAwesomeIcon icon={faCheckCircle} size="7x" /></div>
            <h3><a href='#'>Fantasy</a></h3>
        </li>)
        });

        return (
            <section id='categories' className='d-flex d-col align-center justify-center w100'>

                <div id='categories-container' className='d-flex d-col justify-center align-center'>

                    <h2>Categories</h2>
                    <ul id='categoriesList' className='d-flex justify-center align-baseline w100'>

                        {categoryList}

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