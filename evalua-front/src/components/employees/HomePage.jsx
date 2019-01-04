import React, {Component} from 'react'
import MenuEmployee from '../home/MenuEmployee';

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
        </div>
        )
    }
}

export default Home