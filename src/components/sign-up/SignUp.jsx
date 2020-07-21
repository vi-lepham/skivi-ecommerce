import React, { useState } from 'react';

import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-btn/CustomButton';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './SignUp.scss';

const SignUp = () => {
  const [userCredentials, setUserCredentials] = useState({
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
  })

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
        alert ("passwords don't match");
        return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      setUserCredentials({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;

    setUserCredentials({...userCredentials, [name]: value });
  };
    
  return (
      <div className='signup'>
        <h2 className='title'>Sign up with your email and password</h2>
        <form className='sign-up-form' onSubmit={handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            handleChange={handleChange}
            label='Display Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            handleChange={handleChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            handleChange={handleChange}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            handleChange={handleChange}
            label='Confirm Password'
            required
          />
          <CustomButton className='signup-btn' type='submit'>SIGN UP</CustomButton>
        </form>
      </div>
    );
}

export default SignUp;