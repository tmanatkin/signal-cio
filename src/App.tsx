import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./styles/main.css";
import SaasMgmt from "./components/LandingLayout/SaaSMgmt";
import AboutMe from "./components/AboutMe/AboutMe";
// import Services from "./components/Services/Services";
import Footer from "./components/Footer";
import FractionalCIO from "./components/LandingLayout/FractionalCIO";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<FractionalCIO />} />
        <Route path="/services" element={<SaasMgmt />} />
        {/* <Route path="/services" element={<Services />} /> */}
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
