import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light navbar-expand-lg">
      <Link to="/movies" className="navbar-brand">
        MovieLib
      </Link>
      <div className="navbar-nav">
        <NavLink to="/movies" className="nav-item nav-link">
          Movies
        </NavLink>
        <NavLink to="/rentals" className="nav-item nav-link">
          Rentals
        </NavLink>
        <NavLink to="/customers" className="nav-item nav-link">
          Customers
        </NavLink>
        <NavLink to="/login" className="nav-item nav-link">
          Login
        </NavLink>
        <NavLink to="/register" className="nav-item nav-link">
          Register
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
