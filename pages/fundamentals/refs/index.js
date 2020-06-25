import React from "react";
import Footer from "../../components/Footer";
import RefsDemo from "./RefsDemo";
import InputFocus from "./InputFocus";

const App = () => {
  return (
    <div>
      -> 🎛 Open Consol
      <h2>Refs</h2>
      <RefsDemo />
      <h2>Refs with Class Components</h2>
      <InputFocus />
      <Footer />
    </div>
  );
};

export default App;
