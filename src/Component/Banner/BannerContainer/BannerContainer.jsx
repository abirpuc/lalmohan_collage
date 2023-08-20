import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Carouse from '../Carousel/Carouse'
import NavContainer from '../NavContainer/NavContainer'

export default function BannerContainer() {
  return (
    <Row className="my-4 d-flex justify-content-center align-items-center">
        <Col md={8} sm={12}>
            <Carouse/>
        </Col>
        <Col md={4} sm={12}>
           <NavContainer/>
        </Col>
    </Row>
  )
}
