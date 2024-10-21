import "./Navbar.css";
import logo from "./long_logo.jpg";

const Navbar = () => {
  return (
    <header>
      <nav className="nav">
        <a href="#" className="logo">
          <img src={logo} alt="logo" />
        </a>
        <ul className="nav-menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Explore</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li className="nav-contact">
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
