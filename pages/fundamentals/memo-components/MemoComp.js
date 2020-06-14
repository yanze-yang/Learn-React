import React from "react";

const MemoComp = ({ name }) => {
  console.log("Memo Component render");
  return <div>{name}</div>;
};

// React.memo is a higher order component.
// It’s similar to React.PureComponent but for function components instead of classes.
export default React.memo(MemoComp);
