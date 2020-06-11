import React from "react";
import LifeCycleParent from "./LifeCycleParent";
import LifeCycleChild from "./LifeCycleChild";
import Footer from "../../components/Footer";

const App = () => {
  return (
    <div>
      -> 🎛 Open Console
      <LifeCycleParent>
        <LifeCycleChild />
      </LifeCycleParent>
      <Footer />
    </div>
  );
};

export default App;
