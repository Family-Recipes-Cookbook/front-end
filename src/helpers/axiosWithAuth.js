import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem("token")
    
    return axios.create({
        baseURL: 'https://tt18familyrecipe.herokuapp.com/api',
        headers: {
            Authorization: token 
        }
    })
}