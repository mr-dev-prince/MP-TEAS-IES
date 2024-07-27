import React from "react";
import Carousel from "../../components/swiper/Carousel";

const ConferenceTracks = () => {
  return (
    <div className="md:px-16">
      <div className="mt-4">
        <h1 className="text-center font-bold font-serif text-2xl md:text-4xl">
          Conference Tracks
        </h1>
        <div className="h-1 mt-2 rounded-xl bg-gradient-to-r from-white via-black to-white relative" />
        <Carousel />
      </div>
      <div className="flex flex-col items-center mt-4">
        <p className="text-xl font-semibold">
          Conference Tracks The tracks of the conference include but not
          restricted to:
        </p>
        <div className="my-4">
          <table>
            <tbody className="text-lg font-semibold text-center">
              <tr>
                <td className="px-5 bg-blue-500">Track 1</td>
                <td className="py-2 px-3 bg-blue-300">
                  Expert Applications and Artificial Intelligence/Machine
                  Learning
                </td>
              </tr>
              <tr>
                <td className="px-5 bg-blue-500">Track 2</td>
                <td className="py-2 px-3 bg-blue-300">
                  Advance Web Technologies such as IoT, Big Data, Cloud
                  Computing in Expert Applications
                </td>
              </tr>
              <tr>
                <td className="px-5 bg-blue-500">Track 3</td>
                <td className="py-2 px-3 bg-blue-300">
                  Information and Cyber Security Threats and Solutions
                </td>
              </tr>
              <tr>
                <td className="px-5 bg-blue-500">Track 4</td>
                <td className="py-2 px-3 bg-blue-300">
                  Multimedia Applications in Forensics, Security & Intelligence
                </td>
              </tr>
              <tr>
                <td className="px-5 bg-blue-500">Track 5</td>
                <td className="py-2 px-3 bg-blue-300">
                  Advancements in App Development Track{" "}
                </td>
              </tr>
              <tr>
                <td className="px-5 bg-blue-500">Track 6</td>
                <td className="py-2 px-3 bg-blue-300">
                  Advancements in App Development Track{" "}
                </td>
              </tr>
              <tr>
                <td className="px-5 bg-blue-500">Track 7</td>
                <td className="py-2 px-3 bg-blue-300">
                  Social and Ethical Aspects in Expert Applications through
                  Applied Sciences
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ConferenceTracks;
