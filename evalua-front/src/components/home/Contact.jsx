import React from 'react'
import { Form, Input, TextArea, Button, Container } from 'semantic-ui-react'
import Menuuu from './Menu';

const ContactUs = () => (
    <div>
      <div>
        <Menuuu />
      </div>
      <br/>
      <Container>
        <h3>En Evalua mi personal, los problemas de tu empresa son nuestros problemas.
        Déjanos en el formulario de abajo la problemática que vive tu empresa y 
        nosotros nos encargaremos de plantearte una solución.</h3>
        
      </Container>
      <br />
      <Container>
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
            type='submit'
            control={Button}
            content='Confirm'
          />
        </Form>
        </Container>
    </div>
  
)

export default ContactUs