import React, { Component } from 'react';
import './App.css';
import { Counter } from './Counter';
class App extends Component {
  state = {
    visible: true
  }

  render() {
    
    return (
      <div className="App">
      {this.state.visible ? <Counter /> : null}
      <button onClick={() => {
        this.setState({visible: !this.state.visible})
      }}>Toggle counter</button>
      </div>
    )
  }
}

export default App;
