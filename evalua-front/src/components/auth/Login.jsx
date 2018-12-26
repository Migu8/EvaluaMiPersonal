import React from 'react'
import { Link } from 'react-router-dom'

const Login = ({ login, handleText })=> {
    
    // constructor(props){
    //     super(props);
    //     this.state = {email: '', password: ''};
    //     this.service = new AuthService();
    // }

    // handleFormSubmit = (event) => {
    //     event.preventDefault();
    //     const email = this.state.email
    //     const password = this.state.password;

    //     this.service.login(password, email)
    //     .then( response => {
    //         this.setState({password: "", email: "" });
    //         this.props.getUser(response)
    //     })
    //     .catch( error => console.log(error) )
    // }

    // handleChange = (e) =>{
    //     const {name, value} = e.target
    //     this.setState({[name]: value})
    // }

        return(
            <div>
                <h1>Hola, aquí está el formulario del Login</h1>
                <br />
                <div>
                    <form method='POST' onSubmit={login}>
                        <input type="email" name='email' onChange={handleText} placeholder='example@mail.com' />
                        <input type="password" name='password' placeholder='Contraseña' onChange={handleText} />
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

export default Login