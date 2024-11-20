export const headerOptions = [
  {
    id: 0,
    href: "/",
    value: "Home",
    hasOptions: false,
  },
  {
    id: 1,
    value: "Details",
    hasOptions: true,
    options: [
      { id: 1, href: "/mpteas", value: "About MP-TEAS" },
      { id: 2, href: "/organisers", value: "About Conference Organizers" },
      { id: 3, href: "/venue", value: "Venue" },
      { id: 4, href: "/aim", value: "Aim & Objectives" },
    ],
  },
  {
    id: 2,
    value: "Authors",
    hasOptions: true,
    options: [
      { id: 5, href: "/call_for_papers", value: "Call For Papers" },
      { id: 6, href: "/important_dates", value: "Important Dates" },
      {
        id: 7,
        href: "/author_guidelines",
        value: "Author Guidelines & Submission",
      },
      { id: 8, href: "/conference_tracks", value: "Conference Tracks" },
      { id: 22, href: "/registrations", value: "Registrations" },
      { id: 23, href: "/itinerary", value: "Conference Itinerary" },
    ],
  },
  {
    id: 3,
    value: "Committees",
    hasOptions: true,
    options: [
      { id: 9, href: "/cob", value: "Conference Organizers & Boards" },
      { id: 14, href: "/conference-reviewers", value: "Conference Reviewers" },
      { id: 10, href: "/patron", value: "Patron/Copatron/General chair" },
      { id: 11, href: "/advisory_chairs", value: "Advisory Chairs" },
      { id: 12, href: "/pc_chairs", value: "PC Chairs Convenor / Co-Chairs" },
      {
        id: 13,
        href: "/secretary",
        value:
          "Organizing Secretary / Co-Organizing Secretary / Joint Secretary",
      },
      { id: 14, href: "/org_committee", value: "Organizing Committee" },
    ],
  },
  {
    id: 4,
    value: "Invitees",
    hasOptions: true,
    options: [
      { id: 15, href: "/eminent_speakers", value: "Eminent Guests of Honors" },
      { id: 16, href: "/keynote_speakers", value: "Keynote Speakers" },
      {
        id: 17,
        href: "/invited_speakers",
        value: "Invited Speaker(s) / Session Chair(s)",
      },
    ],
  },
  {
    id: 5,
    value: "Special Session Proposals",
    hasOptions: true,
    options: [
      { id: 18, href: "/proposal_guide", value: "Proposal Guidelines" },
      { id: 19, href: "/proceedings", value: "Proceedings" },
      { id: 20, href: "/tracks", value: "Tracks" },
      { id: 21, href: "/paper_category", value: "Paper Categories" },
    ],
  },
  {
    id: 6,
    href: "/travel",
    value: "Travel & Visa",
    hasOptions: false,
  },
  {
    id: 7,
    href: "/",
    value: "Schedule",
    hasOptions: false,
  },
  {
    id: 8,
    href: "/contact",
    value: "Contact Us",
    hasOptions: false,
  },
];

export const registrationData = [
  {
    category: "Industry",
    earlyBird: { indian: "₹ 13000", foreigner: "$ 400" },
    regular: { indian: "₹ 15000", foreigner: "$ 500" },
  },
  {
    category: "Academician/Research Fellow",
    earlyBird: { indian: "₹ 12000", foreigner: "$ 350" },
    regular: { indian: "₹ 14000", foreigner: "$ 450" },
  },
  {
    category: "Student (UG/PG/PhD)",
    earlyBird: { indian: "₹ 10000", foreigner: "$ 300" },
    regular: { indian: "₹ 11000", foreigner: "$ 350" },
  },
  {
    category: "Participant Only",
    earlyBird: { indian: "₹ 300", foreigner: "$ 150" },
    regular: { indian: "₹ 300", foreigner: "$ 200" },
  },
];
