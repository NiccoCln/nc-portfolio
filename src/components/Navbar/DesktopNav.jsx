import MuiAppBar from "../../muiComponents/MuiAppBar";

import { NavLink } from "react-router-dom";

const DesktopNav = ({ isMobileScreen, navElements }) => {
  return (
    <MuiAppBar>
      <div
        style={{
          display: isMobileScreen ? "none" : "flex",
          marginLeft: "auto",
        }}
      >
        {navElements.map((el) => (
          <NavLink
            key={el.link}
            className={({ isActive }) =>
              isActive ? "navlink-active" : "navlink"
            }
            to={el.link}
          >
            {el.title.toUpperCase()}
          </NavLink>
        ))}
      </div>
    </MuiAppBar>
  );
};

export default DesktopNav;
