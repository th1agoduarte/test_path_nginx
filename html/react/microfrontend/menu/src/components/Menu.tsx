import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/user">User</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
