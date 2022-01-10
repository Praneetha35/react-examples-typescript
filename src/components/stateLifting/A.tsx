import React, { Component } from "react";
import B from "./B";
import C from "./C";
//The state of components B and C is made common by lifting it to the Parent Component A.
//The input is obtained from component B and displayed in component C

interface Props {}

export type Text = {
  text: string;
};
export class A extends Component<any, Text> {
  constructor(props: Props) {
    super(props);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.state = { text: "" };
  }

  handleTextChange(newText: string) {
    this.setState({ text: newText });
  }

  render() {
    return (
      <React.Fragment>
        <B text={this.state.text} handleTextChange={this.handleTextChange} />
        <C text={this.state.text} />
      </React.Fragment>
    );
  }
}
