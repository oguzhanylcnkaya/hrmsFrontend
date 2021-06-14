import axios from 'axios'
const apiUrl = `${process.env.REACT_APP_API_URL}/resumes`;

export default class ResumeService{

    createCv(jobSeekerId){
        axios.post(`${apiUrl}/createcv?jobSeekerId=${jobSeekerId}`);
    }

    getByResumeId(resumeId){
        axios.get(`${apiUrl}/getbyresumeid?resumeId=${resumeId}`);
    }

    getByJobSeekerId(jobSeekerId){
        axios.get(`${apiUrl}/getbyjobseeker?jobSeekerId=${jobSeekerId}`);
    }
}