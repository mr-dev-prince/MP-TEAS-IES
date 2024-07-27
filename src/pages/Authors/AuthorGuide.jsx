import React from "react";
import Carousel from "../../components/swiper/Carousel";

const AuthorGuide = () => {
  return (
    <div className="md:px-16">
      <div className="mt-4">
        <p className="text-center font-bold font-serif text-2xl md:text-4xl">
          Author Guidelines & Submission
        </p>
        <div className="h-1 mt-2 rounded-xl bg-gradient-to-r from-white via-black to-white relative" />
        <Carousel />
      </div>
      <div className="text-lg tracking-wide text-justify space-y-3 mt-6">
        <p>
          Prospective authors are invited to submit manuscripts reporting
          original unpublished research and recent developments in the topics
          related to the conference. It is required that the manuscript follows
          the standard Springer camera-ready format. Submissions must include
          title, abstract, keywords, author and affiliation with email address.
          Please double-check the paper size in your page setup to make sure you
          are using the A4 size paper. The paper should not contain page numbers
          or any special headers or footers.
        </p>
        <p>
          Regular papers should present novel perspectives within the general
          scope of the conference. The conference only accepts full manuscripts
          with maximum 6 pages.
        </p>
        <p>
          Authors should submit their papers online. We use Microsoft CMT system
          for submission of papers and review process. Unregistered authors
          should first create an account on Microsoft CMT to log on. To avoid
          last minutes network problems, authors are strongly encouraged to
          create their Microsoft CMT submission system user accounts (if you do
          not already have one) and register their submission well in advance of
          the deadline.
        </p>
        <p>
          Authors are invited to submit full papers for consideration with a
          maximum length limit of 10 printed pages including all the figures,
          references, and appendices. Submission of paper must be original and
          should not have been previously published or under consideration for
          publication. All papers will be sent for peer review and the
          corresponding author will be notified of the outcome of the review
          process.
        </p>
        <p>
          The selected Research Papers of the conference will be published by
          Scopus indexed Conference Proceedings. At least one of the authors of
          each accepted paper must register for the conference and present their
          paper in person at the conference. Paper Submission Submissions of
          high quality papers in all areas of MP-TEAS are invited.
        </p>
        <p>The submissions are handled only through the Microsoft CMT at:</p>
        <a
          className="text-blue-500"
          href="https://cmt3.research.microsoft.com/MPTEAS2024"
        >
          https://cmt3.research.microsoft.com/MPTEAS2024
        </a>
        <p>
          Springer paper template-Latex{" "}
          <a className="text-blue-500" href="">
            Click Here!
          </a>
        </p>
        <p>
          Springer paper template-Word{" "}
          <a className="text-blue-500" href="">
            Click Here!
          </a>
        </p>
      </div>
    </div>
  );
};

export default AuthorGuide;
