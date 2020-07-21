import React from 'react';
import { withRouter } from 'react-router-dom';

import HeroImage from '../../assets/women-s-pink-sweatshirt-and-brown-plaid-skirt-794064.jpg';

import CustomButton from '../custom-btn/CustomButton';
import Directory from '../directory/Directory';

import './Landing.scss';

const Landing = ({ history }) => (
    <div className='landing'>
        <div className='hero'>
            <div className='hero-image'>
                <img src={HeroImage} alt='Hero'></img>
            </div>
            <div className='hero-text'>
                <h1>FREE SHIPPING FIRST ORDER</h1>
                <CustomButton onClick={() => history.push('/shop')}>Shop Now</CustomButton>
            </div>
        </div>
        <h1 className='categories'>CATEGORIES</h1>
        <Directory />
    </div>
)

export default withRouter(Landing);