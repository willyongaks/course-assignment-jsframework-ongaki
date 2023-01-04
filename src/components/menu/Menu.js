import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from "./Nav";
import Home from "../pages/home/Home";
import Contact from "../pages/contact/Contact";
import LoginPage from "../pages/login/LoginPage";
import GameDetails from "../games/GameDetails";
import Admin from "../pages/admin/Admin";
import { AuthProvider } from "../../context/AuthContext";



function Menu() {
  return (
    <AuthProvider>
      <Router>
        < Nav />
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
    </AuthProvider>
  )
}

export default Menu