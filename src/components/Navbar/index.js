import React from "react";
import "./style.css";
import { Link, useLocation } from "react-router-dom";

function Navbar(){
  const location = useLocation();


return(
  <>
    {/* <nav className="navbar navbar-expand-md navbar-light">
    <div className="nameBox">
        Aaron Tobey
    </div>
    </nav> */}
        <nav className="navbar navbar-expand-md navbar-light">

    <div className="navbar-collapse justify-content-start" id="navbarNav"> 
      <ul className="navbar-nav justify-content-end">
        <li className="nav-item">
          <Link to="/"  className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
            About
          </Link>
        </li>
        <li className="nav-item">
            <Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"} >Portfolio</Link>
        </li>
        <li className="nav-item">
            <Link to ="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"} >Contact</Link>
        </li>
      </ul>
    </div>
  </nav>
  </>
)
}
export default Navbar