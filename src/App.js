import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Services from "./components/services/Services";
import Contract from "./components/contract/Contract";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contract" element={<Contract />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
