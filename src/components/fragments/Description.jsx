import React from "react";

const Description = () => {
  return (
    <div className="md:px-[15rem] mt-4 mb-4">
      <div className="text-center">
        <p className="uppercase font-bold md:text-4xl text-2xl ">
          MP-TEAS 2024 IES UNIVERSITY BHOPAL
        </p>
      </div>
      <div className=" font-medium mt-4  w-full outline px-6 ">
        <p>
          This conference i.e. Modern Practises and Trends in Expert
          Applications and Security abbreviated as MP-TEAS 2024, will take place
          in Bhopal, Madhya Pradesh, India. In order to build intelligent ICT
          systems and pursue machine learning applications for contents,
          platforms, networks, and devices, the conference encourages their
          translation into real-world applications, and presentations of new
          developments and research findings in the fields of computer science,
          engineering applications, and the security of the Expert Applications.
          MP-TEAS 2024 aims to provide an opportunistic forum and vibrant
          platform for researchers and industry practitioners to build business
          or research relationships, find global partners for future
          collaboration on emerging issues, and share state-of-the-art knowledge
          gained from their original research work and practical developments on
          specific new challenges, applications, and experiences. The
          conference's "Expert Applications" theme will focus on the most recent
          advancements in research and the application of expert systems, with a
          particular focus on the part that these advancements play in upholding
          academic standards while disseminating cutting-edge discoveries in the
          fields of computer system security using cryptographic algorithms and
          other security schemes for system as well as for cloud. We are seeking
          for unique entries that have never been published and aren't currently
          being considered by any other journals or conferences.
        </p>

        <p className="font-bold mt-4">
          “Proceedings of UNI-TEAS 2024” will be published in two volumes of
          Springer Nature's Scopus/SCI indexed book series “Lecture Notes in
          Networks and Systems”{" "}
          <a
            className="text-blue-700"
            href="https://www.springer.com/series/15179"
          >
            https://www.springer.com/series/15179
          </a>
        </p>
      </div>
      <div className=" mt-4">
        <div className=" h-1 rounded-xl bg-gradient-to-r from-white via-black to-white relative" />
        <p className="text-center my-4">
          <span className="font-semibold text-xl">
            Important Dates [ Deadlines ]
          </span>
        </p>
        <div className="flex flex-col gap-2">
          <p className="flex font-semibold">
            Last Date of Manuscript Submission:-{" "}
            <span className="line-through mx-1">Oct 15th, 2023</span> Extended
            till Nov 20th, 2023 (No Further Extensions After This date)
          </p>
          <p>
            Notification of Acceptance:{" "}
            <span className="line-through mx-1">Oct 15th, 2023</span> Oct 30th,
            2023 (Or within 15 days of paper submission)
          </p>
          <p>
            Revised Submission: Oct 30th, 2023 (Or Within 7 Days of Intimation)
          </p>
          <p>Camera Ready Paper Due: Nov 15th, 2023</p>
          <p> Last Date of Registration (Early Birds): Nov 30th, 2023</p>
          <p>Last Date of Registration (Regular): Dec 25th, 2023</p>
          <p className="font-semibold mt-2">Conference Dates:</p>
          <p> Part 1: Jan 6th - 7th, 2024 (Jaipur)</p>
          <p>Part 2: Jan 8th - 9th, 2024 (Bhopal)</p>
        </div>
      </div>
    </div>
  );
};

export default Description;
