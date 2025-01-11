import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Shared/Navbar";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Footer from "./components/Shared/Footer";
import "./styles/main.css";
import ScrollToHash from "./components/ScrollToHash";

function App() {
  return (
    <Router basename="/">
      <Navbar />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
