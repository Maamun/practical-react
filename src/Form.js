import React, { Component } from 'react'

import './App2.css';
export default class Form extends Component {
    render () {
        return (
            <div className="wrapper">
            <div className='form-wrapper'>
            <h1>Create Account</h1>
    <form action="" className="form">
    <div className="firstName"><label htmlFor="" className="firstName"></label><input type="text" name="" id="" placeholder="First Name"/></div>
   <div className="lastName"><label htmlFor="" className="lastName"></label><input type="text" name="" id="" placeholder="Last Name"/></div> 
   <div className="email"><label htmlFor="" className="email"></label><input type="email" name="" id="" placeholder="Email"/></div>
   <div className="password"><label htmlFor="" className="password"></label><input type="password" name="" id="" placeholder="Password"/></div>
   <div className='createAccount
'>
       <button type="submit">Create Account</button>
       <small>Already Have an Account?</small>
   </div>
    </form>
</div>


</div>
        )
    }
}

 


