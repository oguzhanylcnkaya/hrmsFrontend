import axios from 'axios'
const apiUrl = `${process.env.REACT_APP_API_URL}/coverletters`;

export default class CoverLetterService{
    
    addCoverLetter(resumeId, coverLetter){
        axios.post(`${apiUrl}/addCoverLetter?resumeId=${resumeId}`, coverLetter);
    }
}