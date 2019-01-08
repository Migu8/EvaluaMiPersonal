import React from 'react'
import {Link} from 'react-router-dom'
import { List } from 'semantic-ui-react'

const SurveysByEmployee = ({_id, year, evaluator, evaluated}) => (
  <List divided relaxed>
    <List.Item>
      {/* <List.Icon name='github' size='large' verticalAlign='middle' /> */}
      <List.Content>
        <List.Header>{year}</List.Header>
        <List.Header>{evaluator}-{evaluated}</List.Header>
        <List.Description><Link to={`/surveys/${_id}`}>Responder</Link></List.Description>
      </List.Content>
    </List.Item>
  </List>
)

export default SurveysByEmployee
