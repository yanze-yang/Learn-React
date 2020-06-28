import React, { Component } from "react";

const withCounter = (WrappedComponent) => {
  class withCounter extends Component {
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
        <WrappedComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          name="My name is John, from Hoc"
          {...this.props}
        />
      );
    }
  }
  return withCounter;
};

export default withCounter;
