import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Practice from "./pages/Practice";
import Instructions from "./pages/Instructions";
import SolvePaper from "./pages/SolvePaper";
import Navbar from "./components/Navbar"
import { ToastContainer } from "react-toastify";
import "./components/ReactToastify.css"
import Mock from "./pages/Mock";
import Pricing from "./pages/Pricing";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import QuestionPage from "./pages/QuestionPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    {/* <Navbar/> */}
    <ToastContainer/>    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/mock" element={<Practice />} />
        <Route path="/practice" element={<Mock />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/instructions/:id" element={<Instructions />} />
        <Route path="/paper/:id" element={<SolvePaper />} />
        <Route path="/questions/:exam/:subject" element={<QuestionPage />} />
      </Routes>
    </>
  );
}

export default App;
