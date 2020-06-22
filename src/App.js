import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import SignInSignUp from './pages/signin-signup/signin-signup.component'
import './App.css';

function App() {
  return (
    <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signinsignup' component={SignInSignUp} />
        </Switch>
    </div>
  );
}

export default App;
