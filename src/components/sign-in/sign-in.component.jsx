import React from 'react';
import { Link } from 'react-router-dom';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-btn/custom-btn.component';

import { ReactComponent as GoogleLogo } from '../../assets/google.svg';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(){
        super();
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = async e => {
        e.preventDefault();

        const { email, password } = this.state;
        
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState = {
                email: '',
                password: ''
            }
        } catch (error) {
            console.error(error);
            alert(error.message);
        }
    }
    handleChange = e => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    }
    render(){
        return(
            <div className='signin'>
                <div className='email-signin'>
                    <h2>Sign in with your email and password</h2>
                    <form onSubmit={this.handleSubmit}>
                        <FormInput 
                            name='email'
                            type='email'
                            value={this.state.email}
                            handleChange={this.handleChange}
                            label='Email'
                            required
                        />
                        <FormInput 
                            name='password'
                            type='password'
                            value={this.state.password}
                            handleChange={this.handleChange}
                            label='Password'
                            required
                        />
                        <div className='login-btn'>
                            <CustomButton type='submit'> <p>Sign In</p> </CustomButton>
                            <Link to='/signup'> New To Skivi? Sign Up Now</Link> 
                        </div>
                    </form>
                </div>
                <h2>OR</h2>
                <div className='external-signin'>
                    <h2>Sign in with</h2>
                    <CustomButton className='external-signin-btn'>
                        <GoogleLogo className='login-logo' onClick={signInWithGoogle}/> 
                        <span>Google</span>
                    </CustomButton>
                </div>
                
                
            </div>
        )
    }
}

export default SignIn;