import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar row navbar-dark bg-dark">
        <span><a className="navbar-brand" href="/"> Search</a>
        <a className="navbar-brand" href="/">Saved</a></span>
    </nav>
  );
}

export default Nav;
