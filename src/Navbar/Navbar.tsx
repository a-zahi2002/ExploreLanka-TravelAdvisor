import "./Navbar.css";
import logo from"./long_logo.png";

const Navbar=()=>{
return(
<header>
<nav className="nav-bar">
  <a href="#" className="logo">
    <img src={logo} alt="Logo" />
  </a><br></br><br></br>
  <ul className="nav-menu">
    <li>
      <button className="nav-button"><a href="#">Home</a></button>
    </li>
    <li>
      <button className="nav-button"><a href="#">Explore</a></button>
    </li>
    <li>
      <button className="nav-button"><a href="#">About</a></button>
    </li>
    <li className="nav-contact">
      <button className="nav-button"><a href="#">Contact</a></button>
    </li>
  </ul>
</nav>
</header>
);
};
export default Navbar;