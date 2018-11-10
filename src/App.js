import React, { Component } from 'react';
import './App.css';
import Form3
 from './Form3'

class App extends Component {
  
  state = {
    fields: {}
  }
  onSubmit = (fields) => {
    this.setState({ fields })
      console.log('====================================');
      console.log(fields);
      console.log('====================================');
  }
  render() {
  
    return ( 
      <div className="App">
      {/*<Form3 onSubmit={(x) => console.log(x)} id='Nosnos'/>*/}
      <Form3 onSubmit={this.onSubmit}/>

<p>{JSON.stringify(this.state.fields, null ,2)}</p>
      
      </div>
    )
  }
}

export default App;
