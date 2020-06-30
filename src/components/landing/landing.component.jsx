import React from 'react';
import { withRouter } from 'react-router-dom';

import HeroImage from '../../assets/women-s-pink-sweatshirt-and-brown-plaid-skirt-794064.jpg';

import CustomButton from '../custom-btn/custom-btn.component';
import Directory from '../directory/directory.component';

import './landing.styles.scss';

const Landing = ({ history }) => (
    <div className='landing'>
        <div className='hero'>
            <div className='hero-image'>
                <img src={HeroImage} alt='Hero'></img>
            </div>
            <div className='hero-text'>
                <h1>FREE SHIPPING FOR NEW COLLECTION</h1>
                <CustomButton onClick={() => history.push('/shop')}>Shop Now</CustomButton>
            </div>
        </div>
        <h1 className='categories'>CATEGORIES</h1>
        <Directory />
    </div>
)

export default withRouter(Landing);