import React, { Component } from 'react'
import Login from './Login'
import Signup from './Signup'
import { login } from '../services/AuthService'

class AuthPage extends Component {
  state={
    user:{}
  }

  //La app no necesitará signup porque el admin los dará de alta
  // signup = e => {
  //   const {user} = this.state
  //   e.preventDefault()
  //   signup(user)
  //     .then(r=>{
  //       console.log(r)
  //       this.props.history.push('/login')
  //       console.log('User created correctly')
  //     }).catch(e=>{
  //       console.log('Something went wrong (signup)')
  //       console.log(e)
  //     })
  // }

  login = e => {
    const {user} = this.state
    e.preventDefault()
    login(user)
      .then(r=>{
        console.log(r)
        if(r.name){          
          console.log('You are logged in', r)
          localStorage.setItem('loggedUser',JSON.stringify(r))
          this.props.history.push('/home')
          console.log('Go to profile')         
        }
        else {
          console.log('Something went wrong (login)')
          this.props.history.push('/')
        }
      }).catch(e=>{
        console.log(e)
      })
  }

  handleText = e => {
    const {user} = this.state
    const field = e.target.name
    const value = e.target.value
    user[field] = value
    this.setState({user})
  }

  render() {
      const {pathname} = this.props.location
      const { signup, login, handleText } = this
    return (
      <div>
        {pathname==='/login'?
        <Login login={login} handleText={handleText}/>
        :
        <Signup signup={signup} handleText={handleText}/>
        }
      </div>
    )
  }
}

export default AuthPage