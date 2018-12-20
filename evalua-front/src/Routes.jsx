import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LandingPage from './components/home/LandingPage'
import Signup from './components/auth/Signup'
import Login from './components/auth/Login'

function Routes (){
    return(
        <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path='/signup' component={Signup} />
            <Route path='/login' component={Login} />
        </Switch>
    )
}

export default Routes