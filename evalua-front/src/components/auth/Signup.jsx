import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Input, Select } from 'semantic-ui-react'
import MenuAdmin from '../home/Menu'

const optionsGender = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
]

const married = [
    { key: 'y', text: 'Yes', value: 'Yes' },
    { key: 'n', text: 'No', value: 'No' },
]

const optionsArea = [
    { key: 'o', text: 'Operations', value: 'Operations' },
    { key: 'm', text: 'Management', value: 'Management' },
]

const Signup = ({ signup, handleText }) => {

    return(
        <div>
            <MenuAdmin />
            <div style={{
            paddingTop:'5%',
            paddingLeft:'10%'
        }}>
            <h2>Agrega un nuevo empleado</h2>
                <Form method='POST' onSubmit={signup}>
                <Form.Group>
                    <Form.Field control={Input} type="text" label='Nombre' name='name' onChange={handleText} placeholder='Juanito' />
                    <Form.Field control={Input} type="text" label='Apellido' name='lastName' onChange={handleText} placeholder='Pérez' />
                </Form.Group>
                <Form.Group>
                    <Form.Field control={Input} type="text" label='Dirección completa' name='address' onChange={handleText} placeholder='Dirección' />
                </Form.Group>
                <Form.Group>
                    <Form.Field control={Input} type="number" label='Edad' name='age' onChange={handleText} placeholder='35' />
                    <Form.Field control={Input} type="number" label='Teléfono' name='telephone' onChange={handleText} placeholder='5512345678' />
                    <Form.Field control={Select} type="text" label='Género' name='gender' options={optionsGender} onChange={handleText} placeholder='Female' />
                </Form.Group>
                <Form.Group>
                    <Form.Field control={Select} type="text" label='Estado civil' name='married' options={married} onChange={handleText} placeholder='true' />
                    <Form.Field control={Input} type="email" label='Email' name='email' onChange={handleText} placeholder='example@mail.com' />
                </Form.Group>
                <Form.Group>
                    <Form.Field control={Input} type="file" label='Foto' name='profilePic' onChange={handleText} placeholder='url of the pic' />
                    <Form.Field control={Select} type="text" label='Área' name='area' options={optionsArea} onChange={handleText} placeholder='Management' />
                    <Form.Field control={Input} type="password" label='Contraseña' name='password' onChange={handleText} placeholder='Introduce una contraseña' />
                </Form.Group>
                <Form.Group>
                    <Form.Field control={Button} type="submit" value='Create' />
                </Form.Group>
            </Form>
            <Button><Link to='/dashboard'>Ir al dashboard</Link></Button>
            </div>
            
        </div>
    )
    
}

export default Signup