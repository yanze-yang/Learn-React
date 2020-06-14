import React from "react";
import ParentComp from "./ParentComp";
import Footer from "../../components/Footer";

const App = () => {
  return (
    <div>
      -> 🎛 Open Consol
      <ParentComp />
      <Footer />
    </div>
  );
};

export default App;
