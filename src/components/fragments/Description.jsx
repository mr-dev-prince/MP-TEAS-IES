import React from "react";

const Description = () => {
  return (
    <div className=" mt-4 mb-4">
      <div className="text-center">
        <p className="uppercase font-bold font-serif md:text-4xl text-2xl ">
          MP-TEAS 2024 IES UNIVERSITY BHOPAL
        </p>
        <div className=" h-1 rounded-xl bg-gradient-to-r from-white via-black to-white relative" />
      </div>
      <div className="mt-4 md:font-medium w-full px-6 flex flex-col gap-3 text-justify">
        <p>
          This conference i.e.{" "}
          <span className=" font-semibold  md:font-bold">
            Modern Practises and Trends in Expert Applications and Security
            abbreviated as MP-TEAS 2024
          </span>
          , will take place in Bhopal, Madhya Pradesh, India.
        </p>
        <p>
          In order to build intelligent ICT systems and pursue machine learning
          applications for contents, platforms, networks, and devices, the
          conference encourages their translation into real-world applications,
          and presentations of new developments and research findings in the
          fields of computer science, engineering applications, and the security
          of the Expert Applications. MP-TEAS 2024 aims to provide an
          opportunistic forum and vibrant platform for researchers and industry
          practitioners to build business or research relationships, find global
          partners for future collaboration on emerging issues, and share
          state-of-the-art knowledge gained from their original research work
          and practical developments on specific new challenges, applications,
          and experiences.
        </p>
        <p>
          The conference's "Expert Applications" theme will focus on the most
          recent advancements in research and the application of expert systems,
          with a particular focus on the part that these advancements play in
          upholding academic standards while disseminating cutting-edge
          discoveries in the fields of computer system security using
          cryptographic algorithms and other security schemes for system as well
          as for cloud. We are seeking for unique entries that have never been
          published and aren't currently being considered by any other journals
          or conferences.
        </p>

        <p className="font-bold mt-4">
          “Proceedings of MP-TEAS 2024” will be published in two volumes of
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
      <div className="mt-4 w-full p-2">
        <div className=" h-1 rounded-xl bg-gradient-to-r from-white via-black to-white relative" />
        <p className="text-center my-4">
          <span className="font-semibold text-xl">
            Important Dates [ Deadlines ]
          </span>
        </p>
        <div className="flex flex-col gap-2">
          <table className=" text-xs md:text-xl text-center">
            <thead>
              <tr>
                <th>Subject</th>
                <th>Last Date</th>
                <th>Extended Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Manuscript Submission</td>
                <td className="font-semibold p-1">Sept 15, 2024</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Notification of acceptance</td>
                <td className="font-semibold p-1">Oct 15, 2024</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Revised Submission</td>
                <td className="font-semibold p-1">Oct 25, 2024</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Camera Ready Paper Due</td>
                <td className="font-semibold p-1">Oct 30, 2024 </td>
                <td>-</td>
              </tr>
              <tr>
                <td>Last Date of Registration(Early Birds)</td>
                <td className="font-semibold p-1">Oct 30, 2024</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Last data of Registration</td>
                <td className="font-semibold p-1">Nov 10, 2024</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Description;
