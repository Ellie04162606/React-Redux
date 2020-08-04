import React, { Component } from "react";
import { connect } from "react-redux";
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
          <label>GroupNumber : {this.props.sum}</label>
        </div>
        {initArray.map((key) => (
          <Counter
            onIncrease={this.props.onInrease}
            onDecrease={this.props.onDecrease}
            unmountCounter={this.props.unmountCounter}
            groupSize={this.state.size}
            key={key}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { sum: state };
};

const mapDispatchToProps = (dispatch) => ({
  onInrease: () => dispatch({ type: "increase" }),
  onDecrease: () => dispatch({ type: "decrease" }),
  unmountCounter: (value) =>
    dispatch({ type: "unmountCounter", count: parseInt(value) }),
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterGroup);
