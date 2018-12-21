import React, { Component } from "react";

class Error extends Component {
  render() {
    return (
      <div className="d-flex text-center justify-center d-col">
        <h1>We're sorry!</h1>
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
