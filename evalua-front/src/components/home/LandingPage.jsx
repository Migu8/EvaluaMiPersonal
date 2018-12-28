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
        <br/>
        <Button primary size='huge'>
            Get Started
            <Icon name='right arrow' />
        </Button>
    </Container>
)

const HomepageLayout = () => (
      <Segment style={{ padding: '8em 0em' }} vertical>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as='h3' style={{ fontSize: '2em' }}>
                ¿Qué hacemos?
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                Nuestra app le permitirá a tu organización medir el grado de 
                comodidad de tus empleados y por ende qué tan productivos son
              </p>
              <Header as='h3' style={{ fontSize: '2em' }}>
                ¿Cómo lo hacemos?
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                Pequeñas encuestas anuales o semestrales te mostrarán datos duros
                para poder mejorar o en tus áreas de oportunidad
              </p>
            </Grid.Column>
            <Grid.Column floated='right' width={6}>
              <Image bordered rounded size='large' src='https://images.pexels.com/photos/943630/pexels-photo-943630.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign='center'>
              <Button size='huge'>Check Them Out</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
)

class LandingPage extends Component {

    state={}

    render(){

        const { children } = this.props

        return(
            <div style={{
                textAlign:'center'
            }}>
                <h1>Evalua mi personal app</h1>
                <br />
                <div>
                <Button><Link to={'/login'}>Login</Link></Button>
                </div>
                <HomeHeading />
                <HomepageLayout />
            </div>
        )
    }
}

export default LandingPage