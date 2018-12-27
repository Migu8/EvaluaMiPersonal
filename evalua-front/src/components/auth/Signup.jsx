import React from 'react'
import { Link } from 'react-router-dom'

const Signup = ({ signup, handleText }) => {

    return(
        <div>
            <h1>Hola, aquí está el formulario del Signup</h1>
            <br />
            <div>
                <form method='POST' onSubmit={signup}>
                    <input type="text" name='name' onChange={handleText} placeholder='Juanito' />
                    <input type="email" name='email' onChange={handleText} placeholder='example@mail.com' />
                    <input type="password" name='password' onChange={handleText} placeholder='Introduce tu contraseña' />
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

export default Signup