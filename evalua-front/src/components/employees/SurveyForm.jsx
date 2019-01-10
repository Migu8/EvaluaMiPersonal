import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, Radio, TextArea, Container } from 'semantic-ui-react'
import MenuEmployee from '../home/MenuEmployee';

class SurveyEmpForm extends Component {
  state = {

  }

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <div>
        <MenuEmployee />
        <br/>
        <br/>
        <h2 style={{
          textAlign:'center'
        }}>Estás evaluando a: Darío Contreras</h2>
        <div style={{
          textAlign:'center'
        }}>
        <br/>
        <Container>
          <Form>
          <Form.Group inline>
            <label>¿Cómo calificas su desempeño?</label>
            <Form.Field
              control={Radio}
              label='Malo'
              value='1'
              checked={value === '1'}
              onChange={this.handleChange}
            />
            <Form.Field
              control={Radio}
              label='Regular'
              value='2'
              checked={value === '2'}
              onChange={this.handleChange}
            />
            <Form.Field
              control={Radio}
              label='Bueno'
              value='3'
              checked={value === '3'}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group inline>
            <label>¿Es bueno a la hora de trabajar en equipo?</label>
            <Form.Field
              control={Radio}
              label='Malo'
              value='1'
              checked={value === '4'}
              onChange={this.handleChange}
            />
            <Form.Field
              control={Radio}
              label='Regular'
              value='2'
              checked={value === '5'}
              onChange={this.handleChange}
            />
            <Form.Field
              control={Radio}
              label='Bueno'
              value='3'
              checked={value === '6'}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group inline>
            <label>¿Es respetuoso en su trato con los demás?</label>
            <Form.Field
              control={Radio}
              label='Malo'
              value='1'
              checked={value === '7'}
              onChange={this.handleChange}
            />
            <Form.Field
              control={Radio}
              label='Regular'
              value='2'
              checked={value === '8'}
              onChange={this.handleChange}
            />
            <Form.Field
              control={Radio}
              label='Bueno'
              value='3'
              checked={value === '9'}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group inline>
            <label>¿Busca innovar en procesos del día a día?</label>
            <Form.Field
              control={Radio}
              label='Malo'
              value='1'
              checked={value === '10'}
              onChange={this.handleChange}
            />
            <Form.Field
              control={Radio}
              label='Regular'
              value='2'
              checked={value === '11'}
              onChange={this.handleChange}
            />
            <Form.Field
              control={Radio}
              label='Bueno'
              value='3'
              checked={value === '12'}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group inline>
            <label>Dale una calificación general</label>
            <Form.Field
              control={Radio}
              label='Malo'
              value='1'
              checked={value === '13'}
              onChange={this.handleChange}
            />
            <Form.Field
              control={Radio}
              label='Regular'
              value='2'
              checked={value === '14'}
              onChange={this.handleChange}
            />
            <Form.Field
              control={Radio}
              label='Bueno'
              value='3'
              checked={value === '15'}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Field control={TextArea} label='Comentarios extra' placeholder='Algo bueno o malo de este compalero de trabajo que no fue abordado en las preguntas' />
          <Button><Link to='/profile'>Subir encuesta</Link></Button>
        </Form>
        </Container>
          
        </div>
        
      </div>

    )
  }
}

export default SurveyEmpForm