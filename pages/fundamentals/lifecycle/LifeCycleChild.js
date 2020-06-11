import React, { Component } from "react";

class LifeCycleChild extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "John" };
    console.log("step 1: LifeCycle-child constructor");
  }

  static getDerivedStateFromProps() {
    console.log("step 2: LifeCycle-child getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("step 4: LifeCycle-child componentDidMount");
  }
  render() {
    console.log("step 3: LifeCycle-child render");
    return <div>LifeCycleChild</div>;
  }
}

export default LifeCycleChild;
