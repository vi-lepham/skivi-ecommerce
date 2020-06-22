import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import './accountpage.styles.scss';

const AccountPage = () => (
    <Link to='/' onClick={() => auth.signOut()}>SIGN OUT</Link>
)

export default AccountPage;