import React, { Component } from 'react'
import axios from 'axios'
import MenuAdmin from '../home/MenuAdmin'
import SurveyList from './SurveyList';
const host = 'http://localhost:3000/surv'

class Surveys extends Component {

    constructor(){
        super()
        this.state = {surveys: [], surveysStatic:[]}
    }

    allSurveys = () =>{
        axios.get(host + '/survey', {withCredentials:true})
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

    drawSurveyList = () =>{
        const {surveys} = this.state
        return surveys.map((survey, index)=> 
        <SurveyList key={index} {...survey} />)
    }

    render(){
        const {drawSurveyList} = this
        return(
            <div>
                <MenuAdmin />
                <h1>Aquí está la lista de las encuestas</h1>
                <div>
                    <h2>Aquí va la lista</h2>
                    {drawSurveyList()}
                </div>
            </div>
        )
    }
}

export default Surveys