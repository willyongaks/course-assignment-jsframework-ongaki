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
                            | <Link to="/admin" className='nav-link'>Admin</Link> | <button onClick={logout} className="logout-Btn">Log out</button>
                        </>
                    ) : (
                        <Link to="/login" className='nav-link'>Login</Link>
                        
                    )}
                    <Link to="/contact" className='nav-link'>Contact</Link>
                    <Link to="/favourites" className='nav-link'>favourites</Link>
                </nav>
            </Navbar.Collapse>
        </Navbar>
  )
}

export default Nav