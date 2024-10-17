import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Create Photo</Link>
        </li>
        <li>
          <Link to="/gallery">Photo Gallery</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;