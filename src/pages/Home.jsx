import React from 'react'
import { Carousel } from 'react-bootstrap'
import { Container } from 'semantic-ui-react'
import JobAdvertisementsList from './JobAdvertisement/JobAdvertisementsList'
import EmployerList from './Employer/EmployersList'
import JobSeekerList from './JobSeeker/JobSeekerList'
import image2 from '../assets/images/human-resources2.jpg'
import image3 from '../assets/images/human-resources3.jpg'
import image4 from '../assets/images/human-resources4.jpg'

export default function Home() {
    return (
        <div>

            <Carousel prevLabel={null} nextLabel={null} fade={true}>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block carousel-home-img"
                        src={image4}
                        alt="First slide"
                    />
 
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block carousel-home-img"
                        src={image2}
                        alt="Second slide"
                    />


                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block carousel-home-img"
                        src={image3}
                        alt="Third slide"
                    />

                </Carousel.Item>
            </Carousel>
            
            <Container>
                <JobAdvertisementsList></JobAdvertisementsList>
                <EmployerList></EmployerList>
                <JobSeekerList></JobSeekerList>
            </Container>
        </div>
    )
}