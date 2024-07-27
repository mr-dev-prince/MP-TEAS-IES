import React from "react";
import Banner from "../../components/fragments/Banner";

const AboutMpTeas = () => {
  return (
    <div className="md:min-h-screen md:px-16">
      <div className="flex flex-col gap-4 md:my-3 my-2">
        <div>
          <p className="md:text-5xl text-2xl font-serif font-bold text-center">
            About MP-TEAS
          </p>
          <div className=" h-1 rounded-xl bg-gradient-to-r from-white via-black to-white relative" />
        </div>
        <div className="px-4 md:px-0">
        <Banner /></div>
        <div className="px-5 text-lg flex flex-col gap-3 text-justify">
          <p>
            This conference i.e.
            <span className="font-bold md:font-medium mx-1">
              Modern Practises and Trends in Expert Applications and Security
              abbreviated as MP-TEAS 2024
            </span>
            , will take place in Bhopal, Madhya Pradesh, India.
          </p>
          <p>
            In order to build intelligent ICT systems and pursue machine
            learning applications for contents, platforms, networks, and
            devices, the conference encourages their translation into real-world
            applications, and presentations of new developments and research
            findings in the fields of computer science, engineering
            applications, and the security of the Expert Applications.
          </p>
          <p>
            MP-TEAS 2024 aims to provide an opportunistic forum and vibrant
            platform for researchers and industry practitioners to build
            business or research relationships, find global partners for future
            collaboration on emerging issues, and share state-of-the-art
            knowledge gained from their original research work and practical
            developments on specific new challenges, applications, and
            experiences.
          </p>
          <p>
            The conference's "Expert Applications" theme will focus on the most
            recent advancements in research and the application of expert
            systems, with a particular focus on the part that these advancements
            play in upholding academic standards while disseminating
            cutting-edge discoveries in the fields of computer system security
            using cryptographic algorithms and other security schemes for system
            as well as for cloud. We are seeking for unique entries that have
            never been published and aren't currently being considered by any
            other journals or conferences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMpTeas;
