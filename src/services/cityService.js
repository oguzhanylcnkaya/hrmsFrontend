import axios from 'axios'
const apiUrl = `${process.env.REACT_APP_API_URL}/cities`;

export default class CityService{

    getAll(){
        return axios.get(`${apiUrl}/getall`);
    }
}