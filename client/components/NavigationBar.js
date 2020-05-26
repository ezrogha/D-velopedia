import { Navbar, Nav, Container } from 'react-bootstrap'

export default function NavigationBar() {
  return (
    <Navbar bg="dark" expand="lg" className="navbar-dark fixed-top px-5">
        <Navbar.Brand href="#home">DveloperMedia</Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link>Developers</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link>Sign Up</Nav.Link>
            <Nav.Link>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}
