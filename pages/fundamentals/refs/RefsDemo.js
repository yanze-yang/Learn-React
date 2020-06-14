import React, { Component } from "react";

class RefsDemo extends Component {
  constructor(props) {
    super(props);
    // approach 1: React.createRef();
    this.inputRef = React.createRef();

    // older approach: callback ref
    this.callbackRef = null;
    this.setCallbackRef = (element) => {
      this.callbackRef = element;
    };
  }

  componentDidMount() {
    // this.inputRef.current accesses the input DOM
    this.inputRef.current.focus();
    console.log(this.inputRef);

    // this.callbackRef directly accesses the input DOM, no current
    // React will call the ref callback with the DOM when the component mounts,
    // and call it with null when the component unmounts.
    // we need check if the value is not null.
    if (this.callbackRef) {
      this.callbackRef.focus();
      console.log(this.callbackRef);
    }
  }

  clickHandler = () => {
    alert(this.inputRef.current.value);
  };

  clickHandler2 = () => {
    alert(this.callbackRef.value);
  };

  render() {
    return (
      <div>
        <div>
          <input type="text" ref={this.inputRef} />
          <button onClick={this.clickHandler}>check input value</button>
        </div>
        <div>
          <input type="text" ref={this.setCallbackRef} />
          <button onClick={this.clickHandler2}>check input value</button>
        </div>
      </div>
    );
  }
}

export default RefsDemo;
