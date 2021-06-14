import axios from 'axios'
const apiUrl = `${process.env.REACT_APP_API_URL}/jobpositions`;

export default class jobpositionService{

    getAll(){
        axios.get(`${apiUrl}/getall`);
    }
}