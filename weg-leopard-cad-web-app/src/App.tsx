import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import ReleaseNotes from "./components/ReleaseNotes";
import QuickGuide from "./components/QuickGuide";
import Navbar from "./components/NavBar";
import GlobalStyles from "./styles/GlobalStyles";
import SubsectionPage from "./components/SubsectionPage";
import { Subsection } from "./models/QuickGuide";

const App: React.FC = () => {
  const [selectedSubsection, setSelectedSubsection] = useState<
    Subsection | undefined
  >();
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
            <Route
              path="/quick-guide"
              element={
                <QuickGuide setSelectedSubsection={setSelectedSubsection} />
              }
            />
            <Route
              path="/quick-guide/:name"
              element={
                <SubsectionPage receivedSubsection={selectedSubsection} />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
