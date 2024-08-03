import React from "react";
import Carousel from "../../components/swiper/Carousel";

const Proceedings = () => {
  return (
    <div className="md:px-16 px-5 my-3">
      <div>
        <p className="md:text-5xl text-2xl text-center font-serif font-bold">
          Proceedings
        </p>
        <div className="h-1 mt-2 rounded-xl bg-gradient-to-r from-white via-black to-white relative" />
        <Carousel />
      </div>
      <div className="md:px-16 mt-5 text-lg text-justify tracking-wide space-y-3">
        <span className="font-bold animate-pulse text-orange-400">
          [ Approval Under Process ]
        </span>
        <p>
          Articles submitted to the conference should report original,
          previously unpublished research results, experimental or theoretical
          offering novel research contributions in any aspect of Engineering,
          Applications & Security and must not be under consideration for
          publication elsewhere. English is the official language of the
          conference; the paper should be written and presented only in English.
        </p>
        <p>
          Submissions will be <strong>double blind peer reviewed</strong> and
          evaluated based on originality, technical and/ or research
          content/depth, correctness, relevance to conference, contributions,
          and readability. The full paper submissions will be chosen based on
          technical merit, interest, applicability and how well they fit a
          coherent and balanced technical program.
        </p>
        <p>
          <strong>“Proceedings of MP-TEAS 2024”</strong> will be published in
          two volumes of{" "}
          <strong>
            Springer Nature's Scopus/SCI indexed book series “Lecture Notes in
            Networks and Systems”
          </strong>{" "}
          (
          <a
            href="https://www.springer.com/series/15179"
            className="text-blue-500"
          >
            https://www.springer.com/series/15179
          </a>
          ).
        </p>
        <p>
          The LNNS Series of Springer Nature is indexed in{" "}
          <strong>
            SCOPUS, SCImago INSPEC, WTI Frankfurt eG, zbMATH, DBLP, Google
            Scholar
          </strong>{" "}
          and <strong>Springer link</strong>, and this is also indexed by{" "}
          <strong>UGC Care</strong>.
        </p>
      </div>
    </div>
  );
};

export default Proceedings;
