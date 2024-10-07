import './Navbar.css';

const Navbar = () => {
  return (
    <header>
      <nav className='nav'>
      <div className='nav-logo'>Explore lanka</div>
        <ul className='nav-menu'>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>Explore</a></li>
          <li><a href='#'>About</a></li>
          <li className='nav-contact'><a href='#'>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;