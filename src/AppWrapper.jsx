import App from "./App";
import { HashRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const AppWrapper = () => {
  const theme = createTheme();

  return (
    <AnimatePresence>
      <HashRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </HashRouter>
    </AnimatePresence>
  );
};

export default AppWrapper;
