import {GET_SERVICES} from './actionTypes'
import axios from 'axios'


export const getService=()=>dispatch=>{
    axios.get("http://localhost:5000/services")
    .then(res=>dispatch({type:GET_SERVICES,payload:res.data}))
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
}

export const addService=(newService)=>dispatch=>{
    axios.post("http://localhost:5000/services/add",newService)
    .then(res=>dispatch(getService()))
    .then(res =>alert("service added"))
    .catch(err=>console.log(err))

}


export const removeService=(id)=>dispatch=>{
    axios.delete(`http://localhost:5000/services/${id}`)
    .then(res=>dispatch(getService()))
    .catch(err=>console.log(err))
}

export const putService=(id,updatedService)=>dispatch=>{
    axios.put(`http://localhost:5000/services/${id}`,updatedService)
    .then(res=>dispatch(getService()))
    .catch(err=>console.log(err))
}