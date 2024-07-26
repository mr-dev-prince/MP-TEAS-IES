import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Home from "./pages/Home";
import Footer from "./components/common/Footer";
import CommitteeMembers from "./pages/Commitee";
import ConferenceInfo from "./pages/ConferenceInfo";
import AboutOrganisers from "./pages/Home-sub-pages/AboutOrganisers";
import AboutMpTeas from "./pages/Home-sub-pages/AboutMpTeas";
import AimObjectivesPages from "./pages/Home-sub-pages/AimObjectivesPages";
import Venue from "./pages/Home-sub-pages/Venue";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/organisers" element={<AboutOrganisers />} />
        <Route path="/mpteas" element={<AboutMpTeas />} />
        <Route path="/venue" element={<Venue />} />
        <Route path="/aim" element={<AimObjectivesPages />} />
        <Route path="/committees" element={<CommitteeMembers />} />
        <Route path="/conferenceinfo" element={<ConferenceInfo />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
