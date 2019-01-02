import React from 'react'
import { Link } from 'react-router-dom'

const Logout = () =>{
    return(
        <div>
            <h2>Saliste exitosamente de tu cuenta</h2>
            <br/>
            Si deseas ingresar nuevamente, da click <Link to='/'>aquí</Link>
        </div>
    )
}

export default Logout