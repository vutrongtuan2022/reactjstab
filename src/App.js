import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about/About";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
    </>
  );
}

export default App;
