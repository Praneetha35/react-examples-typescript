import React, { Component } from "react";
import { Text } from "../stateLifting/A";

interface Props {}
class B extends Component<any, Text> {
  constructor(props: Props) {
    super(props);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(e: any) {
    this.props.handleTextChange(e.target.value);
  }

  render() {
    return <input value={this.props.text} onChange={this.handleTextChange} />;
  }
}

export default B;
