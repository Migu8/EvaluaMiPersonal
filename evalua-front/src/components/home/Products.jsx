import React from 'react'
import { Container, Card } from 'semantic-ui-react'
import Menuuu from './Menu';

const items = [
    {
      header: 'Project Report - April',
      description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
      meta: 'ROI: 30%',
    },
    {
      header: 'Project Report - May',
      description: 'Bring to the table win-win survival strategies to ensure proactive domination.',
      meta: 'ROI: 34%',
    },
    {
      header: 'Project Report - June',
      description:
        'Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.',
      meta: 'ROI: 27%',
    },
  ]
  
const Partners = () => <Card.Group items={items} />

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
        </Container>
        <br />
        <Container>
            <h4>Estos son algunos de nuestros clientes.</h4>
            <div>
                <Partners />
            </div>
        </Container>
    </div>
)

export default Products