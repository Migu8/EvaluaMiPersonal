import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import EmpTable from './EmpTable'
import MenuAdmin from '../home/MenuAdmin'
import { Table, Button } from 'semantic-ui-react'
//const host = 'https://damp-reaches-55933.herokuapp.com/emp'

class AllEmployees extends Component {

    constructor(){
        super()
        this.state = {employees: [], employeesStatic:[]}
    }

    getAllEmployees = () =>{
        axios.get(`http://localhost:3000/emp/employee`, {withCredentials:true})
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
        return employees.map((employee, index)=> 
        <EmpTable key={index} {...employee} />)
    }

    render(){
        const {drawEmployeeTable} = this
        return(
            <div style={{
                textAlign:'center'
            }}>
                <MenuAdmin />
                <br/>
                <h2 centered>A continuación se muestran los empleados y el su status de encuestas contestadas</h2>
                <br/>
                <div style={{
                    paddingLeft:'42%'
                }}>
                    <Table basic='very' celled collapsing centered>
                        <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Empleado</Table.HeaderCell>
                            <Table.HeaderCell>Encuestas contestadas</Table.HeaderCell>
                        </Table.Row>
                        </Table.Header>
                    </Table>
                    
                    {drawEmployeeTable()}
                </div>
                <br/>
                <Button size='huge'><Link to='/signup'>Agregar empleado</Link></Button>
            </div>
        )
    }
}

export default AllEmployees