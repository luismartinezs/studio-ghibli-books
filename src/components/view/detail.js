import React, { Component } from 'react';

class Detail extends Component {
    render() {
        return (
            <div id='detailWrapper w-100'>
                <div id='detailContainer' className='d-flex d-col justify-center align-center w-100'>
                    <div id='detailImgWrapper'>
                        <img src='https://images-na.ssl-images-amazon.com/images/I/51uYlDqoIyL._AC_US218_.jpg' alt='The Hobbit' />
                    </div>
                    <div id='detailTxtContent'>
                        <div id='detailTxtMain'>
                            <h2>The Hobbit</h2>
                            <p id='detailTxtDescription'>A true icon of popular cuisine, especially when paired with a classic Italian meat sauce. Matt durum wheat adds a lively and a firm texture that can capture even the most reluctant palate.</p>
                        </div>
                        <div id='detailTxtExtra'>
                            <div>
                                <span className='key'>Director:</span> <span>Hayao Miyazaki</span>
                            </div>
                            <div>
                                <span className='key'>Producer:</span> <span>Isao Takahata</span>
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
                            <button id='detailBuyBtn'>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Detail;