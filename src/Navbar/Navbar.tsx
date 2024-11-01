
import "./Navbar.css";
import logo from "./long_logo.png"; // Ensure the logo fits the green theme

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
            <a href="#">Co ntact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
