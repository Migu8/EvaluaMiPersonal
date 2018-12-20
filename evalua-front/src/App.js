import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import { Route, Switch } from 'react-router-dom'
import LandingPage from './components/home/LandingPage'
import Signup from './components/auth/Signup'
import Login from './components/auth/Login'


class App extends Component {

  constructor(props){
    super(props)
    this.state = { loggedInUser: null }
  }

  fetchUser(){
    if( this.state.loggedInUser === null ){
      this.service.loggedin()
      .then(response =>{
        this.setState({
          loggedInUser:  response
        }) 
      })
      .catch( err =>{
        this.setState({
          loggedInUser:  false
        }) 
      })
    }
  }

  getTheUser = (userObj) =>{
    this.setState({
      loggedInUser: userObj
    })
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/signup' render={()=> <Signup getUser={this.getTheUser} />} />
          <Route path='/login' component={Login} />
        </Switch>
      </div>
    );
  }
}

export default App;
