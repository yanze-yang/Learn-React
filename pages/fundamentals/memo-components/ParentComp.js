import React, { Component, PureComponent } from "react";
import MemoComp from "./MemoComp";

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

  render() {
    console.log("----- Parent Component render -----");
    return (
      <div>
        Parent Component
        <MemoComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
