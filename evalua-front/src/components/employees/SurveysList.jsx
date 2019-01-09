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
        this.state = {surveys: [], surveysStatic:[], user:{}}
    }

    getMySurveys = () =>{
        console.log(this.state.user)
        axios.get(`http://localhost:3000/surv/survey`, {withCredentials:true})
        .then(responseFromApi => {
            console.log(responseFromApi)
            this.setState({
                surveys: responseFromApi.data,
                surveysStatic: responseFromApi.data
            })
        })
        .catch(e =>{
            console.log('No llegan las encuestas', e)
        })
    }

    onSetResult = (result, key) => {
        localStorage.setItem(key, JSON.stringify(result));
        this.setState({ user: result });
      }

    
    componentWillMount(){
        this.onSetResult()
        this.getMySurveys()
    }

    drawSurveyList = () =>{

        const {surveys, user} = this.state
        console.log(surveys)
        console.log(user)
        //Aquí viene la condición para que sólo dibuje en las que participa como evaluador
        return surveys.map((survey, index)=> 
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