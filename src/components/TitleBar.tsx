import '../index.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { clearAuth } from '../api/auth'

function TitleBar() {
  const navigate = useNavigate();

  const setLoggedState = async () => {
    sessionStorage.clear()
    navigate('/');
    await clearAuth()
  }

  return (
    <>
      <Navbar expand="lg" variant="dark" className='navbar'>
        <Container fluid>
          <Link to='/app/table'>
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
              <Link to='/app/addUsers'>
                <Button variant="dark">
                  Novo Usuário
                </Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Button variant="danger" className="login" onClick={setLoggedState}>Sair</Button>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar >
    </>
  )
}

export default TitleBar;
