import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      Google Books API
      <a className="navbar-brand" href="/">Search</a>
      <a className="navbar-brand" href="/">Saved</a>
    </nav>
  );
}

export default Nav;
