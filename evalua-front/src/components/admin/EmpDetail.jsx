import React, { Component } from 'react'
import axios from 'axios'
import MenuAdmin from '../home/MenuAdmin';

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
                <h1>Employee detail</h1>
                <img src={this.state.profilePic} alt='Fotuki del empleado' />
                <h3>Área: {this.state.area}</h3>
                <h4>El empleado ha contestado: X</h4>
            </div>
        )
    }
}

export default EmpDetail