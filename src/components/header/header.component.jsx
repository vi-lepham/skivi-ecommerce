import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/original.svg';
import './header.styles.scss';

const Header = () => (
    <div className='header'>
        <Link to='/'>
            <Logo />
        </Link>
        <div className='navigation'>
            <Link to='/shop'>SHOP</Link>
            <Link to='/contact'>CONTACT</Link>
            <Link to='/signinsignup'>SIGN IN</Link>
        </div>
    </div>
)

export default Header;