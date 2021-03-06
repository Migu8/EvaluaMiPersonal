import React, { Component } from 'react'
import { 
    Container,
    Grid,
    Header,
    Image,
    Segment, 
    List
} from 'semantic-ui-react'
import Menuuu from './Menu';

const HomepageLayout = () => (
    <div>
      <Segment style={{ padding: '4em 0em' }} vertical>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as='h3' style={{ fontSize: '2em' }}>
                ¿Qué hacemos?
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                Reducimos la rotación de tu personal hasta en un 80%.
              </p>
              <br />
              <Header as='h3' style={{ fontSize: '2em' }}>
                ¿Cómo lo hacemos?
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                Pequeñas encuestas anuales o semestrales te mostrarán datos duros
                para poder retener talento joven.
              </p>
            </Grid.Column>
            <Grid.Column floated='right' width={7}>
              <Image bordered rounded size='large' src='https://images.pexels.com/photos/943630/pexels-photo-943630.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <h2>Nuestros clientes nos recomiendan</h2>
      <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Image size='medium' circular centered src="https://images.pexels.com/photos/1138903/pexels-photo-1138903.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="gerente"/>
            <Header as='h3' style={{ fontSize: '1.5em' }}>
              Cristian Torres
            </Header>
            <h4>Jefe de RH, Cuarta Mano MX</h4>
            <p style={{ 
              fontSize: '1em',
              paddingLeft:'10%',
              paddingRight:'10%' }}>Evaluapp nos permitió acercarnos más a 
            nuestros empleados más jóvenes y hacerlos sentir más cómodos y por ende más productivos y 
            comprometidos con la empresa</p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
          <Image size='medium' circular centered src="https://images.pexels.com/photos/325924/pexels-photo-325924.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="gerente"/>
          
            <Header as='h3' style={{ fontSize: '1.5em' }}>
              Laura Cárdenas
            </Header>
            <h4>Directora de RH, Mercado Negro MX</h4>
            <p style={{ fontSize: '1em',
              paddingLeft:'10%',
              paddingRight:'10%' }}>Desde hace 4 años que integramos las evaluaciones
            semestrales de Evaluapp la rotación de nuestro personal disminuyó en un 45%</p>
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
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Productos' />
              <List link inverted>
                <List.Item as='a'>Encuestas de evaluación</List.Item>
                <List.Item as='a'>Capacitación de personal</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              {/* <Header as='h4' inverted>
                Algo debe ir aquí
              </Header> */}
              <Header inverted as='h4' content='' />
              <br/>
              <List link inverted>
                <List.Item as='a'>Aviso de privacidad</List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
    </div>
)

class LandingPage extends Component {

    state = {}

    render() {

        return(
            <div>
              <Menuuu />
                <div style={{
                    textAlign:'center'
                }}>
                <br/>
                    <h1 style={{ fontSize: '3.5em' }}>Evaluapp</h1>
                    <HomepageLayout />
                </div>
            </div>
        )
    }
}

export default LandingPage