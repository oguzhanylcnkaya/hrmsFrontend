import React, { useState, useEffect } from 'react'
import { Table, Menu, Icon, Button } from 'semantic-ui-react';
import bg1 from '../assets/images/page-title-1.jpg';
import JobAdvertisementService from '../services/jobAdvertisementService';
import { toast } from 'react-toastify'

export default function NotApprovedAdvertisementList() {
    const [jobAdvertisements, setJobAdvertisements] = useState([]);
    let jobAdvertisementService = new JobAdvertisementService();
    
    useEffect(() => {
        
        jobAdvertisementService.getNotApproveByHrmsPersonnel()
            .then((response) => {
                setJobAdvertisements(response.data.data);
            })
    }, []);

    let approve = (id) => {
        jobAdvertisementService.doApproveByHrmsPersonnel(id)
            .then((response) => {
                console.log(response);
                toast.success(response.data.message);
            });
    }

    return (
        <div>
            <div className="page-top-area" style={{ background: `url(${bg1})` }}>
            </div>

            <div className="container my-5">
                <div className="row">
                    <div className="col-md-12">
                        <Table celled>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Header</Table.HeaderCell>
                                    <Table.HeaderCell>Header</Table.HeaderCell>
                                    <Table.HeaderCell>Header</Table.HeaderCell>
                                    <Table.HeaderCell>Header</Table.HeaderCell>
                                    <Table.HeaderCell>Header</Table.HeaderCell>
                                    <Table.HeaderCell></Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>

                                {
                                    jobAdvertisements.map((jobAdvertisement, index) => (
                                        <Table.Row key={index}>
                                            <Table.Cell>{jobAdvertisement.companyName}</Table.Cell>
                                            <Table.Cell>{jobAdvertisement.jobName}</Table.Cell>
                                            <Table.Cell>{jobAdvertisement.openPositionQuantity}</Table.Cell>
                                            <Table.Cell>{jobAdvertisement.createDate}</Table.Cell>
                                            <Table.Cell>{jobAdvertisement.applicationDeadline}</Table.Cell>
                                            <Table.Cell>
                                                <Button 
                                                onClick={() => approve(jobAdvertisement.jobAdvertisementId)}
                                                inverted color='green'>
                                                    Onayla
                                                </Button>
                                            </Table.Cell>
                                        </Table.Row>
                                    ))
                                }


                            </Table.Body>

                            <Table.Footer>
                                <Table.Row>
                                    <Table.HeaderCell colSpan='6'>
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
                </div>
            </div>

        </div>
    )
}
