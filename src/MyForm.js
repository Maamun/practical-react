import React, { Component } from 'react';

class MyForm extends Component {
    state = {
        name: '',
        favouritePet: '',
        rememberMe: false,
        title: 'Miss.'
    }

    handleChange = event => {
        this.setState({
            name: event.target.value
        }
        )
    }
    
    handleChangeFavouritePet = event => {
        this.setState({
            favouritePet: event.target.value
        }
        )
    }

    handleCheck = event => {
        this.setState({
            rememberMe: event.target.checked
        }
        )
    }
    handleSelect = event => {
        this.setState({
            title: event.target.value
        }
        )
    }
    handleSubmit = () => {
        console.log('====================================');
        console.log(this.state);
        console.log('====================================');
    } 
    render() {
        return (
            <div>
            
                <input value={this.state.name} type="text" onChange={this.handleChange}/>
                <textarea value={this.state.favouritePet} onChange={this.handleChangeFavouritePet} name="" id="" cols="30" rows="10"></textarea>
                

                
        <input 
                type="checkbox" 
                checked={this.state.rememberMe} 
                onChange={this.handleCheck}
                />
   
            

            

            <div>
            <select value={this.state.title} onChange={this.handleSelect}>
            <option>Miss</option>
            <option>Mrs.</option>
            <option>Mr.</option>
            <option>Ms.</option>
            </select>
        </div>

        <button type="submit" onClick={this.handleSubmit}>Submit</button>
            </div>
        );
    }
}

export default MyForm;