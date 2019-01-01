import axios from 'axios'
const host = 'http://localhost:3000/something'

//list
export const getEmpData = (id) => {
    return axios.get(host + '/employee' + id)
    .then(res=>{
        return res.data
    })
    .catch(e=>e)
}

//add
export const addEmployee = () =>{
    return axios.post(host + '/new')
    .then(res =>{
        return res.data
    })
    .catch(e=> console.log(e))
}

//delete
