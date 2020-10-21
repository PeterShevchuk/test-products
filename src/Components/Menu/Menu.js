import React from "react";

import { NavLink } from "react-router-dom";

import { nav } from "../../vars";

import "./Menu.css";

const Menu = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink to={nav.home} exact className="nav__item-link">
            List Products
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to={nav.edit} className="nav__item-link">
            Edit Products
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
