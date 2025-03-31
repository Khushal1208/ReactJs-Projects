import React from 'react';
// import link tag
import { Link , NavLink} from 'react-router-dom';
import "./Navbar.css"

// a tag is not effeicent becoz it will refrese the complete page and we don't want that
// link tag  and Navbar-> Ab SPA (Single Page Application) ki tarah kaam karega, bina page refresh ke! 
// NavLink -> Same as <Link>, but with extra features like active styling
// ✅ Adds an active class or custom styles when the link is active.
// Best for navigation menus where you want to highlight the active page.
// Supports to, className, style, and isActive props.

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active-link" : "")}>About</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard" className={({ isActive }) => (isActive ? "active-link" : "")}>Dashboard</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
