import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-btn/custom-btn.component';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(){
        super();
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = e => {
        e.preventDefault();

        this.setState({ email: '', password: ''})
    }
    handleChange = e => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    }
    render(){
        return(
            <div className='signin-signup'>
                <div className='signin'>
                    <h2>I already have an account</h2>
                    <p>Sign in with your email and password</p>
                    <form onSubmit={this.handleSubmit}>
                        <FormInput 
                            name='email'
                            type='email'
                            value={this.state.email}
                            handleChange={this.handleChange}
                            label='Email'
                        />
                        <FormInput 
                            name='password'
                            type='password'
                            value={this.state.password}
                            handleChange={this.handleChange}
                            label='Password'
                        />
                        <CustomButton type='submit'> Sign In </CustomButton>
                    </form>
                </div>
            </div>
        )
    }
}

export default SignIn;