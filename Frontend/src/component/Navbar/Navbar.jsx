import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Upload Gallary Photo</Link>
        </li>
        <li>
          <Link to="/gallery">All Gallery Photo</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;