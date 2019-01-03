import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import MenuEmployee from '../home/MenuEmployee';
import { Button } from 'semantic-ui-react'

class Home extends Component {

    state = {}


    render() {

    return(
        <div style={{
            textAlign:'center'
        }}>
            <MenuEmployee />
            <h1>Bienvenido a la Home Page</h1>
            {/* Aquí viene la información del usuario loggeado */}
            <Button secondary><Link to='/profile'>Ver perfil</Link></Button>
        </div>
        )
    }
}

export default Home