import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Input, TextArea, Button } from 'semantic-ui-react'

const ContactUs = () => (
    <div>
        <Form>
    <Form.Group widths='equal'>
      <Form.Field
        id='form-input-control-first-name'
        control={Input}
        label='Nombre completo'
        placeholder='Nombre completo'
      />
      <Form.Field
        id='form-input-control-last-name'
        control={Input}
        label='Email'
        placeholder='Email'
      />
      <Form.Field
        id='form-input-control-company'
        control={Input}
        label='Company'
        placeholder='Company'
      />
    </Form.Group>
    <Form.Field
      id='form-textarea-control-opinion'
      control={TextArea}
      label='Problemática'
      placeholder='Cuéntenos un poco acerca del problema que presenta su compañía'
    />
    <Form.Field
      id='form-button-control-public'
      control={Button}
      content='Confirm'
    />
  </Form>

    <br />
    <Button><Link to='/'>Home</Link></Button>
    </div>
  
)

export default ContactUs