import React, {Component} from 'react'
import Employees from './Employees'
import { addEmployee } from '../services/EmpService'

class AdminPageEmp extends Component{

    state={
        user:{}
    }

    addEmployee = e =>{
        e.preventDefault()
        const {user} = this.state
        console.log(user)
        addEmployee(user)
        .then(r=>{
            console.log(r)
            this.props.history.push('/employees')
            alert('Employee created correctly')
        })
        .catch(e=>{
            alert('Something went wrong, employee did not create correctly')
            console.log(e)
        })
    }

    handleText = e =>{
        const {user} = this.state
        const field = e.target.name
        const value = e.target.value
        user[field] = value
        this.setState({user})
    }

    render(){
        const {addEmployee, handleText} = this
        return(
            <div>
                <Employees addEmployee={addEmployee} handleText={handleText} />
            </div>
        )
    }
    
}

export default AdminPageEmp