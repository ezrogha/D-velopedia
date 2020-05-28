import { Navbar, Nav } from 'react-bootstrap';
import LoginModal from './LoginModal'
import RegisterModal from './RegisterModal'

export default function NavigationBar({ showRegister, handleCloseRegister, show, handleClose, handleShowRegister, handleShow }) {
  return (
    <>
      <Navbar bg="dark" expand="lg" className="navbar-dark fixed-top px-5">
        <Navbar.Brand href="#home">DveloperMedia</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link>Developers</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link onClick={handleShowRegister}>Sign Up</Nav.Link>
            <Nav.Link onClick={handleShow}>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <LoginModal show={show} handleClose={handleClose} />
      <RegisterModal showRegister={showRegister} handleCloseRegister={handleCloseRegister} />
    </>
  )
}
