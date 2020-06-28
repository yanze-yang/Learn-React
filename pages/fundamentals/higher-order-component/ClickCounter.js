import React, { Component } from "react";
import UpdatedComponent from "./withCounter";

class ClickCounter extends Component {
  render() {
    const { count, incrementCount, name } = this.props;
    return (
      <div>
        <button onClick={incrementCount}>Clicked {count} times</button>
        <div>Name: {name}</div>
      </div>
    );
  }
}

export default UpdatedComponent(ClickCounter);
