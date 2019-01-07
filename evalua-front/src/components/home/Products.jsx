import React from 'react'
import { Container, Card, Grid, Image } from 'semantic-ui-react'
import Menuuu from './Menu';

const products = [
    {
      header: 'Encuestas',
      description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
    },
    {
      header: 'Capacitación',
      description: 'Bring to the table win-win survival strategies to ensure proactive domination.',
    }
  ]
  
const ProductsItems = () => <Card.Group items={products} />

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
            <h3>
            Estos son los productos que ofrecemos para darle solución a la problemática que presente tu empresa.
            Tenemos más de 15 años apoyando a distintas empresas de distintos giros.
            </h3>
            <div>
                <ProductsItems />
            </div>
        </Container>
        <br />
        <Container>
            <h4>Estos son algunos de nuestros clientes.</h4>
            <div>
                <PartnersLogos />
            </div>
        </Container>
    </div>
)

export default Products