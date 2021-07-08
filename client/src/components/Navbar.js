import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'

const NavBar = () => {
    return (
        <nav className="navbar">
            <Navbar.Brand href="/">SEEDS</Navbar.Brand>
            <div className="link">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/search">Search</Nav.Link>
                </Nav>
            </div>
        </nav>
    )
}

export default NavBar
