import React from "react";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";

// const NewComponent = highOrderComponent( originalComponent)
const Hoc2 = () => {
  return (
    <div>
      <ClickCounter />
      <HoverCounter />
    </div>
  );
};

export default Hoc2;
