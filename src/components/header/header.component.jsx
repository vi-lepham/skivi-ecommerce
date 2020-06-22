import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/original.svg';
import './header.styles.scss';

const Header = ({ currentUser }) => (
    <div className='header'>
        <Link to='/'>
            <Logo />
        </Link>
        <div className='navigation'>
            <Link to='/shop'>SHOP</Link>
            <Link to='/contact'>CONTACT</Link>
            {
                currentUser ?
                <Link className='user' to='/account'>
                    <div className='user-profile-img'
                        style={{
                            backgroundImage: `url(${currentUser.photoURL})`
                        }}>
                    </div>
                    <div className='user-name'>{currentUser.displayName}</div>
                </Link>
                :
                <Link to='/signinsignup'> SIGN IN </Link>
            }
        </div>
    </div>
)

export default Header;