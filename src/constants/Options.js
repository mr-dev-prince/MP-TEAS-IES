export const headerOptions = [
  {
    id: 0,
    href: "/",
    value: "Home",
    hasOptions: false,
  },
  {
    id: 1,
    href: "/",
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
    href: "/authors",
    value: "Authors",
    hasOptions: true,
    options: [
      { id: 1, href: "/call_for_papers", value: "Call For Papers" },
      { id: 2, href: "/important_dates", value: "Important Dates" },
      {
        id: 3,
        href: "/author_guidelines",
        value: "Author Guidelines & Submission",
      },
      { id: 4, href: "/conference_tracks", value: "Conference Tracks" },
      { id: 5, href: "/registrations", value: "Registrations" },
    ],
  },
  {
    id: 3,
    href: "/committees",
    value: "Committees",
    hasOptions: true,
    options: [
      { id: 1, href: "/cob", value: "Conference Organizers & Boards" },
      { id: 1, href: "/patron", value: "Patron/Copatron/General chair" },
      { id: 1, href: "/advisory_chairs", value: "Advisory Chairs" },
      { id: 1, href: "/pc_chairs", value: "PC Chairs Convenor / Co-Chairs" },
      {
        id: 1,
        href: "/secretary",
        value:
          "Organizing Secretary / Co-Organizing Secretary / Joint Secretary",
      },
      { id: 1, href: "/org_committee", value: "Organizing Committee" },
    ],
  },
  {
    id: 4,
    href: "/conferenceinfo",
    value: "Invitees",
    hasOptions: true,
    options: [
      { id: 1, href: "/eminent_speakers", value: "Eminent Guests of Honors" },
      { id: 2, href: "/keynote_speakers", value: "Keynote Speakers" },
      {
        id: 3,
        href: "/invited_speakers",
        value: "Invited Speaker(s) / Session Chair(s)",
      },
      {
        id: 4,
        href: "/workshop",
        value: "Workshop",
      },
    ],
  },
  {
    id: 5,
    href: "/ssp",
    value: "Special Session Proposals",
    hasOptions: true,
    options: [
      { id: 1, href: "/proposal_guide", value: "Proposal Guidelines" },
      {
        id: 2,
        href: "/special_subs",
        value: "Submission for Special Sessions",
      },
      { id: 3, href: "/proceedings", value: "Proceedings" },
      { id: 4, href: "/tracks", value: "Tracks" },
      { id: 5, href: "/paper_category", value: "Paper Categories" },
    ],
  },
  {
    id: 6,
    href: "/travel",
    value: "Travel & Visa",
    hasOptions: false,
    options: [{ id: 1, href: "/", value: "" }],
  },
  {
    id: 8,
    href: "/",
    value: "Schedule",
    hasOptions: false,
    options: [{ id: 1, href: "/", value: "" }],
  },
  {
    id: 7,
    href: "/contact",
    value: "Contact Us",
    hasOptions: false,
    options: [{ id: 1, href: "/", value: "" }],
  },
];
