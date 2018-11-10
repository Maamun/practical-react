import React, { Component } from 'react';

class Form2 extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''

    }
    handleChange =  e => this.setState({
        [e.target.name]: e.target.value
    })
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.onSubmit(this.state)
    }
    render() {
        return (
            <div>
                <form action="">
                
                <input type="text" name="firstName" id="" placeholder="First Name" value={this.state.firstName} onChange={this.handleChange}/>
                <br/>
                <input type="text" name="lastName" id="" placeholder="Last Name" value={this.state.lastName} onChange={this.handleChange}/>
                <br/>
                <input type="email" name="email" id="" placeholder="Email" value={this.state.email} onChange={this.handleChange}/>
                <br/>
            
                <input type="password" name="password" id="" placeholder="" value={this.state.password} onChange={this.handleChange}/>
                <br/>
                <button type="submit" onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default Form2;