import React, { Component } from "react";
import LifeCycleChild from "./LifeCycleChild";

// -----------------
// Mounting stage 🔵
// -----------------

// constructor() -> getDerivedStateFromProps()
// -> render() -> componentDidMount()

class LifeCycleParent extends Component {
  // Constructor 🔵
  constructor(props) {
    super(props);
    this.state = { name: "John" };
    console.log("step 1: LifeCycle-parent constructor");
  }

  // getDerivedStateFromProps 🔵
  static getDerivedStateFromProps() {
    console.log("step 2: LifeCycle-parent getDerivedStateFromProps");
    return null;
  }

  // componentDidMount 🔵
  componentDidMount() {
    console.log("step 4: LifeCycle-parent componentDidMount");
  }

  componentWillUnmount() {
    console.log("scomponentWillUnmount");
  }

  // render 🔵
  render() {
    console.log("step 3: LifeCycle-parent render");
    return (
      <div>
        <h1>LifeCycleParent</h1>
        <LifeCycleChild />
      </div>
    );
  }
}

export default LifeCycleParent;
