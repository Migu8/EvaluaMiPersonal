import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { Menu, Button } from 'semantic-ui-react'

class Home extends Component {

    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
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
            <h1>Bienvenido a la Home Page</h1>
            {/* Aquí viene la información del usuario loggeado */}
            <Link to='/profile'>Ver perfil</Link>
        </div>
        )
    }
}

export default Home