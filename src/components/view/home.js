import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
library.add(faCheckCircle);

class Home extends Component {
  render() {
    const { props } = this.props;

    return (
      <main>
        <Featured props={props} />
        <ProductListing props={props} range="1" />
        <Categories props={props} />
        <ProductListing props={props} range="6" />
        <Newsletter />
      </main>
    );
  }
}

class Featured extends Component {
  render() {
    const { props } = this.props;

    return (
      <section className="featured">
        <div className="mask d-flex align-center justify-center">
          <div className="d-flex align-center justify-center text-center featured__container">
            <div className="featured__book-wrapper">
              <img
                className="featured__book-thumbnail"
                src={require("./images/book_cover_template.jpg")}
                alt="lord of the rings 50th anniversary edition"
              />
            </div>

            <div className="featured__box-container">
              <h1>{props.movies[0].title}</h1>
              <span>25th anniversary edition</span>
              <button
                className="buy-now-button"
                onClick={() => props.showScreen("DETAIL")}
              >
                Buy now
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

class ProductListing extends Component {
  render() {
    const { props } = this.props;
    const range = +this.props.range;

    const itemList = props.movies.slice(range, range + 5).map((elem, index) => {
      return (
        <li
          className="boxes-list-item text-center"
          key={index}
          onClick={() => {
            props.showScreen("DETAIL");
            props.setCurrentDetailIndex(index + range);
          }}
        >
          <img
            src={require("./images/book_cover_template.jpg")}
            alt={elem.title}
          />
          <p>
            <button className="anchor-btn">{elem.title}</button>
          </p>
        </li>
      );
    });

    return (
      <section className="boxes-wrapper d-flex justify-center">
        <div className="boxes-container d-flex d-col justify-center align-center">
          <h2>Most popular</h2>
          <ul className="boxes-list d-flex justify-center">{itemList}</ul>

          <button className="btn see-more-button">See more</button>
        </div>
      </section>
    );
  }
}

class Categories extends Component {
  render() {
    const categoryList = [0, 1, 2, 3, 4].map(elem => {
      return (
        <li
          className="categories-list-item text-center d-flex d-col justify-center align-center"
          key={elem}
        >
          <div className="category-icon">
            <FontAwesomeIcon icon={faCheckCircle} size="7x" />
          </div>
          <h3>
            <button className="anchor-btn">Fantasy</button>
          </h3>
        </li>
      );
    });

    return (
      <section className="d-flex d-col align-center justify-center w100 categories">
        <div className="d-flex d-col justify-center align-center categories__container">
          <h2>Categories</h2>
          <ul className="d-flex justify-center align-baseline w100 categories__list">
            {categoryList}
          </ul>
        </div>
      </section>
    );
  }
}

class Newsletter extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <section className="d-flex justify-center align-center w100 newsletter">
        <div className="d-flex d-col justify-center align-center newsletter__container">
          <h2>Subscribe</h2>

          <form className="newsletter__form" onSubmit={this.handleSubmit}>
            <input
              className="newsletter__input"
              type="text"
              placeholder="Enter your email"
            />
            <button className="submit-button">Submit</button>
          </form>

          <p className="text-center no-spam-message">
            We don't ever send spam. Like you, we hate spam and we know that if
            we send spam to you, you will immediately unsubscribe (and you
            should).
          </p>
        </div>
      </section>
    );
  }
}

export default Home;
