import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleReset = () => {
    this.setState({ count: 0 });
  };

  handleIncrement = () => {
    this.setState((prevState) => ({ count: prevState.count + 5 }));
  };

  handleDecrement = () => {
    this.setState((prevState) => ({ count: prevState.count - 5 }));
  };

  render() {
    return (
      <div className="container">
        <h2>Simple counter App</h2>
        <div className="counter"><p>Counter - {this.state.count}</p></div>
        <div className="buttons">
          <button className="reset" onClick={this.handleReset}>
            Reset
          </button>
          <button className="increment" onClick={this.handleIncrement}>
            Increment
          </button>
          <button className="decrement" onClick={this.handleDecrement}>
            Decrement
          </button>
        </div>
      </div>
    );
  }
}

export default App;
