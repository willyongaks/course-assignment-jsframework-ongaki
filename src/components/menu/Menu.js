import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from "../pages/home/Home";
import Contact from "../pages/contact/Contact";
import Login from "../pages/login/Login";



function Menu() {
  return (
    <Router>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavLink to="/" className="nav-link">Home</NavLink>
                    <NavLink to="/contact" className="nav-link">Contact</NavLink>
                    <NavLink to="/login" className="nav-link">Login</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

        <Container>
            <Routes>
                <Route path="/" exact element={< Home />}/>
                <Route path="/contact" element={< Contact />}/>
                <Route path="/login" element={< Login />}/>
            </Routes>
        </Container>
    </Router>
  )
}

export default Menu