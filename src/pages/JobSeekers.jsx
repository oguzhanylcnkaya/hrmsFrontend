import React from 'react'
import { Container } from 'react-bootstrap';
import bg1 from '../assets/images/page-title-1.jpg';
import JobSeekerList from './JobSeeker/JobSeekerList';

export default function JobSeekers() {
    return (
        <div>
            <div className="page-top-area" style={{background : `url(${bg1})` }}>
            </div>

            <Container className="my-5">
                <div className="row">
                    <JobSeekerList></JobSeekerList>
                </div>
            </Container>
        </div>
    )
}
