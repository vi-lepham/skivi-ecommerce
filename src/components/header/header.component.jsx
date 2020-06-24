import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { ReactComponent as UserIcon } from '../../assets/user.svg'; 
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import './header.styles.scss';

const Header = ({ currentUser }) => (
    <div className='header'>
        <Link to='/'>
            <h1>Skivi</h1>
        </Link>
        <div className='navigation'>
            <Link to='/shop'>SHOP</Link>
            <Link to='/contact'>CONTACT</Link>
            {
                currentUser ?
                (<Link to='/account'> <UserIcon className='user-icon' /> </Link>)
                :
                (<Link to='/signinsignup'> SIGN IN </Link>)
            }
            <CartIcon />
        </div>
        <CartDropdown />
    </div>
)

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);