import { useState } from "react";
import "./App.css";
import Navbar from "./assets/components/Navbar/Navbar";
import { Home } from "./assets/components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./assets/components/About";
import Contact from "./assets/components/Contact";
import Signup from "./assets/components/Signup";
import Header from "./assets/components/Header";
function App() {
  return (
    <>
      <div className="container">
        <Router>
          <Header />
          <div className="content">
            <Navbar />
            <div className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/signup" element={<Signup />} />
              </Routes>
            </div>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
