import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Form } from 'semantic-ui-react'

const Login = ({ login, handleText })=> {

    return(
        <div>
            <div>
                
            </div>
            <h1>Hola, aquí está el formulario del Login</h1>
            <br />
            <div>
                <Form method='POST' onSubmit={login}>
                    <Form.Field>
                        <input type="email" name='email' onChange={handleText} placeholder='example@mail.com' />
                    </Form.Field>
                    <Form.Field>
                        <input type="password" name='password' placeholder='password' onChange={handleText} />
                    </Form.Field>
                    <Button type='submit'>Login</Button>
                </Form>
            </div>
            <br />
            <Link to='/'>Home</Link>
        </div>
    )
    
}

export default Login   