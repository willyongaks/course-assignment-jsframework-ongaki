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
import LoginPage from "../pages/login/LoginPage";
import GameDetails from "../games/GameDetails";
import Admin from "../pages/admin/Admin";



function Menu() {
  return (
    <Router>
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand to="#home" className="logo">Gameset</Navbar.Brand>
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
                <Route path="/details/:id" element={ <GameDetails />} />
                <Route path="/contact" element={< Contact />}/>
                <Route path="/login" element={< LoginPage />}/>
                <Route path="/admin" element={< Admin />}/>
            </Routes>
        </Container>
    </Router>
  )
}

export default Menu