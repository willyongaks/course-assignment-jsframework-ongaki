import { useContext} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import AuthContext from '../../context/AuthContext';
import { Link, useNavigate } from "react-router-dom";

function Nav() {
    const [auth, setAuth] = useContext(AuthContext);

    const history = useNavigate();

    function logout(){
        setAuth(null);
        history.push("/")
    }


  return (
    <Navbar bg="dark" variant='dark' expand="lg">
            <Navbar.Brand to="#home" className="logo">Gameset</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <nav className="mr-auto">
                   <Link to="/" className='nav-link'>Home</Link>
                    {auth ? (
                        <>
                            | <Link to="/dashboard" className='nav-link'>Dashboard</Link> | <button onClick={logout}>Log out</button>
                        </>
                    ) : (
                        <Link to="/login" className='nav-link'>Login</Link>
                        
                    )}
                    <Link to="/contact" className='nav-link'>Contact</Link>
                </nav>
            </Navbar.Collapse>
        </Navbar>
  )
}

export default Nav