import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import SignInSignUpPage from './pages/signin-signup-page/signin-signup-page.component';


const App = () => (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/signin/' component={SignInSignUpPage} />
        <Route path='/shop/' component={ShopPage} />
      </Switch>
    </div>
  )

export default App;
