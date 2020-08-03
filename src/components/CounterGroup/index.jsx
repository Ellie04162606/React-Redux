import React, { Component } from "react";
import Counter from "../Counter";
class CounterGroup extends Component {
  constructor(props) {
    super(props);
    this.state = { size: 0, totalNumber: 0 };
  }

  handleResize = (event) => {
    this.setState({
      size: event.target.value ? parseInt(event.target.value) : 0,
      totalNumber: 0,
    });
  };

  handleIncrease = () => {
    this.setState((preState) => ({
      totalNumber: preState.totalNumber + 1,
    }));
  };

  handleDecrease = () => {
    this.setState((preState) => ({
      totalNumber: preState.totalNumber - 1,
    }));
  };

  render() {
    const initArray = [...Array(this.state.size).keys()];
    return (
      <div>
        <div>
          <label>
            GroupSize :
            <input onBlur={this.handleResize} defaultValue={0}></input>
          </label>
        </div>
        <div>
          <label>GroupNumber : {this.state.totalNumber}</label>
        </div>
        {initArray.map((key) => (
          <Counter
            onIncrease={this.handleIncrease}
            onDecrease={this.handleDecrease}
            groupSize={this.state.size}
            key={key}
          />
        ))}
      </div>
    );
  }
}

export default CounterGroup;
