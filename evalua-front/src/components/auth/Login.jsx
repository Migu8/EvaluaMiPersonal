import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react'

const Login = ({ login, handleText })=> {

    return(
        <div>
            <div>
                
            </div>
            <h1 style={{
                textAlign:'center'
            }}>Bienvenido a Evalua mi personal</h1>
            <br />
            <div className='login-form'>
            <style>{`
            body > div,
            body > div > div,
            body > div > div > div.login-form {
                height: 100%;
            }
            `}</style>
            <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>
                <Image src='https://res.cloudinary.com/ironhackmigu8/image/upload/v1546404237/evalua-mi-personal/Captura.png' /> Log-in to your account
                </Header>
                <Form size='large' method='POST' onSubmit={login}>
                <Segment stacked>
                    <Form.Input 
                    type="email" 
                    name='email' 
                    onChange={handleText}
                    fluid 
                    icon='user' 
                    iconPosition='left' 
                    placeholder='E-mail address' />
                    <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Password'
                    type='password'
                    name='password' 
                    onChange={handleText}
                    />

                    <Button color='teal' fluid size='large' type='submit'>
                    Login
                    </Button>
                </Segment>
                </Form>
            </Grid.Column>
            </Grid>


            {/* <Form method='POST' onSubmit={login}>
                <Form.Field>
                    <input type="email" name='email' onChange={handleText} placeholder='example@mail.com' />
                </Form.Field>
                <Form.Field>
                    <input type="password" name='password' placeholder='password' onChange={handleText} />
                </Form.Field>
                <Button type='submit'>Login</Button>
            </Form> */}
            </div>
            <br />
            <Button><Link to='/'>Home</Link></Button>
        </div>
    )
    
}

export default Login   