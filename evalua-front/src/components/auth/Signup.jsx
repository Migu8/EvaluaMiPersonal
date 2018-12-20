import React, { Component } from 'react'
import AuthService from './AuthService'
import { Link } from 'react-router-dom'

class Signup extends Component{
    constructor(props){
        super(props)
        this.state = { name:'', email:'', password:''}
        this.service = new AuthService()
    }

    handleFormSubmit = (e) =>{
        e.preventDefault()
        const name = this.state.name
        const email = this.state.email
        const password = this.state.password

        this.service.signup(name, email, password)
        .then( response =>  {
            this.setState({
                name:'',
                email:'',
                password:''
            })
            this.props.getUser(response)
        })
        .catch( error=> console.log(error) )
    }

    handleChange = (e) =>{
        const {name, value} = e.target
        this.setState({[name]: value})
    }


    render(){
        return(
            <div>
                <h1>Hola, aquí está el formulario del Signup</h1>
                <br />
                <div>
                    <form onSubmit={this.handleFormSubmit}>
                        <input type="text" name='name' value={this.state.name} onChange={ e => this.handleChange(e)} placeholder='Juanito' />
                        <input type="email" name='email' value={this.state.email} onChange={ e => this.handleChange(e)} placeholder='example@mail.com' />
                        <input type="password" name='password' value={this.state.password} onChange={ e => this.handleChange(e)} placeholder='Introduce tu contraseña' />
                        <input type="submit" value='Signup' />
                    </form>
                </div>
                <h3>¿Ya tienes una cuenta?</h3>
                <Link to='/login'>Login</Link>
                <br />
                <Link to='/'>Home</Link>
            </div>
        )
    }
}

export default Signup