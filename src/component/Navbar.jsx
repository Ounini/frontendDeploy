import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>

      <button>
        <Link to={-1}>Go back prev page</Link>
      </button>
    </nav>
  );
};

export default Navbar;
