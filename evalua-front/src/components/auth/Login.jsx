import React, { Component } from 'react'
import AuthService from './AuthService'
import { Link } from 'react-router-dom'

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {email:'', password:''}
        this.service = new AuthService()
    }

    handleForSubmit = (e) =>{
        e.preventDefault()
        const email = this.state.email
        const password = this.state.password
        this.service.login(email, password)
        .then(response =>{
            this.setState({email:'', password:''})
            this.props.getUser(response)
        })
        .catch(e => console.log(e))
    }

    handleChange = (e) =>{
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    render(){
        return(
            <div>
                <h1>Hola, aquí está el formulario del Login</h1>
                <br />
                <div>
                    <form onSubmit={this.handleForSubmit}>
                        <input type="email" name='email' placeholder='example@mail.com' value={this.state.email} onChange={e => this.handleChange} />
                        <input type="password" name='password' placeholder='Contraseña' value={this.state.password} onChange={e => this.handleChange} />
                        <input type="submit" value='Login' />
                    </form>
                </div>
                <h3>¿Aún no tienes cuenta? Créala ahora!</h3>
                <Link to='/signup'>Signup</Link>
                <br />
                <Link to='/'>Home</Link>
            </div>
        )
    }
}

export default Login