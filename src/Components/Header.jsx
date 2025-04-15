// 
import React from "react";
import { Link } from "react-router-dom";
import { Pill } from "lucide-react";
import logo from "../assets/bunni-logo.jpg"

const Header = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
      
          <img src={logo} alt="" width={120} height={110} id="logo"/>
        </Link>
          <span className="title">BUNNI  Pharmacy</span>

        <ul className="nav-links">
          <li>
            <Link to="#">Home</Link>
          </li>
          <li>
            <Link to="/AboutUs">About Us</Link>
            
          </li>
          <li>
            <Link to="./HealthBlog">Health Blog</Link>
          </li>
          <li>
            <Link to="/ProductPage">Products</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;