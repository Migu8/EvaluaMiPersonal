import React from 'react'
import {Link} from 'react-router-dom'
import { List } from 'semantic-ui-react'

const SurveyList = ({_id, year}) => (
  <List divided relaxed>
    <List.Item>
      <List.Icon name='github' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header>{year}</List.Header>
        <List.Description><Link to={`/surveys/${_id}`}>See details</Link></List.Description>
      </List.Content>
    </List.Item>
  </List>
)

export default SurveyList
