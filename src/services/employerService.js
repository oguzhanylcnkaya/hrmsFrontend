import axios from 'axios'
const apiUrl = `${process.env.REACT_APP_API_URL}/employers`;

export default class EmployerService{

    add(companyName, website, phoneNumber){
        axios.post(`${apiUrl}/add`, {
            companyName,
            website,
            phoneNumber
        });
    }

    getAll(){
        return axios.get(`${apiUrl}/getall`);
    }

}