import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export function Mabarre() {
  return (
    <Navbar className='Menu' bg="warning" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Ricky Autocar</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Accueil</Nav.Link>
            <Nav.Link href="#action2">Liens</Nav.Link>
            <NavDropdown title="Véhicules" id="navbarScrollingDropdown">
              <NavDropdown.Item href={`/prestige/1`} target = "_blank">Prestige</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Utililitaires
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Citadines
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Contact
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Recherchez"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Recherchez</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
