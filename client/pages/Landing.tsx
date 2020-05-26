import { useState } from 'react'
import Head from 'next/head'
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap'

import NavigationBar from '../components/NavigationBar';

import styles from '../styles/landing.module.scss'

export default function Landing() {
  const [show, setShow] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseRegister = () => setShowRegister(false);
  const handleShowRegister = () => setShowRegister(true);
  return (
    <div>
      <Head>
        <title>D-velopermedia</title>
      </Head>
      <body>
        <NavigationBar />
        <section id={styles.showcase}>
          <div>
            <Container  className="position-relative">
              <Row className="h-100 d-flex align-items-center">
                <Col md="8">
                  <h1 className="display-2 mb-4"><span className="text-primary">D-</span>veloper Media</h1>
                  <p className="lead mb-4">Create your profile/portfolio right now, share posts and get help from developers around the world</p>
                  <Button onClick={handleShowRegister} variant="primary" size="lg" className="mr-3 px-5 py-2">Sign Up</Button>
                  <Button onClick={handleShow} size="lg" className="px-5 py-2 text-dark bg-light">Login</Button>
                </Col>
                <footer className="position-absolute fixed-bottom">
                  <Row>
                    <Col md="5" className="ml-auto text-right pr-4 pb-4">
                      <span>Copyright &copy; {new Date().getFullYear()} D-veloperMedia</span>
                    </Col>
                  </Row>
                </footer>
              </Row>
            </Container>        
          </div>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Login to your account</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group>
                <Form.Control size="lg" placeholder="Email" />
              </Form.Group>
              <Form.Group>
                <Form.Control size="lg" placeholder="Password" />
              </Form.Group>
              <Button variant="primary" size="lg" block onClick={handleClose}>
                  Submit
              </Button>
            </Modal.Body>
          </Modal>

          <Modal show={showRegister} onHide={handleCloseRegister}>
            <Modal.Header closeButton>
              <Modal.Title>Create your account</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form.Group>
                <Form.Control size="lg" placeholder="Name" />
              </Form.Group>
              <Form.Group>
                <Form.Control size="lg" placeholder="Email" />
                <Form.Text>This site uses Gravatar use your Gravatar email for a profile photo</Form.Text>
              </Form.Group>
              <Form.Group>
                <Form.Control size="lg" placeholder="Password" />
              </Form.Group>
              <Form.Group>
                <Form.Control size="lg" placeholder="Confirm Password" />
              </Form.Group>
              <Button variant="primary" size="lg" block onClick={handleCloseRegister}>
                  Submit
              </Button>
            </Modal.Body>
          </Modal>
        </section>
      </body >      
    </div>
  )
}
