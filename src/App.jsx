import "./App.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
// import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="app">
      <Header />

      <div className="content">
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default App;
