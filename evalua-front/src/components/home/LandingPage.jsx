import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class LandingPage extends Component {
    render(){
        return(
            <div style={{
                textAlign:'center',
                color:'red'
            }}>
                <h1>Bien-venidos</h1>
                <br />
                <Link to={'/signup'}>Signup</Link>
                <br />
                <br />
                <Link to={'/login'}>Login</Link>
            </div>
        )
    }
}

export default LandingPage