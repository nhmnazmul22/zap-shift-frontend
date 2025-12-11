import React from "react";
import { NavLink } from "react-router";
import { menuLinks } from "../../../constants";

const LinkItems = ({ className }) => {
  return (
    <>
      {menuLinks.map((item) => (
        <li key={item.id}>
          <NavLink
            to={item.href}
            className={`text-base-200 text-base font-medium ${className}`}
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </>
  );
};

export default LinkItems;
