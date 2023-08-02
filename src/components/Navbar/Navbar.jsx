import React from "react";
import { useNavigate } from "react-router-dom";
import { createTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

const navElements = [
  {
    title: "about",
    link: "/",
  },
  {
    title: "resume",
    link: "/resume",
  },
  {
    title: "projects",
    link: "/projects",
  },
  {
    title: "contact",
    link: "/contact",
  },
];

const theme = createTheme();

const Navbar = () => {
  const navigate = useNavigate();
  const isMobileScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleNavClick = (link) => {
    if (isMobileScreen) {
      toggleDrawer(false)();
    }
    navigate(link);
  };

  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  if (isMobileScreen) {
    return (
      <MobileNav
        toggleDrawer={toggleDrawer}
        handleNavClick={handleNavClick}
        isDrawerOpen={isDrawerOpen}
        navElements={navElements}
      />
    );
  } else {
    return (
      <DesktopNav isMobileScreen={isMobileScreen} navElements={navElements} />
    );
  }
};

export default Navbar;
