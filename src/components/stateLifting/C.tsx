import React, { Component } from "react";
import { Text } from "../stateLifting/A";

class C extends Component<Text> {
  render() {
    return <h3>Output: {this.props.text}</h3>;
  }
}

export default C;
