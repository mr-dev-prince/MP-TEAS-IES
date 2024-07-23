import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Home from "./pages/Home";
import Footer from "./components/common/Footer";
import CommitteeMembers from "./pages/Commitee";
import ConferenceInfo from "./pages/ConferenceInfo";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/committees" element={<CommitteeMembers/>} />
        <Route path="/conferenceinfo" element={<ConferenceInfo/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
