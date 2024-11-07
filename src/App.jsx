import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Home from "./pages/Home";
import Footer from "./components/common/Footer";
import AboutOrganisers from "./pages/Home-sub-pages/AboutOrganisers";
import AboutMpTeas from "./pages/Home-sub-pages/AboutMpTeas";
import AimObjectivesPages from "./pages/Home-sub-pages/AimObjectivesPages";
import Venue from "./pages/Home-sub-pages/Venue";
import CallForPaper from "./pages/Authors/CallForPaper";
import ImportantDate from "./pages/Authors/ImportantDate";
import AuthorGuide from "./pages/Authors/AuthorGuide";
import ConferenceTracks from "./pages/Authors/ConferenceTracks";
import ConferenceBoard from "./pages/Commitee/ConferenceBoard";
import Patron from "./pages/Commitee/Patron";
import AdvisoryChairs from "./pages/Commitee/AdvisoryChairs";
import Secretaries from "./pages/Commitee/Secretaries";
import OrgCommittee from "./pages/Commitee/OrgCommittee";
import PcChairs from "./pages/Commitee/PcChairs";
import EminentSpeakers from "./pages/Invitees/EminentSpeakers";
import KeynoteSpeakers from "./pages/Invitees/KeynoteSpeakers";
import InvitedSpeakers from "./pages/Invitees/InvitedSpeakers";
import ProposalGuidelines from "./pages/SSP/ProposalGuidelines";
import Proceedings from "./pages/SSP/Proceedings";
import Tracks from "./pages/SSP/Tracks";
import PaperCategories from "./pages/SSP/PaperCategories";
import Travel from "./pages/Travel";
import ContactUs from "./pages/ContactUs";
import Registrations from "./pages/Authors/Registrations";
import ConferenceReviewers from "./pages/Commitee/ConferenceReviewers";

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
        <Route path="/call_for_papers" element={<CallForPaper />} />
        <Route path="/important_dates" element={<ImportantDate />} />
        <Route path="/author_guidelines" element={<AuthorGuide />} />
        <Route path="/conference_tracks" element={<ConferenceTracks />} />
        <Route path="/registrations" element={<Registrations />} />
        <Route path="/cob" element={<ConferenceBoard />} />
        <Route path="/patron" element={<Patron />} />
        <Route path="/advisory_chairs" element={<AdvisoryChairs />} />
        <Route path="/pc_chairs" element={<PcChairs />} />
        <Route path="/secretary" element={<Secretaries />} />
        <Route path="/conference-reviewers" element={<ConferenceReviewers />} />
        <Route path="/org_committee" element={<OrgCommittee />} />
        <Route path="/eminent_speakers" element={<EminentSpeakers />} />
        <Route path="/keynote_speakers" element={<KeynoteSpeakers />} />
        <Route path="/invited_speakers" element={<InvitedSpeakers />} />
        <Route path="/proposal_guide" element={<ProposalGuidelines />} />
        <Route path="/proceedings" element={<Proceedings />} />
        <Route path="/tracks" element={<Tracks />} />
        <Route path="/paper_category" element={<PaperCategories />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
