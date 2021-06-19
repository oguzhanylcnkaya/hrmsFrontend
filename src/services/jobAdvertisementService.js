import axios from 'axios'
const apiUrl = `${process.env.REACT_APP_API_URL}jobadvertisements`;

export default class JobAdvertisementService {

    getAll() {
        return axios.get(`${apiUrl}/getall`);
    }

    getAllJobAdvertisementForDto() {
        return axios.get(`${apiUrl}/getAllJobAdvertisementForDto`);
    }

    getActiveJobAdvertisement() {
        return axios.get(`${apiUrl}/getActiveJobAdvertisement`);
    }

    getActiveJobAdvertisementByCreateDate() {
        return axios.get(`${apiUrl}/getActiveJobAdvertisementByCreateDate`);
    }

    getActiveJobAdvertisementByCreateDateDesc() {
        return axios.get(`${apiUrl}/getActiveJobAdvertisementByCreateDateDesc`);
    }

    getActiveJobAdvertisementByApplicationDeadline() {
        return axios.get(`${apiUrl}/getActiveJobAdvertisementByApplicationDeadline`);
    }

    getActiveJobAdvertisementByApplicationDeadlineDesc() {
        return axios.get(`${apiUrl}/getActiveJobAdvertisementByApplicationDeadlineDesc`);
    }

    getActiveJobAdvertisementByCompanyName(companyName) {
        return axios.get(`${apiUrl}/getActiveJobAdvertisementByCompanyName?companyName=${companyName}`);
    }

    add(jobadvertisement) {

        let postJobAdvertisement = {
            "active": jobadvertisement.active,
            "applicationDeadline": jobadvertisement.applicationDeadline,
            "city": {
                "id": jobadvertisement.cityId,
            },
            "createDate": jobadvertisement.applicationDeadline,
            "employer": {
                "id": jobadvertisement.employerId,
            },
            "jobDescription": jobadvertisement.jobDescription,
            "jobPosition": {
                "id": jobadvertisement.jobPositionId,
            },
            "maxSalaryScale": jobadvertisement.maxSalaryScale,
            "minSalaryScale": jobadvertisement.minSalaryScale,
            "openPositionQuantity": jobadvertisement.openPositionQuantity,
            "workHour": {
                "id": jobadvertisement.workHourId,
            },
            "workType": {
                "id": jobadvertisement.workTypeId,
            }
        }

        return axios.post(`${apiUrl}/add`, postJobAdvertisement);
    }
}

