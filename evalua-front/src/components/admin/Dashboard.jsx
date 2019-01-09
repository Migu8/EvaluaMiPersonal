import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Image } from 'semantic-ui-react'
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
                    <br/>
                    <h1>Bienvenido, {user.name}, tu rol es {user.role}</h1>
                    <Image src={user.profilePic} centered size='medium' />
                    <br />
                    <h2>Selecciones abajo la opción que desea consultar</h2>
                    <div>
                        <span>
                            <Button><Link to='/employees'>Empleados</Link></Button>
                            <h3>---</h3>
                            <Button><Link to='/survey'>Encuestas</Link></Button>
                        </span>

                    </div>
                    <br />
                </div>
            </div>
        )
    }
}

export default Dashboard