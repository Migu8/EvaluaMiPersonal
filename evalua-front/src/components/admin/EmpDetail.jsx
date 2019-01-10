import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import MenuAdmin from '../home/MenuAdmin';
import { Image, Button } from 'semantic-ui-react'
//const host = 'https://damp-reaches-55933.herokuapp.com/emp'

class EmpDetail extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    componentDidMount(){
        this.getSingleEmployee()
        console.log('Wujuuuuu!')
    }

    getSingleEmployee = () =>{
        const { params } = this.props.match
        axios.get(`http://localhost:3000/emp/employee/${params.id}`, {withCredentials:true})
        .then(responseFromApi =>{
            const employees = responseFromApi.data
            console.log('Wuju 2222222')
            this.setState(employees)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    render(){

        return(
            <div>
                <MenuAdmin />
                <br/>
                <br/>
                <div style={{
                    textAlign:'center'
                }}>
                    <h1>Employee detail</h1>
                <Image  centered src={this.state.profilePic} alt='Fotuki del empleado' size='medium' />
                <h3>Área: {this.state.area}</h3>
                <h4>El empleado ha contestado tiene 2 encuestas pendientes</h4>
                <br/>
                <Button><Link to='/employees'>Regresar</Link></Button>
                </div>
                
            </div>
        )
    }
}

export default EmpDetail