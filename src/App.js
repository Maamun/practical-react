import React, { Component } from 'react';
import './App.css';
import Form3
 from './Form3'

class App extends Component {
  
  state = {
    fields: {}
  }
  onChange = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
    })
      console.log('====================================');
      console.log(updatedValue);
      console.log('====================================');
  }
  render() {
  
    return ( 
      <div className="App">
      {/*<Form3 onSubmit={(x) => console.log(x)} id='Nosnos'/>*/}
      <Form3 onChange={this.onChange}/>

<p>{JSON.stringify(this.state.fields, null ,2)}</p>
      
      </div>
    )
  }
}

export default App;
