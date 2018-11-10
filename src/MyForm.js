import React, { Component } from 'react';

class MyForm extends Component {
    state = {
        name: '',
        favouritePet: '',
        rememberMe: false,
        title: 'Miss.'
    }

    handleChange = event => {
        const isCheckbox = event.target.type === 'checkbox'
        this.setState({
        [event.target.name]: isCheckbox ? event.target.checked : event.target.value
        }
        )
    }
    
    
    handleSubmit = (e) => {
        e.preventDefault()
        console.log('====================================');
        console.log(this.state);
        console.log('====================================');
    } 
    render() {
        return (
            <form onSubmit={this.handleSubmit} action="">
            
                <input name='name' value={this.state.name} type="text" onChange={this.handleChange}/>
                <br/>
                <textarea name='favouritePet' value={this.state.favouritePet} onChange={this.handleChange} cols="30" rows="10"></textarea>
                

                <br/>
        <input 
        name='rememberMe' 
        type="checkbox" 
                checked={this.state.rememberMe} 
                onChange={this.handleChange}
                />
   
            

            

            
            <select name='title' value={this.state.title} onChange={this.handleChange}>
            <option>Miss</option>
            <option>Mrs.</option>
            <option>Mr.</option>
            <option>Ms.</option>
            </select>
        
        <button type="submit">Submit</button>
            
            </form>
        );
    }
}

export default MyForm;