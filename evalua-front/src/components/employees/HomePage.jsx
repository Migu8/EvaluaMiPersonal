import React, {Component} from 'react'
import MenuEmployee from '../home/MenuEmployee';

class Home extends Component {

    state = {
        user:{}
    }

    render() {

    return(
        <div>
            <MenuEmployee />
            <h1 style={{
            textAlign:'center',
            paddingTop:'12%'
        }}>
        Bienvenido a la Home Page</h1>
            {/* Aquí viene la información del usuario loggeado */}
        </div>
        )
    }
}

export default Home