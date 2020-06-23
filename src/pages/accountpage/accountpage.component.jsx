import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import './accountpage.styles.scss';

const AccountPage = ({ currentUser }) => (
    <div className='account-page'>
            <Link to='/' onClick={() => auth.signOut()}>SIGN OUT</Link>   
    </div>
    
)

export default AccountPage;