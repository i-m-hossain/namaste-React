import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.svg"
const Title = () => {
  return (
    <img
      
      src={logo}
      alt="FOOD-PANDA"
    />
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false) 
  return (
    <nav className="navbar">
      <Title />
      <ul>
        <Link to={'/'}><li>Home</li></Link>
        <Link to={"/about"}><li>About</li></Link>
        <Link to={"/contact"}><li>Contact Us</li></Link>
        <li>Cart</li>
        <li>
          <button onClick={e=> setIsLoggedIn(prev=> !prev)}>{isLoggedIn ? "Logout": "Login"} </button>
        </li>
    
      </ul>
    </nav>
  );
};

export default Header;
