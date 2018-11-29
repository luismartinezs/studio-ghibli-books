import React, { Component } from 'react';

class Detail extends Component {
    render() {
        const props = this.props.props;

        return (
            <div id='detailWrapper w-100'>
                <div id='detailContainer' className='d-flex d-col justify-center align-center w-100'>
                    <div id='detailImgWrapper'>
                        <img src={require('./images/book_cover_template.jpg')} alt='The Hobbit' />
                    </div>
                    <div id='detailTxtContent'>
                        <div id='detailTxtMain'>
                            <h2>My Neighbor Totoro</h2>
                            <p id='detailTxtDescription'>Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her.</p>
                        </div>
                        <div id='detailTxtExtra'>
                            <div>
                                <span className='key'>Director:</span> <span>Hayao Miyazaki</span>
                            </div>
                            <div>
                                <span className='key'>Producer:</span> <span>Hayao Miyazaki</span>
                            </div>
                            <div>
                                <span className='key'>Year:</span> <span>1986</span>
                            </div>
                            <div>
                                <span className='key'>Rating:</span> <span>95</span>
                            </div>
                        </div>
                        <div id='priceWrapper'>
                            <span id='price'>€19.90</span>
                        </div>
                        <div>
                            <button id='detailBuyBtn' onClick={() => props.showScreen("CART")}>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Detail;