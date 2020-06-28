import React, { Component } from "react";

export class ParentInput extends Component {
  constructor(props) {
    super(props);

    // 1. We create a React ref by calling React.createRef and assign it to a ref variable.
    this.ref = React.createRef();
    this.focusClickHandler = this.focusClickHandler.bind(this);
  }

  focusClickHandler() {
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

// 3. React passes the ref to the (props, ref) => ... function inside forwardRef as a second argument.

// The second ref argument only exists when you define a component with React.forwardRef call.
// Regular function or class components don’t receive the ref argument, and ref is not available in props either.
const ChildInput = React.forwardRef(function (props, ref) {
  return (
    <div>
      {/* 4. We forward this ref argument down to <button ref={ref}> by specifying it as a JSX attribute. */}
      {/* 5. When the ref is attached, ref.current will point to the <input> DOM node. */}
      <input ref={ref} />
    </div>
  );
});

export default ParentInput;
