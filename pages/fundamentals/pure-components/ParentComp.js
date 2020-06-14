import React, { Component, PureComponent } from "react";
import RegComp from "./RegComp";
import PureComp from "./PureComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "John",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "John",
      });
    }, 2000);
  }
  // React.Component doesn’t implement shouldComponentUpdate(),
  // React.PureComponent implements it with a shallow prop and state comparison.
  // If there is no difference, the component will bot render - performance boost.
  // It is a good idea to ensure that all the children components are also pure to avoid unexpeted bahaviour.
  // Nerver mutate the state. Always retrun a new object that reflects the new state.
  render() {
    console.log("----- Parent Component render -----");
    return (
      <div>
        Parent Component
        <RegComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
