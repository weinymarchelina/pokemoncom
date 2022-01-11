import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="pokemoncom">
        <Link to="/">
          <img src="/icon.png" alt="pokemoncom icon" />
        </Link>
      </div>

      <div className="links-container">
        <Link to="/">Home</Link>
        <Link to="/pokemon">Search</Link>
      </div>
    </nav>
  );
};

export default Navbar;
