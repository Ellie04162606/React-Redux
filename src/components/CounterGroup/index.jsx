import React, { Component } from "react";
import Counter from "../Counter";

class CounterGroup extends Component {
  constructor(props) {
    super(props);
    this.state = { size: 0 };
  }

  handleResize = (event) => {
    this.setState({
      size: event.target.value ? parseInt(event.target.value) : 0,
    });
  };

  unmountCounter = (value) => {
      this.props.store.dispatch({ type: "unmountCounter", count: parseInt(value) });
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
          <label>GroupNumber : {this.props.store.getState()}</label>
        </div>
        {initArray.map((key) => (
          <Counter
            onIncrease={() => this.props.store.dispatch({ type: "increase" })}
            onDecrease={() => this.props.store.dispatch({ type: "decrease" })}
            unmountCounter={this.unmountCounter}
            groupSize={this.state.size}
            key={key}
          />
        ))}
      </div>
    );
  }
}

export default CounterGroup;
