//NO SIRVE

import axios from 'axios'
const host = 'http://localhost:3000/emp'

//list
export const getEmpData = () => {
    return axios.get(host + '/employee')
    .then(res=>{
        return res.data
    })
    .catch(e=>e)
}

//detail
// export const getEmpData = (id) => {
//     return axios.get(host + '/employee/' + id)
//     .then(res=>{
//         return res.data
//     })
//     .catch(e=>e)
// }

//add
export const addEmployee = (user) =>{
    return axios.put(host + '/new')
    .then(res =>{
        return res.data
    })
    .catch(e=> console.log(e))
}

//delete
