import React from 'react'
import { Container } from 'react-bootstrap';
import bg1 from '../assets/images/page-title-1.jpg';
import EmployersList from './Employer/EmployersList';

export default function Employers() {
    return (
        <div>
            <div className="page-top-area" style={{background : `url(${bg1})` }}>
            </div>

            <Container className="my-5">
                <div className="row">
                    <EmployersList></EmployersList>
                </div>
            </Container>
        </div>
    )
}
