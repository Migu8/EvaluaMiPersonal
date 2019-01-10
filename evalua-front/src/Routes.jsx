import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AuthPage from './components/auth/AuthPage'
import LandingPage from './components/home/LandingPage'
import HomePage from './components/employees/HomePage'
import ContactUs from './components/home/Contact'
import Profile from './components/employees/Profile'
import Dashboard from './components/admin/Dashboard'
import Logout from './components/auth/Logout'
import Products from './components/home/Products'
import Employees from './components/admin/Employees'
import EmpDetail from './components/admin/EmpDetail'
import Surveys from './components/admin/Surveys'
import SurveysList from './components/employees/SurveysList';
import SurveyEmpForm from './components/employees/SurveyForm';
import Results from './components/admin/Results';

const Routes = () => {

    return(
        <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path='/signup' component={AuthPage} />
            <Route path='/login' component={AuthPage} />
            <Route path='/logout' component={Logout} />
            <Route path='/products' component={Products} />
            <Route path='/home' component={HomePage} />
            <Route path='/contact' component={ContactUs} />
            <Route path='/profile' component={Profile} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/results' component={Results} />
            <Route exact path='/employees' component={Employees} />
            <Route path='/employees/:id' component={EmpDetail} />
            <Route path='/survey' component={Surveys} />
            <Route path='/survey' component={SurveysList} />
            <Route path='/answer' component={SurveyEmpForm} />
        </Switch>
    )
}

export default Routes