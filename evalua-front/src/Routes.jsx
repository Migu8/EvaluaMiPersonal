import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AuthPage from './components/auth/AuthPage';
import LandingPage from './components/home/LandingPage'
import HomePage from './components/employees/HomePage'
import ContactUs from './components/home/Contacto';
import Profile from './components/employees/Profile'
import Dashboard from './components/admin/Dashboard';

const Routes = () => {

    return(
        <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path='/signup' component={AuthPage} />
            <Route path='/login' component={AuthPage} />
            <Route path='/home' component={HomePage} />
            <Route path='/contact' component={ContactUs} />
            <Route path='/profile' component={Profile} />
            <Route path='/dashboard' component={Dashboard} />
        </Switch>
    )
}

export default Routes