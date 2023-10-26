import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function TitleBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      <Navbar.Brand href="#home" className='navbar_heading' >Sandesh Kedari</Navbar.Brand>
      
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="about">About</Nav.Link>
            <Nav.Link href="technicalskill">TechnicalSkills</Nav.Link>
            <Nav.Link href="experience">Experience</Nav.Link>
            <Nav.Link href="downloadcv">Download CV</Nav.Link>
             
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TitleBar;