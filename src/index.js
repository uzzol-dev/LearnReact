import React from "react";
import ReactDOM from "react-dom";
import Hook from "./Hook";
import MouseMove from "./MouseMove";
import { Race, LionMove } from "./MouseRace";
import "./styles.css";

const style = {
  height: 80 + "px",
  overflow: "scroll",
  backgroundColor: "green"
};

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Love you man</h2>
      <Hook />
      ct
      <Input />
      <MouseMove render={mouse => <Race mouse={mouse} />} />
      <LionMove />
    </div>
  );
}

class Input extends React.Component {
  constructor(props) {
    console.log("Initializing constructor");
    super(props);
    this.state = {
      name: "uzzol",
      list: []
    };
    this.listRef = React.createRef();
  }

  static getDerivedStateFromProps(nextProps, state) {
    console.log("called getDerivedStateFromProps", state);
    return null;
  }

  componentDidMount() {
    console.log("called component did mount");
    const div = document.getElementById("name");
    // div.innerText = "Changed"
    div.style.color = "green";
    let list = ["one", "two", "three"];
    this.setState({ name: "uzzol ali", list });
  }
  shouldComponentUpdate(prevProps, prevState) {
    console.log("should component update called ", prevState);
    return true;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    let list = ["one", "two", "three", "four", "five", "six", "seven"];
    if (!prevState.list.length) {
      this.setState({ list });
    }
    console.log("component did update", prevState, snapshot);
    if (snapshot !== null) {
      const list = this.listRef.current;
      console.log("list height ", list.scrollHeight);
      list.scrollTop = list.scrollHeight - snapshot;
    }
  }

  getSnapshotBeforeUpdate() {
    console.log(
      "get snapshot  brefore update",
      this.listRef.current.scrollHeight
    );
    return this.listRef.current.scrollHeight;
  }
  render() {
    console.log("called render");
    const { list } = this.state;
    return (
      <div>
        <div id="name">Hello world {this.state.name}</div>
        <ul ref={this.listRef} style={style} className="height">
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
