import React, { Component } from 'react';
import logo from './logo.svg';
export class Header extends Component {
  render() {
    return (<header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Hi {this.props.name}.
          </p>
      <div>{this.props.myFunc(1, 6)}</div>
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
          </a>
    </header>);
  }
}