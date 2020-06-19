import { useState, useEffect } from 'react'
import { Row, Col, Card, Image } from 'react-bootstrap'
import { FaGlobe, FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
// import ProfileImg from '../../../public/images/rsz_1rsz_image8.jpg'

export default ({ profile }) => {

  return (
    <Row>
      <Col>
        <Card>
          <Card.Body className="bg-info text-white pb-3">
            <Row>
              <div className="col-4 col-md-3 m-auto">
                <Image src='/images/rsz_1rsz_image8.jpg' alt="profile_image" roundedCircle />
              </div>
            </Row>
            <div className="text-center">
              <h1 className="display-4">Roghashin Timbiti</h1>
              <p className="lead">Developer at RGH</p>
              <p className="lead">Kampala, Uganda</p>
              <p>
                <FaGlobe color="white" size="32px" className="ml-1" />
                <FaTwitter color="white" size="32px" className="ml-1" />
                <FaFacebook color="white" size="32px" className="ml-1" />
                <FaLinkedin color="white" size="32px" className="ml-1" />
                <FaInstagram color="white" size="32px" className="ml-1" />
              </p>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}
