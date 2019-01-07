import React, { Component } from 'react'
import axios from 'axios'
import MenuAdmin from '../home/MenuAdmin'
const host = 'http://localhost:3000/surv'

class Surveys extends Component {

    constructor(){
        super()
        this.state = {surveys: [], surveysStatic:[]}
    }

    allSurveys = () =>{
        axios.get(host + '/surveys', {withCredentials:true})
        .then(responseFromApi => {
            this.setState({
                surveys: responseFromApi.data,
                surveysStatic: responseFromApi.data
            })
        })
        .catch(e =>{
            console.log('Y mis encuestas, apá?', e)
        })
    }

    componentDidMount(){
        this.allSurveys()
    }

    render(){
        return(
            <div>
                <MenuAdmin />
                <h1>Aquí está la lista de las encuestas</h1>
                <div>
                    <h2>Aquí va la lista</h2>
                    
                </div>
            </div>
        )
    }
}

export default Surveys