import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { ReactComponent as UserIcon } from '../../assets/user.svg'; 
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link className='logo' to='/'>
            <h1>Skivi</h1>
        </Link>
        <div className='navigation'>
            <div className='left-nav'>
                <Link to='/shop'>SHOP</Link>
            </div>
            <div className='right-nav'>
                {
                    currentUser ?
                    (<Link to='/account'> <UserIcon className='user-icon' /> </Link>)
                    :
                    (<Link to='/signin'> SIGN IN </Link>)
                }
                <CartIcon />
            </div>
        </div>
        {
            hidden ? null : <CartDropdown />
        }
    </div>
)

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);