import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, 
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Responsive,
    Segment,
    Sidebar,
    Visibility, 
} from 'semantic-ui-react'

const HomeHeading = () =>(
    <Container text>
        <Header
            as='h1'
            content='Hola'
        />
        <Header
            as='h2'
            content='Nepe'
        />
        <Button primary size='huge'>
            Get Started
            <Icon name='right arrow' />
        </Button>
    </Container>
)

class LandingPage extends Component {

    state={}

    render(){
        return(
            <div style={{
                textAlign:'center'
            }}>
                <h1>Bien-venidos</h1>
                <br />
                <div>
                <Button primary><Link to={'/login'}>Login</Link></Button>
                </div>
                <HomeHeading />

            </div>
        )
    }
}

export default LandingPage