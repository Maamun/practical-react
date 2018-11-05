import React, { Component } from 'react';
import './App.css';
import { Body }from './Body';
import { Header } from './Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header 
        name='Nosnos' 
        num={5}
        myFunc={(a,b) => a + b}/>
        <Body text ='DE'
              text2='Hello'
              myFunc={(a,b) => a * b}/>
      </div>
    );
  }
}

export default App;
