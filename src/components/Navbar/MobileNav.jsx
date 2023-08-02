import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";

import MuiAppBar from "../../muiComponents/MuiAppBar";

const MobileNav = ({
  toggleDrawer,
  isDrawerOpen,
  handleNavClick,
  navElements,
}) => {
  return (
    <MuiAppBar>
      <IconButton onClick={toggleDrawer(true)} edge="end">
        <MenuIcon fontSize="large" style={{ color: "#004643" }} />
      </IconButton>

      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <List
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {navElements.map((el) => (
            <ListItemButton
              key={el.link}
              onClick={() => handleNavClick(el.link)}
            >
              <NavLink
                className={({ isActive }) =>
                  isActive ? "navlink-mobile-active" : "navlink-mobile"
                }
                to={el.link}
              >
                {el.title.toUpperCase()}
              </NavLink>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </MuiAppBar>
  );
};

export default MobileNav;
