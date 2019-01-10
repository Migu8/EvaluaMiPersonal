import React, { Component } from 'react'
import axios from 'axios'
import MenuEmployee from '../home/MenuEmployee'
import SurveyList from './SurveyList';
//const host = 'https://damp-reaches-55933.herokuapp.com/surv'
const host = 'http://localhost:3000/surv'

class Surveys extends Component {

    constructor(){
        super()
        this.state = {surveys: [], surveysStatic:[]}
    }

    allSurveys = () =>{
        axios.get(host + '/survey', {withCredentials:true})
        .then(responseFromApi => {
            console.log(responseFromApi)
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
            <div style={{
                textAlign:'center'
            }}>
                <MenuEmployee />
                <h1>Tus encuestas pendientes son las siguientes:</h1>
                <br/>
                <div>
                    {drawSurveyList()}
                </div>
            </div>
        )
    }
}

export default Surveys