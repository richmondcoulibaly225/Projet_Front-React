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
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Véhicules" id="navbarScrollingDropdown">
              <NavDropdown.Item href="https://www.google.com/search?q=voitures+de+luxe&tbm=isch&ved=2ahUKEwiJ6aC8_Z78AhXhVaQEHXBkDU4Q2-cCegQIABAA&oq=voitures+de&gs_lcp=CgNpbWcQARgAMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDoECAAQQzoECCMQJzoICAAQgAQQsQM6CAgAELEDEIMBOgQIABADUNgKWOIhYJswaABwAHgAgAF2iAHvCZIBAzMuOZgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=Y5ytY8mrCuGrkdUP8Mi18AQ&bih=595&biw=1280&client=firefox-b-d" target = "_blank">Prestige</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Utililitaires
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Citadines
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Recherchez"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">click</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
