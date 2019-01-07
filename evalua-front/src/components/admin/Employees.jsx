import React, { Component } from 'react'
import axios from 'axios'
import EmpTable from './EmpTable'
import MenuAdmin from '../home/MenuAdmin'
const host = 'http://localhost:3000/emp'

class AllEmployees extends Component {

    constructor(){
        super()
        this.state = {employees: [], employeesStatic:[]}
    }

    getAllEmployees = () =>{
        axios.get(host + '/employee', {withCredentials:true})
        .then(responseFromApi => {
            this.setState({
                employees: responseFromApi.data,
                employeesStatic: responseFromApi.data
            })
        })
        .catch(e =>{
            console.log('Los empleados no pueden jalarse de la BD', e)
        })
    }

    componentDidMount(){
        this.getAllEmployees()
    }

    drawEmployeeTable = () =>{
        const {employees} = this.state
        return employees.map((employees, index)=> 
        <EmpTable key={index} {...employees} />)
    }

    render(){
        const {drawEmployeeTable} = this
        return(
            <div>
                <MenuAdmin />
                <h1>Aquí está la lista de todos los empleados</h1>
                <div>
                    <h2>Aquí va la tabla</h2>
                    {drawEmployeeTable()}
                </div>
            </div>
        )
    }
}

export default AllEmployees