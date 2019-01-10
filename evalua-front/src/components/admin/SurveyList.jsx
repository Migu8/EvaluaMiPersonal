import React from 'react'
import {Link} from 'react-router-dom'
import { List } from 'semantic-ui-react'

const SurveyList = ({ year, evaluator, evaluated}) => (
  <div style={{
    textAlign:'center',
    fontSize:'2em'
}}>
    <List centered divided relaxed>
      <List.Item>
        {/* <List.Icon name='github' size='large' verticalAlign='middle' /> */}
        <List.Content>
          <List.Header>{year}</List.Header>
          <List.Header>{evaluator}-{evaluated}</List.Header>
          
          <List.Description><Link to='/answer'>Responder</Link></List.Description>
        </List.Content>
      </List.Item>
    </List>
  </div>

)

export default SurveyList
