import React, {Component} from 'react'
import { Menu, Button } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class Profile extends Component{

    state={
        user:{}
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    componentWillMount(){
        const user = JSON.parse(localStorage.getItem('loggedUser'))
        if(!user) this.props.history.push('/login')
        else{
            this.setState({user})
        }
    }

    render(){

        const {user, activeItem} = this.state
        return (
            <div>
                <Menu size='large'>
                    <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Button><Link to={'/'}>Logout</Link></Button>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
                <h1>{user.name}, te quedan 'X' encuestas pendientes por responder</h1>
                <Button>Responder encuestas</Button>
                <h2>Tu rol en la empresa es: {user.role}</h2>

            </div>
        )
    }
}

export default Profile