import React from "react";
import Carousel from "../../components/swiper/Carousel";

const PaperCategories = () => {
  return (
    <div className="md:px-16 px-5 my-3">
      <div>
        <p className="md:text-5xl text-2xl text-center font-serif font-bold">Paper Categories</p>
        <div className="h-1 mt-2 rounded-xl bg-gradient-to-r from-white via-black to-white relative" />
        <Carousel/>
      </div>
      <div className="md:px-16 mt-5 text-lg text-justify tracking-wide space-y-3">
        <p className="font-semibold">Research Contributions:</p>
        <p>
          Submissions must not substantially duplicate work that any of the authors has published elsewhere or has submitted simultaneously to any other conference or workshop that has published proceedings. Maximum length for the paper is <strong>10 pages for full papers</strong>.
        </p>
        <p className="font-semibold">Student Contributions:</p>
        <p>
          Bachelors/Masters Students are encouraged to propose papers on ongoing research. Please add <strong>"(Student contribution)"</strong> to the title. Maximum length for the paper should be <strong>10 pages for student papers</strong>.
        </p>
        <p className="font-semibold">Industrial Contributions:</p>
        <p>
          Authors from industry and government enterprises are welcome to submit original papers that describe their experiences, challenges, and applications in Expert Applications & Solutions. Maximum length for the paper is <strong>10 pages</strong>.
        </p>
      </div>
    </div>
  );
};

export default PaperCategories;
