import { Link } from "react-router";
function Navbar({ favouritesCount }) {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link to="/" className="nav-brand">
                    <span>🍳</span> Recipe Book
                </Link>
                <div className="nav-links">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/recipes" className="nav-link">Recipes</Link>
                    <Link to="/favourites" className="nav-link">
                        Favourites <span className="nav-badge">{favouritesCount}</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;