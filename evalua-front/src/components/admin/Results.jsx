import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { Button, Image } from 'semantic-ui-react'
import MenuAdmin from '../home/MenuAdmin';

class Results extends Component {

    render() {

    return(
        <div style={{
            textAlign:'center'
        }}>
            <MenuAdmin />
            <h1 style={{
            textAlign:'center',
            paddingTop:'3%'
        }}>
        Los resultados de la encuesta 2019 son los siguientes:</h1>
        <br/>
            <div>
                <Image src='https://res.cloudinary.com/ironhackmigu8/image/upload/v1547093485/evalua-mi-personal/graph.png' alt='Results' size='big' centered />
            </div>
        <br/>
        <Button><Link to='/dashboard'>Regresar</Link></Button>
        </div>
        )
    }
}

export default Results