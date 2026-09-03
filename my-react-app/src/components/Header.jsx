import "../App.css";
import { Link } from "react-router-dom";

function Header() {
  return (


    <nav>

      <ul className="id1">
        <li> <Link to="/">Home</Link> </li>
        <li> <Link to="/skills">Skills</Link> </li>
        <li> <Link to="/programming">Programming Language</Link> </li>
        <li> <Link to="/projects">Projects</Link> </li>
        <li> <Link to="/practice">Platform Practice</Link> </li>
        <li> <Link to="/contact">Contact</Link> </li>
        <li> <Link to="/login">login</Link> </li>
      </ul>
    </nav>


  )
}

export default Header;