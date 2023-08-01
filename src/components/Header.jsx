import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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

const Header = () => {
  const navigate = useNavigate();

  return (
    <AppBar
      position="sticky"
      className="header"
      style={{ backgroundColor: "transparent" }}
    >
      <Toolbar className="header-toolbar">
        <div>
          <IconButton>
            <a href="https://github.com/NiccoCln">
              <GitHubIcon fontSize="large" style={{ color: "#fffffe" }} />
            </a>
          </IconButton>

          <IconButton>
            <a href="https://linkedin.com/in/nicoleta-c-7898971b3">
              <LinkedInIcon fontSize="large" style={{ color: "#fffffe" }} />
            </a>
          </IconButton>
        </div>

        <div style={{}}>
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
      </Toolbar>
    </AppBar>
  );
};

export default Header;
