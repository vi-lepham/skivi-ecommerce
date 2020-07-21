import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as SearchIcon } from '../../assets/search.svg'; 
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';

import { selectDirectorySection } from '../../redux/directory/directory.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

import './Header.scss';

const Header = ({ currentUser, hidden, sections, history }) => (
    <div className='header'>
        <Link className='logo' to='/'>
            <h1>Skivi</h1>
        </Link>
        <div className='navigation'>
            <div className='left-nav'>
                {
                    sections.map( ({ id, title, pageUrl }) => (
                        <div key={id} className='categories-nav' onClick={() => history.push(`${pageUrl}`)}>{title}</div>
                    ))
                }
            </div>
            <div className='right-nav'>
                <SearchIcon className='search-icon' onClick={() => history.push('/search')} />
                {
                    currentUser ?
                    (<Link to='/' onClick={() => auth.signOut()}>SIGN OUT</Link>)
                    :
                    (<Link to='/signin'> SIGN IN </Link>)
                }
                <CartIcon className='cart-icon' />
            </div>
        </div>
        {
            hidden ? null : <CartDropdown />
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
    sections: selectDirectorySection
})

export default withRouter(connect(mapStateToProps)(Header));