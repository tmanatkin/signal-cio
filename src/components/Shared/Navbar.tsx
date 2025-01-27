import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav>
      <Link to={`/`} id="nav-home" onClick={closeMenu}>
        <img src="/images/logo.png" alt="Signal CIO Logo" />
      </Link>
      <input
        className="menu-btn"
        type="checkbox"
        id="menu-btn"
        checked={menuOpen}
        onChange={toggleMenu}
      />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="navicon"></span>
      </label>
      <ul>
        <li key="services">
          <Link to={`/#services`} onClick={closeMenu}>
            Services
          </Link>
        </li>
        <li key="about">
          <Link to={`/about`} onClick={closeMenu}>
            About
          </Link>
        </li>
        <li key="book-a-call">
          <Link
            to={`https://signalcio.pipedrive.com/scheduler/bEMjaPsQ/signalcio-intro-initial-consultation`}
            target="_blank"
            onClick={closeMenu}
          >
            Book a Call
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
