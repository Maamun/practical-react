import React, { Component } from 'react';
export class Counter extends Component {
    state = {count: 0}

    componentWillUnmount = () => {
      console.log('====================================');
      console.log('unmounting...');
      console.log('====================================');
    }
    
      componentDidMount () {
          console.log('====================================');
          console.log('Mounting...');
          console.log('====================================');
      }
        
    
    increment = () =>  {
        this.setState(({count}) => ({
            count: ++count
        }))
        
    }
  
    decrement = () =>  {
        this.setState(({count}) => ({
            count: --count
        }))
        
    }
  
    render() {
    return (
       <div className="App-header">
           <div>Counter {this.state.count}</div> 
           <button className='inc' onClick={this.increment}>Increment</button>
           <button className="dec" onClick={this.decrement}>Decrement</button>
       </div>
        );
  }
}