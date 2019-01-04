import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import MenuAdmin from '../home/MenuAdmin';

class Dashboard extends Component {

    state = {
        user:{}
    }

    componentWillMount(){
        const user = JSON.parse(localStorage.getItem('loggedUser'))
        if(!user) this.props.history.push('/login')
        else{
            this.setState({user})
        }
    }


    render(){
        const {user} = this.state
        return(
            
            <div>
                <MenuAdmin />
                <div style={{
                    textAlign:'center'
                }}>
                    <br/>
                    <h1>Bienvenido, {user.name}, tu rol es {user.role}</h1>
                    <br />
                    <h2>Selecciones abajo la opción que desea consultar</h2>
                    <div>
                        <Button><Link to='/employees'>Ver empleados</Link></Button>
                        <Button>Ver encuestas</Button>
                    </div>
                    <br />
                </div>
            </div>
        )
    }
}

export default Dashboard