import { NavLink } from "react-router-dom";

const NavLinks = ({ el }) => {
  return (
    <NavLink
      key={el.link}
      className={({ isActive }) => (isActive ? "navlink-active" : "navlink")}
      to={el.link}
    >
      {el.title.toUpperCase()}
    </NavLink>
  );
};

export default NavLinks;
