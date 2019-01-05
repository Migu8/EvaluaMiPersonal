import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'semantic-ui-react'

const optionsGender = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
]

const optionsArea = [
    { key: 'o', text: 'Operations', value: 'operations' },
    { key: 'm', text: 'Management', value: 'management' },
]

const AddEmployee = ({ addEmployee, handleText }) => {

        return(
            <div>
                <h2>Aquí va el formulario para ingresar nuevos empleados</h2>
                <Form method='POST' onSubmit={addEmployee}>
                    <input type="text" name='name' onChange={handleText} placeholder='Juanito' />
                    <input type="text" name='lastname' onChange={handleText} placeholder='Pérez' />
                    <input type="text" name='address' onChange={handleText} placeholder='Dirección' />
                    <input type="number" name='age' onChange={handleText} placeholder='35' />
                    <input type="number" name='telephone' onChange={handleText} placeholder='5512345678' />
                    <input type="text" name='gender' onChange={handleText} placeholder='Female' optionsGender={optionsGender} />
                    <input type="boolean" name='married' onChange={handleText} placeholder='true' />
                    <input type="email" name='email' onChange={handleText} placeholder='example@mail.com' />
                    <input type="text" name='profilePic' onChange={handleText} placeholder='url of the pic' />
                    <input type="text" name='area' onChange={handleText} placeholder='Management' optionsArea={optionsArea} />
                    <input type="password" name='password' onChange={handleText} placeholder='Introduce una contraseña' />
                    <input type="submit" value='Create' />
                </Form>
                <Button><Link>Ir al dashboard</Link></Button>
            </div>
        )
    
}

export default AddEmployee