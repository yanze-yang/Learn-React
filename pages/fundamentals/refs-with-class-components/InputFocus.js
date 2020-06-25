import React, { Component } from "react";
import InputClassComp from "./InputClassComp";

export class InputFocus extends Component {
  constructor(props) {
    super(props);

    this.componentRef = React.createRef();
    this.focusClickHandler = this.focusClickHandler.bind(this);
    this.infoClickHandler = this.infoClickHandler.bind(this);
  }

  focusClickHandler() {
    // the `focusInputFn()` defined on InputClassComp will make the input be focused.
    // we just use this.componentRef.current to access `focusInputFn()` and excute it.
    this.componentRef.current.focusInputFn();
  }

  infoClickHandler() {
    // the componentRef represents the whole class component.
    // you can excute any function defined on InputClassComp like this:
    this.componentRef.current.printInfoFn();
  }

  render() {
    return (
      <div>
        <InputClassComp ref={this.componentRef} />
        <button onClick={this.focusClickHandler}>focus</button>
        <button onClick={this.infoClickHandler}>alert</button>
      </div>
    );
  }
}

export default InputFocus;
