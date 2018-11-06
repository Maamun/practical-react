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
      <div style={!this.state.visible ? {display: 'none'}: {}}>
      <Counter />
      </div>
      <button onClick={() => {
        this.setState({
          visible: !this.state.visible
        })
      }}>Toogle Counter</button>
      </div>
    )
  }
}

export default App;
