import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AuthPage from './components/auth/AuthPage';
import LandingPage from './components/home/LandingPage'
import HomePage from './components/employees/HomePage'

const Routes = () => {

    return(
        <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path='/signup' component={AuthPage} />
            <Route path='/login' component={AuthPage} />
            <Route path='/home' component={HomePage} />
        </Switch>
    )
}

export default Routes