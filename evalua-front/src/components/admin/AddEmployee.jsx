import React, {Component} from 'react'
import { addEmployee } from '../services/EmpService'

class AddEmployee extends Component {
    state={
        employee:{}
    }

    addEmployee = e =>{
        e.preventDefault()
        const {employee} = this.state
        console.log(employee)
    }
}