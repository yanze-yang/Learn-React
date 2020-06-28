import React from "react";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";

// const NewComponent = highOrderComponent( originalComponent)
const Hoc2 = () => {
  return (
    <div>
      {/* when you pass `mynNum` to  <ClickCounter />, it is passed to HOC */}
      <ClickCounter myNum={5} />
      <HoverCounter />
    </div>
  );
};

export default Hoc2;
