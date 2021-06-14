import axios from 'axios'
const apiUrl = `${process.env.REACT_APP_API_URL}/experiences`;

export default class ExperienceService{

   getbyenddate(resumeId){
    axios.get(`${apiUrl}/getbyenddate?resumeId=${resumeId}`);
   }
}