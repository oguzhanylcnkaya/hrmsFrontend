import axios from 'axios'
const apiUrl = `${process.env.REACT_APP_API_URL}/worktypes`;

export default class WorkTypeService{

    getAll(){
        return axios.get(`${apiUrl}/getall`);
    }

}