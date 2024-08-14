import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    // Initialize the state
    this.state = {
      count: 0,
    };

    // Binding the event handler to the class instance
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  // Lifecycle method: called after the component is mounted
  componentDidMount() {
    console.log("Counter component mounted.");
  }

  // Lifecycle method: called before the component is unmounted
  componentWillUnmount() {
    console.log("Counter component will unmount.");
  }

  // Event handler method to increment the count
  handleIncrement() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    );
  }
}

export default Counter;
