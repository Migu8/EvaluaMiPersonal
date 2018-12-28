import React from 'react'
import { Link } from 'react-router-dom'

const Login = ({ login, handleText })=> {

    return(
        <div>
            <h1>Hola, aquí está el formulario del Login</h1>
            <br />
            <div>
                <form method='POST' onSubmit={login}>
                    <input type="email" name='email' onChange={handleText} placeholder='example@mail.com' />
                    <input type="password" name='password' placeholder='password' onChange={handleText} />
                    <input type="submit" value='Login' />
                </form>
            </div>
            <h3>¿Aún no tienes cuenta? Créala <Link to='/signup'>aquí</Link></h3>
            <br />
            <Link to='/'>Home</Link>
        </div>
    )
    
}

export default Login   