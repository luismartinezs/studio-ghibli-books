import React, { Component } from "react";

class Loading extends Component {
  render() {
    return (
      <div className="loading__background d-flex justify-center align-center vw100 vh100">
        <img src={require("./images/loading.png")} alt="sprite"/>
      </div>
    );
  }
}

export default Loading;
