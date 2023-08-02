import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Container from "@mui/material/Container";

const MuiAppBar = ({ children, ...rest }) => {
  return (
    <AppBar
      position="sticky"
      style={{
        backgroundColor: "transparent",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div>
            <IconButton>
              <a href="https://github.com/NiccoCln">
                <GitHubIcon fontSize="large" style={{ color: "#004643" }} />
              </a>
            </IconButton>

            <IconButton>
              <a href="https://linkedin.com/in/nicoleta-c-7898971b3">
                <LinkedInIcon fontSize="large" style={{ color: "#004643" }} />
              </a>
            </IconButton>
          </div>

          {children}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default MuiAppBar;
