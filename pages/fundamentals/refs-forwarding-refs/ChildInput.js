import React, { Component } from "react";

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

//
export default ChildInput;
