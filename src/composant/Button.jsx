import React, { Component } from "react";

export default class Button extends Component {
  render() {
    return (
      <div className="row">
        <button
          className="nes-btn"
          onClick={this.props.onClick}
        ></button>
      </div>
    );
  }
}