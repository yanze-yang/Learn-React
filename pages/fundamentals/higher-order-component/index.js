import React from "react";
import Footer from "../../components/Footer";
import Hoc1 from "./Hoc1";
import Hoc2 from "./Hoc2";

const App = () => {
  return (
    <div>
      <h2>Higher Order Components</h2>
      <Hoc1 />
      <br />
      <Hoc2 />
      <Footer />
    </div>
  );
};

export default App;
