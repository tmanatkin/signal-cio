import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav>
      <Link to={`/`} id="nav-home"></Link>
      <ul>
        <li key="services">
          <Link to={`/services`}>Services</Link>
        </li>
        <li key="about">
          <Link to={`/about`}>About</Link>
        </li>
        <li key="book-a-call">
          <Link
            to={`https://signalcio.pipedrive.com/scheduler/lpKWaqfo/saas-management-consultation`}
            target="_blank"
          >
            Book a Call
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
