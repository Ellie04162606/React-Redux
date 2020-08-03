import React from "react";
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0, groupSize: 0 };
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
    this.props.onDecrease();
  };

  onIncrease = () => {
    this.setState((preState) => ({
      value: preState.value + 1,
    }));

    this.props.onIncrease();
  };

  componentWillUnmount() {
    this.props.unmountCounter(this.state.value);
  }
}

export default Counter;
