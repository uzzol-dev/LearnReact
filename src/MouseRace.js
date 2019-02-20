import React from "react";
import Mouse from "./MouseMove";
export class Race extends React.Component {
  render() {
    return (
      <div>
        <p>Race Mouse Position is</p>
        <p>
          Position {this.props.mouse.x} and {this.props.mouse.y}
        </p>
      </div>
    );
  }
}

export function WithMouse(Component) {
  return class extends React.Component {
    render() {
      return <Mouse render={mouse => <Component mouse={mouse} />} />;
    }
  };
}

function Lion(props) {
  return (
    <div>
      <p>Lion Comonent With HOC</p>{" "}
      <p>
        Mouse position {props.x} and {props.y}
      </p>
    </div>
  );
}

export const LionMove = WithMouse(Lion);
