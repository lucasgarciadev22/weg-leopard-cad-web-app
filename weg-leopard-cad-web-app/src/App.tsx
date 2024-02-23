import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ReleaseNotes from "./pages/ReleaseNotes";
import QuickGuide from "./pages/QuickGuide";
import Navbar from "./components/NavBar";
import GlobalStyles from "./styles/GlobalStyles";
import SubsectionPage from "./pages/SubsectionPage";
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
