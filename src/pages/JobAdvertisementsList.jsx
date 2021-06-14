import React, { useState, useEffect } from 'react'
import { Table, Menu, Icon } from 'semantic-ui-react'
import JobAdvertisementService from '../services/jobAdvertisementService'

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

                    {
                        jobAdvertisements.map(jobAdvertisement => (
                            <Table.Row key={jobAdvertisement.id} >
                                <div className="job-advertisement my-3">
                                    <h1>{jobAdvertisement.jobName}</h1>
                                    <p>{jobAdvertisement.companyName}</p>
                                </div>
                            </Table.Row>
                        ))
                    }



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
