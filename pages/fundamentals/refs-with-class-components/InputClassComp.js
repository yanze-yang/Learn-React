import React, { Component } from "react";

class InputClassComp extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  printInfoFn() {
    alert("Hi, it's printInfoFn() in InputClassComp");
  }

  focusInputFn() {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <div>
        <input ref={this.inputRef} />
      </div>
    );
  }
}

export default InputClassComp;
