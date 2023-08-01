import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const AppWrapper = () => {
  return (
    <AnimatePresence>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AnimatePresence>
  );
};

export default AppWrapper;
