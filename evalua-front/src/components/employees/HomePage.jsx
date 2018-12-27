import React from 'react'
import { Link } from 'react-router-dom'

const Home = () =>{
    return(
        <div>
            <h1>Bienvenido a la Home Page</h1>
            <Link to='/profile'>Ver perfil</Link>
        </div>

    )
}

export default Home