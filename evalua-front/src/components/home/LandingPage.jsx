import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, 
    Container,
    Grid,
    Header,
    Icon,
    Image,
    Menu,
    Segment, 
    List
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
    <div>
      <Segment style={{ padding: '8em 0em' }} vertical>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as='h3' style={{ fontSize: '2em' }}>
                ¿Qué hacemos?
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                Nuestra app le permitirá a tu organización medir el grado de 
                satisfacción de tus empleados en su entorno, arrojando así datos
                que te encaminarán hacia mejores decisiones que aumenten su 
                productividad.
              </p>
              <br />
              <Header as='h3' style={{ fontSize: '2em' }}>
                ¿Cómo lo hacemos?
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                Pequeñas encuestas anuales o semestrales te mostrarán datos duros
                para poder mejorar en tus áreas de oportunidad.
              </p>
            </Grid.Column>
            <Grid.Column floated='right' width={7}>
              <Image bordered rounded size='large' src='https://images.pexels.com/photos/943630/pexels-photo-943630.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign='center'>
              <Button size='huge'><Link to={'/contact'}>Contáctanos</Link></Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "Testimonio 1"
            </Header>
            <p style={{ fontSize: '1.33em' }}>Testimonio 1</p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "Testimonio 2"
            </Header>
            <p style={{ fontSize: '1.33em' }}>Testimonio 2</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Acerca de nosotros' />
              <List link inverted>
                <List.Item as='a'>Nuestros valores</List.Item>
                <List.Item as='a'>Nuestro personal</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Servicios' />
              <List link inverted>
                <List.Item as='a'>Encuestas</List.Item>
                <List.Item as='a'>Evaluación del desempeño</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>
                Algo debe ir aquí
              </Header>
              <p>
                Aún no sé qué
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
    </div>
)

class LandingPage extends Component {

    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
    const { activeItem } = this.state
    //const { children } = this.props

        return(
            <div>
                <Menu size='large'>
                    <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Button><Link to={'/login'}>Login</Link></Button>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
                <div style={{
                    textAlign:'center'
                }}>
                    <h1>Evalua mi personal app</h1>
                    <br />
                    <div>
                    </div>
                    <HomeHeading />
                    <HomepageLayout />
                </div>
            </div>
        )
    }
}

export default LandingPage