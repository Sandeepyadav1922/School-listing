import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
  <div className="container-fluid">
        <h2>School App</h2>
    <div className="right-nav">
        <Link to="/add-school">
        <button className="btn btn-success">Create New School</button>
        </Link>
    </div>
    </div>
</nav>
    );
}

export default Navbar;