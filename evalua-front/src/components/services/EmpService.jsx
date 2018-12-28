import axios from 'axios'

const host = 'http://localhost:3000/something'

export const getEmpData = (id) => {
    return axios.get(url + 'employee/' + id)
    .then(res=>{
        return res.data
    })
    .catch(e=>e)
}