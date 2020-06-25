import React, { Component } from "react";
import ChildInput from "./ChildInput";

export class ParentInput extends Component {
  constructor(props) {
    super(props);

    // 1. We create a React ref by calling React.createRef and assign it to a ref variable.
    this.ref = React.createRef();
    this.focusClickHandler = this.focusClickHandler.bind(this);
  }

  focusClickHandler() {
    // the `focusInputFn()` defined on InputClassComp will make the input be focused.
    // we just use this.componentRef.current to access `focusInputFn()` and excute it.
    this.ref.current.focus();
  }

  render() {
    return (
      <div>
        {/* 2. We pass our ref down to <ChildInput ref={ref}> by specifying it as a JSX attribute. */}
        <ChildInput ref={this.ref} />
        <button onClick={this.focusClickHandler}>focus</button>
      </div>
    );
  }
}

export default ParentInput;
