import React from "react";
import { Link } from "react-router";
const Error = () => {
  return (
    <div className="not-found">
      <h1>Page not found</h1>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default Error;
