import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav>
      <Link to={`/`} id="nav-home"></Link>
      <ul>
        <li key="services">
          <Link to={`/about-me`}>About Me</Link>
        </li>
        <li key="about-me">
          <Link to={`/services`}>Services</Link>
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
