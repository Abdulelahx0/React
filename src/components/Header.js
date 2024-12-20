import React from "react";
import { Link } from "react-router";
const Header = () => {
  return (
    <header className="container">
      <nav className="navbar">
        <h1>Project React</h1>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/create" className="btn">
            New Post
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
