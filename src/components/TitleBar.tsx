import '../index.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import { Link } from "react-router-dom";
function TitleBar() {
  const element =
    <Navbar expand="lg" variant="dark" className='navbar'>
      <Container fluid>
        <Link to='/'>
          <Navbar.Brand>
            <Button variant='dark'>
              CRUD em ReactJS
            </Button>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to='/addUsers'>
              <Button variant="dark">
                Novo Usuário
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  return element
}

export default TitleBar;
