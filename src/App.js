import React, { Component } from 'react';
import './App.css';
import Imageslider from './ImageSlider';
class App extends Component {
  state = {
    visible: true,
    label: 'Hide'
  }
  handleClick = () => {
    this.setState(({visible, label}) => ({
      visible: !visible
    }))
  }
  render() {
    const btnText = this.state.visible ? 'hide' : 'show'
    return (
      <div className="App">
      <button onClick={this.handleClick}>{btnText}</button>
      {this.state.visible ? <Imageslider /> : null}
      </div>
    )
  }
}

export default App;
