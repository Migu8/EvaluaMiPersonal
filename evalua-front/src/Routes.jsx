import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AuthPage from './components/auth/AuthPage';
import LandingPage from './components/home/LandingPage'

const Routes = () => {

    return(
        <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/signup' component={AuthPage} />} />
            <Route exact path='/login' component={AuthPage} />
        </Switch>
    )
}

export default Routes