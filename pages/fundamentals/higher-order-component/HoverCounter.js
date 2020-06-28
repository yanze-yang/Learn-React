import React, { Component } from "react";
import withCounter from "./withCounter";

class HoverCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return <div onMouseEnter={incrementCount}>Hovered {count} times</div>;
  }
}

export default withCounter(HoverCounter);
