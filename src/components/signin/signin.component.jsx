import React from 'react';
import './signin.styles.scss';

import Input from '../form-input/form-input.component';
import Button from '../cutom-button/custom-button.component';


class SignIn extends React.Component {
    constructor() {
        super()

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault()
        this.setState({email:'', password: ''})
    }

    handleChange = event => {
        const{value, name} = event.target;
        this.setState({[name]: value})
    }

    render() {
        return (
            <div className='sign-in'>
                <h2 className='title'>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <Input
                        name='email'
                        type='email'
                        handleChange={this.handleChange}
                        value={this.state.email}
                        required
                        label='Email' />
                    <Input
                        name='password'
                        type='password'
                        handleChange={this.handleChange}
                        value={this.state.password}
                        required 
                        label='Password' />
                    <Button type="submit">Sign In</Button>
                </form>
            </div>

        )
    }
}


export default SignIn;