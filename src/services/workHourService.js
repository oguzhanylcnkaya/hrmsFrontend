import axios from 'axios';
const apiUrl = `${process.env.REACT_APP_API_URL}/workhours`;

export default class WorkHourService{

    getAll(){
        return axios.get(`${apiUrl}/getall`)
    }
}