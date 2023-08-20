import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Carouse from '../Carousel/Carouse'

export default function BannerContainer() {
  return (
    <Row className="my-4">
        <Col md={8} sm={12}>
            <Carouse/>
        </Col>
        <Col md={4} sm={12}>
            nav Item container
        </Col>
    </Row>
  )
}
