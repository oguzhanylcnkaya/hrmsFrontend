import axios from 'axios'
const apiUrl = `${process.env.REACT_APP_API_URL}/jobseekers`;

export default class JobSeekerService{
    
    getAll(){
        return axios.get(`${apiUrl}/getall`);
    }

    getById(id){
        return axios.get(`${apiUrl}/getbyid?id=${id}`);
    }

}