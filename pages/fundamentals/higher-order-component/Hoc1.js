import React, { Component } from "react";

// ClickCounter and HoverCounter have same counter logic.
// We can lift counter logic to Parent and pass props
// Parent -- counter logic: const {count, increaseFn } = props -> HoverCounter
//        -- counter logic -> ClickCounter

// If the React tree is complex, It will be hard to lift logic.
// Parent --> HoverCounter
//        --> Xcomponent --> Ycomponent --> ClickCounter
class ClickCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState((pre) => {
      return { count: pre.count + 1 };
    });
  };

  render() {
    return (
      <button onClick={this.incrementCount}>
        Clicked {this.state.count} times
      </button>
    );
  }
}

class HoverCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState((pre) => {
      return { count: pre.count + 1 };
    });
  };

  render() {
    return (
      <div onMouseEnter={this.incrementCount}>
        Hovered {this.state.count} times
      </div>
    );
  }
}

const Hoc1 = () => {
  return (
    <div>
      <ClickCounter />
      <HoverCounter />
    </div>
  );
};

export default Hoc1;
