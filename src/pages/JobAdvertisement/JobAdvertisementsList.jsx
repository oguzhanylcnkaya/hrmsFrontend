import React, { useState, useEffect } from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import { Table, Menu, Icon } from 'semantic-ui-react'
import JobAdvertisementService from '../../services/jobAdvertisementService'

export default function JobAdvertisementsList() {

    const [jobAdvertisements, setJobAdvertisements] = useState([])

    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService()
        jobAdvertisementService.getActiveJobAdvertisement()
            .then(response => setJobAdvertisements(response.data.data))
    })

    return (
        <div>
            <Table className="job-advertisement-table" celled>


                <Table.Body>
                    <Container>
                        <Row>
                            {
                                jobAdvertisements.map(jobAdvertisement => (
                                    // <Table.Row key={jobAdvertisement.id} >
                                    //     <div className="job-advertisement my-3">
                                    //         <h1>{jobAdvertisement.jobName}</h1>
                                    //         <p>{jobAdvertisement.companyName}</p>
                                    //     </div>

                                    // </Table.Row>

                                    <Col xl={4}>
                                        <div class="job-wrapper mb-30">
                                            <div class="banck-icon">
                                                <i class="flaticon-dashboard"></i>
                                            </div>
                                            <div class="job-tag mb-30">
                                                <span class="tag-normal">full time</span>
                                                <span class="tag-urgent">urgent</span>
                                            </div>
                                            <div class="job-instructor-profile mb-30">
                                                <div class="job-instructor-img f-left">
                                                    <img src="assets/img/job/01.png" alt="" />
                                                </div>
                                                <div class="job-instructor-title">
                                                    <h4><a href="job-details.html">{jobAdvertisement.companyName}</a></h4>
                                                    <span><i class="far fa-map-marker-alt"></i> 205 Main Road, New York</span>
                                                </div>
                                            </div>
                                            <div class="job-content">
                                                <h4><a href="job-details.html">{jobAdvertisement.jobName}</a></h4>
                                                <p>Quis autem vel eum reprehenderit
                                                    voluptate velitquam molestiae</p>
                                                <div class="job-salary">
                                                    <span><i class="fal fa-usd-circle"></i> 250 - 495</span>
                                                    <a href="job-details.html">Job Details <i class="far fa-arrow-right"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>

                                    // <div class="col-xl-4 col-lg-6 col-md-12">
                                    //     <div class="job-wrapper mb-30">
                                    //         <div class="banck-icon">
                                    //             <i class="flaticon-dashboard"></i>
                                    //         </div>
                                    //         <div class="job-tag mb-30">
                                    //             <span class="tag-normal">full time</span>
                                    //             <span class="tag-urgent">urgent</span>
                                    //         </div>
                                    //         <div class="job-instructor-profile mb-30">
                                    //             <div class="job-instructor-img f-left">
                                    //                 <img src="assets/img/job/01.png" alt="" />
                                    //             </div>
                                    //             <div class="job-instructor-title">
                                    //                 <h4><a href="job-details.html">Slack LTD 2020</a></h4>
                                    //                 <span><i class="far fa-map-marker-alt"></i> 205 Main Road, New York</span>
                                    //             </div>
                                    //         </div>
                                    //         <div class="job-content">
                                    //             <h4><a href="job-details.html">Senior Graphics Designer</a></h4>
                                    //             <p>Quis autem vel eum reprehenderit
                                    //                 voluptate velitquam molestiae</p>
                                    //             <div class="job-salary">
                                    //                 <span><i class="fal fa-usd-circle"></i> 250 - 495</span>
                                    //                 <a href="job-details.html">Job Details <i class="far fa-arrow-right"></i>
                                    //                 </a>
                                    //             </div>
                                    //         </div>
                                    //     </div>
                                    // </div>
                                ))
                            }
                        </Row>
                    </Container>
                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}
