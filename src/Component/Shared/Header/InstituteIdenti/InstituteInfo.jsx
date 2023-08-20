import React from 'react'
import logo from '../../../../assets/logo/1671373628.gif'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function InstituteInfo() {
    return (
        <div>
            <Container className="d-flex justify-content-around align-items-center my-3">
                <img src={logo} alt="" width="120px" />
                <Link className="text-center text-decoration-none" to="/">
                    <h1 className='text-xl fw-bold' style={{ color: '#19686d' }}>LALMOHAN HA-MIM RESIDENTIAL SCHOOL &amp; COLLEGE</h1>
                    <h5 className="text-md" style={{ color: "#19686d", fontWeight: 'bold' }}>
                        Lalmohan
                    </h5>
                </Link>
            </Container>
        </div>
    )
}
