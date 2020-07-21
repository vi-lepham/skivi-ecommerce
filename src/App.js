import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Header from './components/header/Header';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shoppage/ShopPage';
import SignInPage from './pages/signinpage/SignInPage';
import SignUpPage from './pages/signuppage/SignUpPage';
import CheckOutPage from './pages/checkoutpage/CheckOutPage';
import SearchPage from './pages/searchpage/SearchPage';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

import './App.css';

const App = ({ currentUser, setCurrentUser }) => {

  let unsubscribeFromAuth = null;

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          })
        })
      } 
      
      setCurrentUser(userAuth);
    })

    return () => {
      unsubscribeFromAuth()
    }

  }, [])

  return (
    <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={() => currentUser ? (<Redirect to='/' />) : (<SignInPage />)} />
          <Route path='/signup' component={SignUpPage} />
          <Route exact path='/checkout' component={CheckOutPage} />
          <Route path='/search' component={SearchPage} />
        </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
