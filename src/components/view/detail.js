import React, { Component } from "react";

class Detail extends Component {
  render() {
    const { props } = this.props;

    return (
      <div id="detailWrapper w-100">
        <div
          id="detailContainer"
          className="d-flex d-col justify-center align-center w-100 detail__container"
        >
          <div id="detailImgWrapper" className="detail__img-wrapper">
            <img
              src={require("./images/book_cover_template.jpg")}
              alt={props.movies[props.currentDetailIndex].title}
            />
          </div>

          <DetailArea props={props} />
        </div>
      </div>
    );
  }
}

class DetailArea extends Component {
  render() {
    const { props } = this.props;

    return (
      <div id="detailTxtContent" className="detail__text-content">
        <div id="detailTxtMain">
          <h2>{props.movies[props.currentDetailIndex].title}</h2>
          <p id="detailTxtDescription" className="detail__text-description">
            {props.movies[props.currentDetailIndex].description}
          </p>
        </div>
        <div id="detailTxtExtra" className="detail__text-extra">
          <div>
            <span className="key">Director:</span>{" "}
            <span>{props.movies[props.currentDetailIndex].director}</span>
          </div>
          <div>
            <span className="key">Producer:</span>{" "}
            <span>{props.movies[props.currentDetailIndex].producer}</span>
          </div>
          <div>
            <span className="key">Year:</span>{" "}
            <span>{props.movies[props.currentDetailIndex].release_date}</span>
          </div>
          <div>
            <span className="key">Rating:</span>{" "}
            <span>{props.movies[props.currentDetailIndex].rt_score}</span>
          </div>
        </div>
        <div id="priceWrapper" className="price__wrapper">
          <span id="price" className="price">
            €19.90
          </span>
        </div>
        <div>
          <button
            id="detailBuyBtn"
            className="detail__buy-button"
            onClick={() => {
              props.addToCart(props.currentDetailIndex);
              props.showScreen("CART");
            }}
          >
            Buy Now
          </button>
        </div>
      </div>
    );
  }
}

export default Detail;
