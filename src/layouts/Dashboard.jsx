import React from 'react'
import { Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import AddJobAdvertisement from '../pages/AddJobAdvertisement'
import Advertisements from '../pages/Advertisements'
import Employers from '../pages/Employers'
import Home from '../pages/Home'
import JobSeekers from '../pages/JobSeekers'
import NotApprovedAdvertisementList from '../pages/NotApprovedAdvertisementList'

export default function Dashboard() {
    return (
        <div className="dashboard">
            <ToastContainer position="bottom-right" />
            <Route exact path="/" component={Home} />
            <Route path="/advertisements" component={Advertisements} />
            <Route path="/addAdvertisement" component={AddJobAdvertisement} />
            <Route path="/jobSeekers" component={JobSeekers} />
            <Route path="/employers" component={Employers} />
            <Route path="/notApprovedAdvertisement" component={NotApprovedAdvertisementList} />
        </div>
    )
}