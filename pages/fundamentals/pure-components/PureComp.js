import React, { PureComponent } from "react";

// declare a `Pure Component` by using `extends PureComponent`
class PureComp extends PureComponent {
  render() {
    console.log("Pure Component render");

    return <div>Pure Component: {this.props.name}</div>;
  }
}

export default PureComp;
