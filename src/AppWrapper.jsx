import App from "./App";
import { HashRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const AppWrapper = () => {
  return (
    <AnimatePresence>
      <HashRouter>
        <App />
      </HashRouter>
    </AnimatePresence>
  );
};

export default AppWrapper;
