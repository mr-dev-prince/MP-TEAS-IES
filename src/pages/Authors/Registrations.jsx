import React from "react";
import Carousel from "../../components/swiper/Carousel";
import { registrationData } from "../../constants/Options";
import paymentDetails from "../../assets/paymentDetails.jpeg"
import { Image } from "@chakra-ui/react";

const Registrations = () => {
  return (
    <div className="md:min-h-screen md:px-16 xl:px-32 px-5">
      <div className="mt-4">
        <h1 className="text-center font-bold font-serif text-2xl md:text-4xl ">
          Registrations for MP-TEAS 2024
        </h1>
        <div className="h-1 mt-2 rounded-xl bg-gradient-to-r from-white via-black to-white relative mb-5" />
        <Carousel />
      </div>
      <div className="flex flex-col justify-center items-center w-full">
        <p className="text-left font-semibold md:text-2xl w-full mt-4">
          Registration Fees Registration includes breakfast, lunch, dinner and
          tea/coffee on the days of conference.
        </p>
        <table className="md:w-full text-sm md:text-lg my-8 text-center" border="1">
          <thead>
            <tr>
              <th>Category</th>
              <th colSpan="2">Early Bird on or Before 10th Nov, 2024</th>
              <th colSpan="2">Regular After 10th Nov, 2024</th>
            </tr>
            <tr>
              <th></th>
              <th>Indian</th>
              <th>Foreigner</th>
              <th>Indian</th>
              <th>Foreigner</th>
            </tr>
          </thead>
          <tbody>
            {registrationData.map((item, index) => (
              <tr key={index}>
                <td>{item.category}</td>
                <td>{item.earlyBird.indian}</td>
                <td>{item.earlyBird.foreigner}</td>
                <td>{item.regular.indian}</td>
                <td>{item.regular.foreigner}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="my-4 list-disc px-4">
          <p className="pb-4 text-lg">Registration link: <a target="_blank" href="https://forms.gle/jHfmkTxzPnTCoXz16" className="text-blue-700 font-semibold animate-pulse hover:underline">Click here to register Now</a></p>
          <div className="py-4">
          <Image src={paymentDetails}/></div>
          <ul className="list-disc md:font-semibold md:text-lg space-y-2">
            <li>Fee inclusive of Service and other Taxes.</li>
            <li>
              Standard Paper size – 10 pages. (If exceeded, then Rs. 2000/- for
              Indian and USD 50 for Foreigner will be charged per extra page)
              Against every paper registration, at least one corresponding
              author from the paper must get registered.
            </li>
            <li>
              Other co-authors who wish to participate in the conference need to
              register themselves under the Participant Registration Category.
            </li>
            <li>
              Only the registered authors/participants will get the Certificates
              of participation.
            </li>
            <li>
              No Certificate will be provided to the unregistered co-authors,
              however, their names will be included in the publication as
              co-author(s)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Registrations;
