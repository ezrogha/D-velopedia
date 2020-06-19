import { useState } from 'react'
import Head from 'next/head'
import { Container, Row, Col, Button } from 'react-bootstrap'

import NavigationBar from '../components/layout/NavigationBar';
import LoginModal from '../components/layout/LoginModal';
import RegisterModal from '../components/layout/RegisterModal';

import styles from '../styles/landing.module.scss'

export default function Landing() {
  const [show, setShow] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseRegister = () => setShowRegister(false);
  const handleShowRegister = () => setShowRegister(true);

  return (
    <>
      <Head>
        <title>D-velopermedia</title>
      </Head>
      <body>

        {/* Navigation Wrapper */}
        <NavigationBar show={show} handleClose={handleClose} showRegister={showRegister} handleCloseRegister={handleCloseRegister} handleShowRegister={handleShowRegister} handleShow={handleShow} position="fixed-top" />

        <section id={styles.showcase}>

          {/* Dark Wrapper */}
          <div>
            <Container className="position-relative">
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
                      <span>Copyright &copy; {new Date().getFullYear()} D-velopedia</span>
                    </Col>
                  </Row>
                </footer>
              </Row>
            </Container>
          </div>

        </section>
      </body >
      <LoginModal show={show} handleClose={handleClose} />
      <RegisterModal showRegister={showRegister} handleCloseRegister={handleCloseRegister} handleShowLogin={handleShow} />
    </>
  )
}
