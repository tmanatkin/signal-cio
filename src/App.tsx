import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./styles/main.css";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import BookCall from "./components/BookCall";
import Services from "./components/Services";

function App() {
  return (
    <Router>
      <Navbar pageTitles={["Services", "About Me", "Book a Call"]} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/book-a-call" element={<BookCall />} />
      </Routes>
    </Router>
  );
}

export default App;
