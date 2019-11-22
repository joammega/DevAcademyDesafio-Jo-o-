import axios from 'axios'
import authService from './authService'
const URL = 'https://removido.execute-api.us-east-1.amazonaws.com/v1'
const token = authService.getAuthenticationToken()
const getAll = () => {
    

    return axios.get(`${URL}/products`,{
        headers: { Authorization: token }
    })
}
const getId = (id) => {
    

    return axios.get(`${URL}/products/${id}`,{
        headers: { Authorization: token }
    })
}
const save = (product) => {
    

    return axios.post(`${URL}/products`, product, {
        headers: { Authorization: token }
    })
}
export default {
    getAll,
    save,
    getId
}