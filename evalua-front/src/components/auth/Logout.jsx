import React from 'react'
import { Link } from 'react-router-dom'

const Logout = () =>{
    return(
        <div style={{
            textAlign:'center',
            paddingTop:'30%'
        }}>
            <h1>Saliste exitosamente de tu cuenta</h1>
            <br/>
            <h2>Si deseas ingresar nuevamente, da click <Link to='/'>aquí</Link></h2>
            
        </div>
    )
}

export default Logout