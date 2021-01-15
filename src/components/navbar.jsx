import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../logo.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="http://www.google.com" target="_blank">
        <img src={logo} width="30" height="30" alt="creative logo" />
      </a>
      <Link className="navbar-brand" to="/">
        MERN- Todo App
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/todolist">
              Todo List
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/create">
              Create Todo
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
