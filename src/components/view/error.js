import React, { Component } from "react";

class Error extends Component {
  render() {
    return (
      <div className="d-flex text-center justify-center align-center d-col error__background vw100 vh100">
        <h1>We're sorry!</h1>
        <iframe
          title="Totoro under the rain"
          src="https://giphy.com/embed/rR2AWZ3ip77r2"
          width="480"
          height="259"
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
        />
        <p>
          <a href="https://giphy.com/gifs/my-neighbor-totoro-rR2AWZ3ip77r2">
            via GIPHY
          </a>
        </p>
        <p>
          There was a problem while trying to retrieve the data.
          <br />
          Try again later
        </p>
      </div>
    );
  }
}

export default Error;
