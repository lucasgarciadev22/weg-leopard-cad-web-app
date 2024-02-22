// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import { Navbar } from "react-bootstrap";
import About from "../components/About";
import Home from "../components/Home";
import QuickGuide from "../components/QuickGuide";
import ReleaseNotes from "../components/ReleaseNotes";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/release-notes" element={<ReleaseNotes />} />
            <Route path="/quick-guide" element={<QuickGuide />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
