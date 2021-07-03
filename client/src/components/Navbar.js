import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="link">
                <Link to="/">Home</Link>
                <Link to="/search">Search</Link>
            </div>
        </nav>
    )
}

export default NavBar
