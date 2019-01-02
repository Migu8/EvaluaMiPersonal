import axios from 'axios';
const host = 'http://localhost:3000/api'

//signup
export const signup = (user) => {
  return axios.post(host + '/signup', user, {})
    .then(r=>r.data)
    .catch(e=>e.response)
}

//login
export const login = (user) => {
  return axios.post(host + '/login', user, {withCredentials:true})
    .then(r=>r.data)
    .catch(e=>e.response)
}

//logout
export const logout = () =>{
  return axios.get (host + '/logout')
  .then (r => r.data)
  .catch (e => e.response)
}

//profile
export const getProfile = () => {
  return axios.get(host + '/profile',{withCredentials:true})
    .then(r=>r.data)
    .catch(e=>e.response)
}