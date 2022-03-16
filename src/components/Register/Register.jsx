import React, { Component } from 'react'


export default class Register extends Component {
    user={
        first_name: '',
        last_name: '',
        email: '',
        password: '',
    }
    getFormData=(e)=>{
        this.user[e.target.name]=e.target.value
        console.log(this.user);
    }
    sendData=(e)=> {
        e.preventDefault()
        console.log('submit');
    }
    render() {
        return (
            <>
                <div className="w-75 mx-auto my-5">
                    <form onSubmit={this.sendData}>
                        <input onChange={this.getFormData} name='first_name' type="text" placeholder='First Name' className='form-control mt-3'/>
                        <input onChange={this.getFormData} type="text" placeholder='Last Name' name='last_name' className='form-control mt-3'/>
                        <input onChange={this.getFormData} type="email" placeholder='Email' name='email' className='form-control mt-3'/>
                        <input onChange={this.getFormData} type="password" placeholder='Password' name='password' className='form-control mt-3'/>
                        <button className='btn btn-info mt-4'>Register</button>
                    </form>
                </div>
                

             </>
        )}}
