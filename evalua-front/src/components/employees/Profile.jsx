import React, {Component} from 'react'
import { Button, Card, Icon, Image } from 'semantic-ui-react'
import MenuEmployee from '../home/MenuEmployee';

const EmployeeCard = () => (
    <Card>
      <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
      <Card.Content>
        <Card.Header>Matthew</Card.Header>
        <Card.Meta>
          <span className='date'>Joined in 2015</span>
        </Card.Meta>
        <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
          22 Friends
        </a>
      </Card.Content>
    </Card>
  )

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

        const {user} = this.state
        return (
            <div>
                <MenuEmployee />
                <h1>{user.name}, te quedan 'X' encuestas pendientes por responder</h1>
                <Button>Responder encuestas</Button>
                <h2>Tu rol en la empresa es: {user.role}</h2>
                <div>
                    <EmployeeCard />
                </div>
            </div>
        )
    }
}

export default Profile