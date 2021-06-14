import axios from 'axios'
const apiUrl = `${process.env.REACT_APP_API_URL}/photos`;

export default class PhotoService{

    getByJobSeekerId(jobSeekerId){
        axios.get(`${apiUrl}/getbyjobseeker?jobSeekerId=${jobSeekerId}`);
    }
}