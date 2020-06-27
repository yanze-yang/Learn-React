import React from "react";

const FnRefs = () => {
  const myRef = React.createRef();

  const handleClick = () => {
    myRef.current.focus();
    console.log("myRef", myRef.current.value);
  };

  return (
    <div>
      <input ref={myRef} />
      <button onClick={handleClick}>dsfdf</button>
    </div>
  );
};

export default FnRefs;
