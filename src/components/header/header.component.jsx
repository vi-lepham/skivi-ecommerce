import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/original.svg';
import { ReactComponent as UserLogo } from '../../assets/iconmonstr-user-circle-thin.svg'; 

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
                (<Link to='/account'> <UserLogo /> </Link>)
                :
                (<Link to='/signinsignup'> SIGN IN </Link>)
            }
        </div>
    </div>
)

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);