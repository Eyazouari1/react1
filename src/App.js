
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
//import Image from 'https://www.shutterstock.com/shutterstock/photos/1339821647/display_1500/stock-photo-web-programming-and-bracket-technology-background-react-html-native-concept-on-lcd-abstract-1339821647.jpg';
 function App(){
   return (
    <div className="App">
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <br></br>
    <div>
     <h1>hello react</h1>
     <br></br>
    <img src='https://www.shutterstock.com/shutterstock/photos/1339821647/display_1500/stock-photo-web-programming-and-bracket-technology-background-react-html-native-concept-on-lcd-abstract-1339821647.jpg'/>
     {/* <imag src={"https://www.shutterstock.com/shutterstock/photos/1339821647/display_1500/stock-photo-web-programming-and-bracket-technology-background-react-html-native-concept-on-lcd-abstract-1339821647.jpg"}/> */}
    </div>
    <div>
      <h2>please learn and complet the form</h2>
      </div>
      <br></br>
      <p>Lifelong learning is essential for teachers and eTwinning community members benefit from webinars, short and long online courses (including MOOCs), self-teaching materials, conferences, and other on-site professional development opportunities where they meet experts in many fields and improve their skills. These events allow teachers to network, learn together, and feel part of the same community.</p>
    <br></br>
    <Form>
      <fieldset disabled>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Disabled input</Form.Label>
          <Form.Control id="disabledTextInput" placeholder="Disabled input" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledSelect">Disabled select menu</Form.Label>
          <Form.Select id="disabledSelect">
            <option>Disabled select</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            id="disabledFieldsetCheck"
            label="Can't check this"
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </fieldset>
    </Form>
    
     
   
 


    </div>
);
 }
export default App;
