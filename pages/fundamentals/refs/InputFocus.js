import React, { Component } from "react";
import Input from "./Input";

export class InputFocus extends Component {
  constructor(props) {
    super(props);

    this.componentRef = React.createRef();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.componentRef.current.focusInput();
  }

  render() {
    return (
      <div>
        <Input ref={this.componentRef} />
        <button onClick={this.handleClick}>focus</button>
      </div>
    );
  }
}

export default InputFocus;
