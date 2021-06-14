import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import EmployerService from '../services/employerService'

export default function EmployersList() {

    const [employers, setEmployers] = useState([])

    useEffect(() => {
        let employerService = new EmployerService();

        employerService.getAll()
            .then(response => setEmployers(response.data.data))
    })

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
           
                        <th>Şirket Adı</th>
                        <th>Website</th>
                        <th>Telefon Numarası</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employers.map(employer => (
                            <tr>
                                <td>{employer.companyName}</td>
                                <td>{employer.website}</td>
                                <td>{employer.phoneNumber}</td>
                            </tr>
                        ))
                    }

                </tbody>
            </Table>
        </div>
    )
}