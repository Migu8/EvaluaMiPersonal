import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Button } from 'semantic-ui-react'

class Dashboard extends Component {

    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render(){
        const { activeItem } = this.state
        return(
            <div>
                <Menu size='large'>
                    <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Button><Link to={'/'}>Logout</Link></Button>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
                <div style={{
                    textAlign:'center',
                    color:'green'
                }}>
                    <h1>Aquí estará la info del administrador</h1>
                    <br />
                    <h2>El listado de empleados y encuestas</h2>
                    <div>
                        <Button>Empleados</Button>
                        <Button>Encuestas</Button>
                    </div>
                    <br />
                </div>
            </div>
        )
    }
}

export default Dashboard