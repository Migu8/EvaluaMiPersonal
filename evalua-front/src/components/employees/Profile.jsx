import React, {Component} from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import MenuEmployee from '../home/MenuEmployee';

class Profile extends Component{

    state={
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
        return (
            <div style={{
                textAlign:'center'
            }}>
                <MenuEmployee />
                <h1>{user.name}, te quedan 'X' encuestas pendientes por responder</h1>
                <Button>Responder encuestas</Button>
                <h2>Tu rol en la empresa es: {user.role}</h2>
                <div>
                <Card style={{
                    
                }}>
                    <Image src={user.profilePic} />
                    <Card.Content>
                        <Card.Header>{user.name}</Card.Header>
                        <Card.Meta>
                        <span className='date'>{user.age} años</span>
                        </Card.Meta>
                        <Card.Description>{user.area}</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        {/* <a>
                        <Icon name='user' />
                        Encuestas contestadas: 
                        </a> */}
                    </Card.Content>
                </Card>
                </div>
            </div>
        )
    }
}

export default Profile