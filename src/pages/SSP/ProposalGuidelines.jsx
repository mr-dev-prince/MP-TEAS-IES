import React from "react";
import Carousel from "../../components/swiper/Carousel";

const ProposalGuidelines = () => {
  return (
    <div className="md:px-16 px-5 my-3">
      <div>
        <p className="md:text-5xl text-2xl text-center font-serif font-bold">
          Special Session Proposal Guidelines
        </p>
        <div className="h-1 mt-2 rounded-xl bg-gradient-to-r from-white via-black to-white relative" />
        <Carousel />
      </div>
      <div className="md:px-16 mt-5 text-lg text-justify tracking-wide space-y-3">
        <p>
          International Conference on{" "}
          <strong>
            Modern Practices and Trends in Expert Applications & Security 2024
            (MP-TEAS 2024)
          </strong>
          to be held in <strong>IES University, Bhopal</strong> on{" "}
          <strong>Nov 22-24, 2024</strong>. The conference addresses innovative
          advancements in Expert Applications & Security Issues therein with
          specific reference to the area of Computing.
        </p>
        <p>
          <strong>
            MP-TEAS 2024 aims to provide an opportunistic forum and vibrant
            platform for researchers and industry practitioners to exchange
            state-of-the-art knowledge
          </strong>{" "}
          gained from their original research work and practical developments on
          specific new challenges, applications and experiences, to establish
          business or research relations, and to find global partners for future
          collaboration on emerging issues.
        </p>
        <p>
          The Expert Application concept of the conference will focus on current
          advances in the research and use of Engineering with particular focus
          on the role in maintaining academic level while sharing novel research
          and cutting-edge developments in the fields of{" "}
          <strong>Computer System Security</strong> using cryptographic
          algorithms and other security schemes for system as well as cloud. The
          outcome of the conference significantly contributes to society by
          serving the expert community seeking to stimulate the development to
          improve lives throughout the world by providing innovative results.
        </p>
        <p>
          <strong>MP-TEAS 2024</strong>, first of all, it is an abbreviation of
          the full name of the Conference i.e. "
          <strong>
            Modern Practices and Trends in Expert Applications & Security
          </strong>
          ". Another meaning breaks it into <strong>MP and TEAS</strong>,
          wherein <strong>MP</strong> represents Major Problems such as the
          Hurdles, Challenges, Issues, and Limitations being faced by the
          Researchers in the pursuance of their Research Practices &
          Implementation of Innovations, and <strong>TEAS</strong> are the
          Knowledge Dissemination and Exchange of Ideas to solve the Major
          Problems. Through MP-TEAS 2024, all the concerned people will be
          provided a genuine platform of all possible solutions, and
          opportunities to find ways to come out of their research problems and
          limitations.
        </p>
        <p>
          Another idea to keep this name MP-TEAS is that this conference is
          being organized in <strong>IES University, Bhopal</strong> which is
          situated in the state <strong>Madhya Pradesh (MP)</strong> in India,
          and the solutions to the Major Problems as stated above will be
          discussed during the various{" "}
          <strong>TEA Sessions and TEA Breaks</strong> (TEAS) wherein the
          participants find many opportunities to collect Knowledge, Explore
          more, establish strong Networking, and platform for Sharing each
          other’s ideas.
        </p>
        <p>
          In true sense, <strong>MP-TEAS 2024</strong> provides an International
          Platform in the city of Bhopal in Madhya Pradesh (MP) through the TEAS
          of Great Knowledge, Innovations, and Networking Opportunities.
        </p>
        <p>
          <strong>MP-TEAS 2024</strong> features invited keynote speeches as
          well as peer-reviewed paper presentations. The conference is
          completely open and therefore it is not necessary to be an author or a
          discussant to attend. The Expert Application concept of the conference
          will focus on current advances in the research and use of Engineering
          with particular focus on the role in maintaining academic level while
          sharing novel research and cutting-edge developments in the fields of
          Computer and Intelligent System Security using cryptographic
          algorithms and other security schemes for system as well as cloud.
        </p>
        <p>
          The outcome of the conference significantly contributes to society by
          serving the expert community seeking to stimulate the development to
          improve lives throughout the world by providing innovative results.
          All Communications are to be made to
          <a href="mailto:mpteas2024@iesbpl.ac.in" className="text-blue-500">
            {" "}
            mpteas2024@iesbpl.ac.in
          </a>
          .
        </p>
        <p>
          Please note all papers submitted under Special Session will be
          considered under regular registration category only.
        </p>
      </div>
    </div>
  );
};

export default ProposalGuidelines;
