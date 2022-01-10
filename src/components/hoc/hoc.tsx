import React from "react";

interface ContainerProps {
  click: boolean;
}

interface StateProps {
  click: boolean;
}

function higherOrderComponents(
  ChildComponent: React.ComponentType<any | string>
) {
  return class Component extends React.Component<{}, StateProps> {
    state = {
      click: false,
    };

    handleClick = () => this.setState({ click: true });

    render() {
      return (
        <>
          <button onClick={this.handleClick}>Button</button>
          <ChildComponent click={this.state.click} />
        </>
      );
    }
  };
}

const Container: React.FunctionComponent<ContainerProps> = (props) => (
  <h1>{props.click ? "Button has been clicked" : "Click the button"}</h1>
);

export const HOC = higherOrderComponents(Container);
