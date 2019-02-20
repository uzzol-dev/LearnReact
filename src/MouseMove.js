import React, { Component } from "react";

export default class MouseMove extends Component {
  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0 };
  }
  handleMouseMove = event => {
    this.setState({ x: event.clientX, y: event.clientY });
  };

  render() {
    return (
      <div
        style={{ height: "100%", background: "red" }}
        onMouseMove={this.handleMouseMove}
      >
        <p>Move your mouse</p>
        {this.props.render(this.state)}
        <p>
          Your current position is {this.state.x} and {this.state.y}
        </p>
      </div>
    );
  }
}
