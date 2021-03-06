import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { Button, Menu, Segment} from 'semantic-ui-react'

class MenuEmployee extends Component {

    state = {}

    render(){

        return(
            <div>
                <Segment inverted>
                    <Menu size='large' inverted secondary>
                            <Menu.Item name='profile'>
                                <Link to={'/profile'}>Perfil</Link>
                            </Menu.Item>
                            <Menu.Item name='survey'>
                                <Link to={'/survey'}>Encuestas</Link>
                            </Menu.Item>
                        <Menu.Menu position='right'>
                            <Menu.Item disabled>
                                <Button><Link to={'/logout'}>Salir</Link></Button>
                            </Menu.Item>
                        </Menu.Menu>
                    </Menu>
                </Segment>
            </div>
        )
    }
}

export default MenuEmployee