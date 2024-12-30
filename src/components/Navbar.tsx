import { Link } from "react-router-dom";

interface NavbarProps {
  pageTitles: string[];
}

const Navbar: React.FC<NavbarProps> = ({ pageTitles }) => {
  return (
    <nav>
      <Link to={`/`} id="nav-home"></Link>
      <ul>
        {pageTitles.map((pageTitle) => {
          const pageRoute = pageTitle.toLowerCase().replace(/\s+/g, "-");
          return (
            <li key={pageRoute}>
              <Link to={`/${pageRoute}`}>{pageTitle}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
