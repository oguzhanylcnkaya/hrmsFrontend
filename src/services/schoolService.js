import axios from 'axios'
const apiUrl = `${process.env.REACT_APP_API_URL}/schools`;

export default class SchoolService{

    getByEndDate(resumeId){
        axios.get(`${apiUrl}/getbyenddate?resumeId=${resumeId}`);
    }
}