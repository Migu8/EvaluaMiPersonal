import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import SurveysByEmployee from './SurveysByEmployee'
import MenuEmployee from '../home/MenuEmployee'
import { Button } from 'semantic-ui-react'
//const host = 'http://localhost:3000/emp'

class SurveysEmp extends Component {

    constructor(){
        super()
        this.state = {surveys: [], surveysStatic:[]}
    }

    getMySurveys = () =>{
        axios.get(`http://localhost:3000/surv/survey`, {withCredentials:true})
        .then(responseFromApi => {
            this.setState({
                surveys: responseFromApi.data,
                surveysStatic: responseFromApi.data
            })
        })
        .catch(e =>{
            console.log('No llegan las encuestas', e)
        })
    }

    componentDidMount(){
        this.getMySurveys()
    }

    drawSurveyList = () =>{
        const {surveys} = this.state
        return surveys.map((survey, index)=> 
        //Aquí viene la condición para que sólo dibuje en las que participa como evaluador
        <SurveysByEmployee key={index} {...survey} />)
    }

    render(){
        const {drawSurveyList} = this
        return(
            <div>
                <MenuEmployee />
                <h1>Aquí está la lista de las encuestas correspondientes al empleado</h1>
                <div>
                    {drawSurveyList()}
                </div>
                <br/>
                <Button size='huge'><Link to='/home'>Home</Link></Button>
            </div>
        )
    }
}

export default SurveysEmp