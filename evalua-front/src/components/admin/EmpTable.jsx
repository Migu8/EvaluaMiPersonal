import React from 'react'
import {Link} from 'react-router-dom'
import { Header, Image, Table } from 'semantic-ui-react'

const EmpTable = ({_id, name, image, area}) => (
  <Table basic='very' celled collapsing>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Empleado</Table.HeaderCell>
        <Table.HeaderCell>Encuestas contestadas</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Image src={image} rounded size='mini' />
            <Header.Content>
                <Link to={`/employees/${_id}`}>
                {name}
                </Link>
              <Header.Subheader>{area}</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>22</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)

export default EmpTable