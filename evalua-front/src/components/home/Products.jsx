import React from 'react'
import { Container, Card, Grid, Image } from 'semantic-ui-react'
import Menuuu from './Menu';

const products = [
    {
      header: 'Encuestas',
      description: 'A través de ellas te obtendrás la información necesaria para hacer sentir a tus empleados lo más cómodos posible y por ende la productividad aumentará',
    },
    {
      header: 'Capacitación',
      description: 'Una vez ubicados los posibles problemas que enfrentan tus equipos o áreas, nosotros nos encargaremos de resolver esas diferencias entre tus empleados',
    }
  ]
  
const ProductsItems = () => <Card.Group centered items={products} />

const PartnersLogos = () => (
    <Grid verticalAlign='middle' columns={4} centered>
      <Grid.Row>
        <Grid.Column>
          <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/1200px-Coca-Cola_logo.svg.png' />
        </Grid.Column>
        <Grid.Column>
          <Image src='https://mazorcastudio.com/wp-content/uploads/2016/05/palacio-de-hierro-logo.png' />
          <br />
          <Image src='http://www.damsa.com.mx/club/listado/imagenes/cuponera/sport_world/logo.png' />
        </Grid.Column>
        <Grid.Column>
          <Image src='https://www.vectorlogo.es/wp-content/uploads/2015/02/logo-vector-iberdrola.jpg' />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )

const Products = () => (
    <div>
        <div>
            <Menuuu />
        </div>
        <br/>
        <Container>
            <h2 style={{
              padding:'5%',
              textAlign:'center'
            }}>
            Estos son los productos que ofrecemos desde hace más de 10 años:
            </h2>
            <div>
                <ProductsItems />
            </div>
        </Container>
        <br />
        <Container>
            <h2 style={{
              padding:'5%',
              textAlign:'center'
            }}>Estos son algunos de nuestros clientes:</h2>
            <div>
                <PartnersLogos />
            </div>
        </Container>
    </div>
)

export default Products