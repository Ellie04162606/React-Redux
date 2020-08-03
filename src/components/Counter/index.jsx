import React from "react";
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  render() {
    return (
      <div>
        <button onClick={this.onDecrease}>-</button>
        <label>{this.state.value}</label>
        <button onClick={this.onIncrease}>+</button>
      </div>
    );
  }

  onDecrease = () => {
    this.setState((preState) => ({
      value: preState.value - 1,
    }));
  };

  onIncrease = () => {
    this.setState((preState) => ({
      value: preState.value + 1,
    }));
  };
}

export default Counter;
