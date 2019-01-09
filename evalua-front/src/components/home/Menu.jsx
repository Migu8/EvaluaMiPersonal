import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { Button, Menu, Segment} from 'semantic-ui-react'

class Menuuu extends Component {

    state = {}

    render(){

        return(
            <div>
                <Segment inverted>
                    <Menu size='large' inverted secondary>
                            <Menu.Item name='home'>
                                <Link to={'/'}>Inicio</Link>
                            </Menu.Item>
                            <Menu.Item name='products'>
                                <Link to={'/products'}>Productos</Link>
                            </Menu.Item>
                            <Menu.Item name='contact'>
                                <Link to={'/contact'}>Contacto</Link>
                            </Menu.Item>
                        <Menu.Menu position='right'>
                            <Menu.Item>
                                <Button><Link to={'/login'}>Inicia sesión</Link></Button>
                            </Menu.Item>
                        </Menu.Menu>
                    </Menu>
                </Segment>
            </div>
        )
    }
}

export default Menuuu