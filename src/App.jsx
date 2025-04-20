import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Practice from "./pages/Practice";
import Instructions from "./pages/Instructions";
import SolvePaper from "./pages/SolvePaper";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/instructions/:id" element={<Instructions />} />
        <Route path="/paper/:id" element={<SolvePaper />} />
      </Routes>
    </>
  );
}

export default App;
