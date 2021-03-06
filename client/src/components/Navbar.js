import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'
import { LinkContainer } from 'react-router-bootstrap'

const NavBar = () => {
    return (
        <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <LinkContainer to="/search">
                <Nav.Link>Search</Nav.Link>
            </LinkContainer>
        </Nav>
    )
}

export default NavBar
