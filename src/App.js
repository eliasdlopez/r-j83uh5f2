import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    count: 0
  }

  // handleChange = (event) => {
  //   this.setState((esto SIEMPRE ES UN CALLBACK DE PREVSTATE) => ({
  //     count: event.target.value.length
  //   }));
  // }

  handleChange = (event) => {
    this.setState({
      count: event.target.value.length
    });
  };
  
  
  render() {
    return (
      <div className="container">
        <textarea rows="3" onChange={this.handleChange}></textarea>
        <div className="counter">{this.state.count}</div>
      </div>
    );
  }
}

export default App;
