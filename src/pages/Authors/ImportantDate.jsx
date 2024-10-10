import React from "react";
import Carousel from "../../components/swiper/Carousel";

const ImportantDate = () => {
  return (
    <div className="md:px-16 px-5 md:min-h-screen">
      <div className="mt-4">
        <h1 className="text-center font-bold font-serif text-2xl md:text-4xl">
          Important Dates
        </h1>
        <div className="h-1 mt-2 rounded-xl bg-gradient-to-r from-white via-black to-white relative" />
        <Carousel />
      </div>
      <div className="flex flex-col gap-2 my-4">
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
                <td className="font-semibold p-1">Oct 20, 2024</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Notification of acceptance</td>
                <td className="font-semibold p-1">Oct 25, 2024</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Revised Submission</td>
                <td className="font-semibold p-1">Oct 31, 2024</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Camera Ready Paper Due</td>
                <td className="font-semibold p-1">Nov 05, 2024 </td>
                <td>-</td>
              </tr>
              <tr>
                <td>Last Date of Registration(Early Birds)</td>
                <td className="font-semibold p-1">Nov 02, 2024</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Last date of Registration</td>
                <td className="font-semibold p-1">Nov 02, 2024</td>
                <td>-</td>
              </tr>
              <tr>
                <td className="text-red-500 font-semibold">Conference Dates</td>
                <td className="font-semibold p-1">Nov 22-24, 2024</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
  );
};

export default ImportantDate;
