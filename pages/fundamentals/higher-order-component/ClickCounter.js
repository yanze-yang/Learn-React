import React, { Component } from "react";
import withCounter from "./withCounter";

class ClickCounter extends Component {
  render() {
    const { count, incrementCount, name } = this.props;
    const { num } = this.props;
    return (
      <div>
        <button onClick={incrementCount}>Clicked {count} times</button>
        <div>Name: {name}</div>
        <div>Num: {num}</div>
      </div>
    );
  }
}

export default withCounter(ClickCounter);
