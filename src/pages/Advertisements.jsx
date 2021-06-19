import React from 'react'
import bg1 from '../assets/images/page-title-1.jpg';
import JobAdvertisementsList from './JobAdvertisement/JobAdvertisementsList';

export default function Advertisements() {
    return (
        <div>

            <div className="page-top-area" style={{background : `url(${bg1})` }}>
            </div>

           
            <JobAdvertisementsList></JobAdvertisementsList>
                
            
        </div>
    )
}