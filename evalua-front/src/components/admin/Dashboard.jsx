import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Dashboard extends Component {
    render(){
        return(
            <div style={{
                textAlign:'center',
                color:'green'
            }}>
                <h1>Aquí estará la info del administrador</h1>
                <br />
                <h2>El listado de empleados y encuestas</h2>
                <br />
                <Link to='/'>Home</Link>
            </div>
        )
    }
}

export default Dashboard