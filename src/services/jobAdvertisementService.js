import axios from 'axios'
const apiUrl = `${process.env.REACT_APP_API_URL}/jobadvertisements`;

export default class JobAdvertisementService{

    getAll(){
        return axios.get(`${apiUrl}/getall`);
    }

    getAllJobAdvertisementForDto(){
        return axios.get(`${apiUrl}/getAllJobAdvertisementForDto`);
    }

    getActiveJobAdvertisement(){
        return axios.get(`${apiUrl}/getActiveJobAdvertisement`);
    }

    getActiveJobAdvertisementByCreateDate(){
        return axios.get(`${apiUrl}/getActiveJobAdvertisementByCreateDate`);
    }

    getActiveJobAdvertisementByCreateDateDesc(){
        return axios.get(`${apiUrl}/getActiveJobAdvertisementByCreateDateDesc`);
    }

    getActiveJobAdvertisementByApplicationDeadline(){
        return axios.get(`${apiUrl}/getActiveJobAdvertisementByApplicationDeadline`);
    }

    getActiveJobAdvertisementByApplicationDeadlineDesc(){
        return axios.get(`${apiUrl}/getActiveJobAdvertisementByApplicationDeadlineDesc`);
    }

    getActiveJobAdvertisementByCompanyName(companyName){
        return axios.get(`${apiUrl}/getActiveJobAdvertisementByCompanyName?companyName=${companyName}`);
    }
}