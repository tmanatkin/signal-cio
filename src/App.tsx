import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./styles/main.css";
import SaasMgmt from "./components/Pages/SaaSMgmt";
import About from "./components/Pages/About";
import Footer from "./components/Footer";
import FractionalCIO from "./components/Pages/FractionalCIO";

function App() {
  return (
    <Router basename="/signal-cio">
      <Navbar />
      <Routes>
        <Route path="/" element={<FractionalCIO />} />
        <Route path="/services" element={<SaasMgmt />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
