import React, { useState } from "react";

const ConferenceItinerary = () => {
  const [day, setDay] = useState("1");

  return (
    <div className=" md:px-16 px-5 md:my-4 my-2 md:min-h-screen">
      <div className="w-full text-center">
        <p className="text-2xl font-semibold">
          MP-TEAS 2024 Conference Itinerary
        </p>
        <p className="mt-2 text-lg font-semibold">
          Venue: IES University, Bhopal
        </p>
      </div>
      <div className="flex justify-center items-center w-full h-24 gap-24">
        <div className="w-fit h-fit border-2 rounded-lg p-1 flex justify-center items-center  ">
          <button
            onClick={() => setDay("1")}
            className={`${
              day === "1"
                ? "bg-blue-600 text-white"
                : "bg-gray-300 text-blue-600"
            } px-24 py-3 rounded-l-lg  transition-all duration-150`}
          >
            Day 1 : 22nd November 2024
          </button>
          <button
            onClick={() => setDay("2")}
            className={`${
              day === "2"
                ? "bg-blue-600 text-white"
                : "bg-gray-300 text-blue-600"
            } px-24 py-3 rounded-r-lg transition-all duration-150`}
          >
            Day 2 : 23rd November 2024
          </button>
        </div>
      </div>
      <div>
        {day === "1" ? (
          <ConferenceItineraryTable itinerary={day1} />
        ) : (
          <ConferenceItineraryTable itinerary={day2} />
        )}
      </div>
      <div>
        {day === "1" ? (
          <PresentationSchedule schedule={schedule1} />
        ) : (
          <PresentationSchedule schedule={schedule2} />
        )}
      </div>
    </div>
  );
};

const ConferenceItineraryTable = ({ itinerary }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Time</th>
            <th className="border border-gray-300 px-4 py-2">Event</th>
            <th className="border border-gray-300 px-4 py-2">Details</th>
            <th className="border border-gray-300 px-4 py-2">
              Presentation Link
            </th>
          </tr>
        </thead>
        <tbody>
          {itinerary.map((item, index) => (
            <tr
              key={index}
              className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"}`}
            >
              <td className="border border-gray-300 px-4 py-2">{item.time}</td>
              <td className="border border-gray-300 px-4 py-2">{item.event}</td>
              <td className="border border-gray-300 px-4 py-2 whitespace-pre-wrap">
                {item.details}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    Link
                  </a>
                ) : (
                  "N/A"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const PresentationSchedule = ({ schedule }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold text-center mb-4">
        Presentation Schedule
      </h2>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">End Time</th>
            <th className="border border-gray-300 px-4 py-2">Paper ID</th>
            <th className="border border-gray-300 px-4 py-2">
              Corresponding Author
            </th>
            <th className="border border-gray-300 px-4 py-2">Session</th>
            <th className="border border-gray-300 px-4 py-2">Session Chair</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((item, index) => (
            <tr
              key={index}
              className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"}`}
            >
              <td className="border border-gray-300 px-4 py-2">
                {item.endTime}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {item.paperId}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {item.author}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {item.session}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {item.chair || "N/A"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const day1 = [
  {
    time: "10:00 - 11:00 AM",
    event: "Registrations",
    details: "",
    link: "",
  },
  {
    time: "11:00 AM - 11:30 AM",
    event: "Inaugural Ceremony",
    details:
      "Chairman Speech (10 Min)\nGuest of Honour Speak (5 Min)\nWelcome Address, Guest Introductions, and Opening Remarks.",
    link: "",
  },
  {
    time: "11:30 AM – 11:50 PM",
    event: "Keynote Address I",
    details: "Speaker: Prof. V. K. Tripathi, NITTTR, Bhopal.",
    link: "",
  },
  {
    time: "11:50 PM – 12:10 PM",
    event: "Keynote Address II",
    details: "Speaker: Prof. R. S. Salaria, Guru Nanak University, Hyderabad.",
    link: "",
  },
  {
    time: "12:10 PM - 12:30 PM",
    event: "Keynote Address IV",
    details: "Speaker: Prof. R. A. Patil, COEP Technological University.",
    link: "",
  },
  {
    time: "12:30 PM - 12:50 PM",
    event: "Keynote Address IV",
    details:
      "Speaker: Dr. Chandrahauns Chavan, Jamnalal Bajaj Institute of Management Studies (JBIMS).",
    link: "",
  },
  {
    time: "1:00 PM - 1:30 PM",
    event: "Keynote Address III",
    details: "Speaker: Dr. Catarina Moreira",
    link: "https://meet.google.com/egm-ptvk-rmu",
  },
  {
    time: "1:30 PM - 2:00 PM",
    event: "Lunch Break",
    details: "Networking opportunity for participants and dignitaries.",
    link: "",
  },
  {
    time: "2:00 PM - 3:00 PM",
    event: "Technical Session I (Online)",
    details: "Paper Presentations and Discussions.",
    link: "https://meet.google.com/qai-xnwe-kcn",
  },
  {
    time: "2:00 PM - 3:00 PM",
    event: "Technical Session II (Online)",
    details: "Paper Presentations and Discussions.",
    link: "https://meet.google.com/veg-rbqd-rvd",
  },
  {
    time: "3:00 PM - 3:15 PM",
    event: "Tea Break",
    details: "Refreshments for all attendees.",
    link: "",
  },
  {
    time: "3:15 PM - 3:45 PM",
    event: "Keynote Address V",
    details: "Speaker: Sh. Raju L. Kanchibhotla, Khar Energy Optimisers.",
    link: "",
  },
  {
    time: "3:45 PM - 5:00 PM",
    event: "Technical Session III",
    details: "Paper Presentations and Discussions.",
    link: "https://meet.google.com/dsb-hcxe-obh",
  },
  {
    time: "3:45 PM - 5:00 PM",
    event: "Technical Session IV",
    details: "Paper Presentations and Discussions.",
    link: "https://meet.google.com/wbi-dmtu-sma",
  },
];

const day2 = [
  {
    time: "11:00 AM - 11:30 AM",
    event: "Day 2 Opening Remarks",
    details: "Recap of Day 1 and introduction to Day 2.",
    link: "",
  },
  {
    time: "11:30 AM - 12:00 PM",
    event: "Keynote Address V",
    details: "Speaker: Dr. Sridaran Rajagopal, Marwadi University, Rajkot.",
    link: "https://meet.google.com/yjv-exjd-tmo",
  },
  {
    time: "12:00 PM - 12:30 PM",
    event: "Keynote Address VI",
    details: "Speaker: Dr. Sonali Vyas, UPES, Dehradun.",
    link: "https://meet.google.com/kih-jteq-sns",
  },
  {
    time: "12:30 PM - 1:00 PM",
    event: "Keynote Address VII",
    details: "Speaker: Dr. Nguyen Ha Huy Cuong, University of Danang, Vietnam.",
    link: "https://meet.google.com/pvt-oicd-aot",
  },
  {
    time: "1:00 PM - 1:30 PM",
    event: "Lunch Break",
    details: "Networking opportunity for attendees.",
    link: "",
  },
  {
    time: "1:30 PM - 2:00 PM",
    event: "Keynote Address VIII",
    details:
      "Speaker: Dr. Tanupriya Choudhry, Professor, Computer Science Department, UPES, Dehradun.",
    link: "https://meet.google.com/ooi-sqjv-wac",
  },
  {
    time: "2:00 PM - 3:00 PM",
    event: "Technical Session V",
    details: "Paper Presentations and Discussions.",
    link: "https://meet.google.com/uzs-bhzg-afj",
  },
  {
    time: "2:00 PM - 3:00 PM",
    event: "Technical Session VI",
    details: "Paper Presentations and Discussions.",
    link: "https://meet.google.com/mrf-dner-qdy",
  },
  {
    time: "3:00 PM - 3:15 PM",
    event: "Tea Break",
    details: "Refreshments for attendees.",
    link: "",
  },
  {
    time: "3:15 PM - 3:45 PM",
    event: "Keynote Address IX",
    details: "Speaker: Dr. Manju Vyas.",
    link: "https://meet.google.com/pgg-zayj-opv",
  },
  {
    time: "3:45 PM - 4:30 PM",
    event: "Technical Session VII",
    details: "Paper Presentations and Discussions.",
    link: "https://meet.google.com/dmj-hbaz-vgc",
  },
  {
    time: "3:45 PM - 4:30 PM",
    event: "Technical Session VIII",
    details: "Paper Presentations and Discussions.",
    link: "https://meet.google.com/tqf-zzry-ech",
  },
  {
    time: "4:30 PM - 5:00 PM",
    event: "Valedictory Session",
    details: "Closing Remarks, Certificate Distribution, and Feedback.",
    link: "",
  },
];

const schedule1 = [
  {
    endTime: "02:06 PM",
    paperId: 5,
    author: "Priyanka Bhatele",
    session: "Technical Session I",
    chair: "Sh. Raju L. Kanchibhotla",
  },
  {
    endTime: "02:12 PM",
    paperId: 10,
    author: "Sonali Vyas",
    session: "Technical Session I",
    chair: "",
  },
  {
    endTime: "02:18 PM",
    paperId: 14,
    author: "Devnarayan G Rao",
    session: "Technical Session I",
    chair: "",
  },
  {
    endTime: "02:24 PM",
    paperId: 15,
    author: "Bhupesh Kumar Dewangan",
    session: "Technical Session I",
    chair: "",
  },
  {
    endTime: "02:30 PM",
    paperId: 17,
    author: "Bhupesh Kumar Dewangan",
    session: "Technical Session I",
    chair: "",
  },
  {
    endTime: "02:36 PM",
    paperId: 18,
    author: "Bhupesh Kumar Dewangan",
    session: "Technical Session I",
    chair: "",
  },
  {
    endTime: "02:42 PM",
    paperId: 19,
    author: "Bhupesh Kumar Dewangan",
    session: "Technical Session I",
    chair: "",
  },
  {
    endTime: "02:48 PM",
    paperId: 22,
    author: "Vijay Singh Sen",
    session: "Technical Session I",
    chair: "",
  },
  {
    endTime: "02:54 PM",
    paperId: 31,
    author: "Umar Bashir",
    session: "Technical Session I",
    chair: "",
  },
  {
    endTime: "03:00 PM",
    paperId: 39,
    author: "Namrata Shrivastava",
    session: "Technical Session I",
    chair: "",
  },
  {
    endTime: "02:06 PM",
    paperId: 41,
    author: "Maitri Mukund Kulkarni",
    session: "Technical Session II",
    chair: "Prof. R. A. Patil, COEP",
  },
  {
    endTime: "02:12 PM",
    paperId: 46,
    author: "Abhishek Sharma",
    session: "Technical Session II",
    chair: "",
  },
  {
    endTime: "02:18 PM",
    paperId: 58,
    author: "Sarishma Dangi",
    session: "Technical Session II",
    chair: "",
  },
  {
    endTime: "02:24 PM",
    paperId: 60,
    author: "Dharmendra Sharma",
    session: "Technical Session II",
    chair: "",
  },
  {
    endTime: "02:30 PM",
    paperId: 61,
    author: "Pooja Vishwakarma",
    session: "Technical Session II",
    chair: "",
  },
  {
    endTime: "02:36 PM",
    paperId: 62,
    author: "Hemant Kumar",
    session: "Technical Session II",
    chair: "",
  },
  {
    endTime: "02:42 PM",
    paperId: 63,
    author: "Shaheen Ayyub",
    session: "Technical Session II",
    chair: "",
  },
  {
    endTime: "02:48 PM",
    paperId: 65,
    author: "Akshay Jain",
    session: "Technical Session II",
    chair: "",
  },
  {
    endTime: "02:54 PM",
    paperId: 66,
    author: "Jyotika Kaur",
    session: "Technical Session II",
    chair: "",
  },
  {
    endTime: "03:00 PM",
    paperId: 71,
    author: "Ketan Mallik",
    session: "Technical Session II",
    chair: "",
  },
  {
    endTime: "03:51 PM",
    paperId: 74,
    author: "Radhika Patel",
    session: "Technical Session III",
    chair: "Dr Chandrahauns Chavan",
  },
  {
    endTime: "03:57 PM",
    paperId: 414,
    author: "Kaushal Pravinbhai Patel",
    session: "Technical Session III",
    chair: "",
  },
  {
    endTime: "04:03 PM",
    paperId: 420,
    author: "Priyanshi Jain",
    session: "Technical Session III",
    chair: "",
  },
  {
    endTime: "04:09 PM",
    paperId: 422,
    author: "Jigisha Mrs. Trivedi",
    session: "Technical Session III",
    chair: "",
  },
  {
    endTime: "04:15 PM",
    paperId: 425,
    author: "Pragya Tewari",
    session: "Technical Session III",
    chair: "",
  },
  {
    endTime: "04:21 PM",
    paperId: 430,
    author: "Sumit Pundir",
    session: "Technical Session III",
    chair: "",
  },
  {
    endTime: "04:27 PM",
    paperId: 433,
    author: "Minakshi Sharma",
    session: "Technical Session III",
    chair: "",
  },
  {
    endTime: "03:51 PM",
    paperId: 435,
    author: "Dr. Sinthia P",
    session: "Technical Session IV",
    chair: "Prof. V. K. Tripathi, NITTTR",
  },
  {
    endTime: "03:57 PM",
    paperId: 436,
    author: "Paramjit Kour",
    session: "Technical Session IV",
    chair: "",
  },
  {
    endTime: "04:03 PM",
    paperId: 437,
    author: "Riya Sharma",
    session: "Technical Session IV",
    chair: "",
  },
  {
    endTime: "04:09 PM",
    paperId: 438,
    author: "Sonal Talreja",
    session: "Technical Session IV",
    chair: "",
  },
  {
    endTime: "04:15 PM",
    paperId: 440,
    author: "Riya Sharma",
    session: "Technical Session IV",
    chair: "",
  },
  {
    endTime: "04:21 PM",
    paperId: 441,
    author: "Roohi Naaz",
    session: "Technical Session IV",
    chair: "",
  },
  {
    endTime: "04:27 PM",
    paperId: 444,
    author: "Megha Raina",
    session: "Technical Session IV",
    chair: "",
  },
];

const schedule2 = [
  {
    endTime: "02:10 PM",
    paperId: 446,
    author: "Abhilasha Sinha",
    session: "Technical Session V",
    chair: "Prof. R. A. Patil",
  },
  {
    endTime: "02:20 PM",
    paperId: 447,
    author: "Sumit Pundir",
    session: "Technical Session V",
    chair: "",
  },
  {
    endTime: "02:30 PM",
    paperId: 448,
    author: "Gopirajan PV",
    session: "Technical Session V",
    chair: "",
  },
  {
    endTime: "02:40 PM",
    paperId: 450,
    author: "Kavita Kushwah",
    session: "Technical Session V",
    chair: "",
  },
  {
    endTime: "02:50 PM",
    paperId: 456,
    author: "Pramod Kumar Patel",
    session: "Technical Session V",
    chair: "",
  },
  {
    endTime: "02:10 PM",
    paperId: 478,
    author: "Sai Ganesh S",
    session: "Technical Session VI",
    chair: "Dr. Sridaran Rajagopal",
  },
  {
    endTime: "02:20 PM",
    paperId: 479,
    author: "Uma Rathore Bhatt",
    session: "Technical Session VI",
    chair: "",
  },
  {
    endTime: "02:30 PM",
    paperId: 481,
    author: "Devaraj Sambandan",
    session: "Technical Session VI",
    chair: "",
  },
  {
    endTime: "02:40 PM",
    paperId: 492,
    author: "Rani Sahu",
    session: "Technical Session VI",
    chair: "",
  },
  {
    endTime: "02:50 PM",
    paperId: 493,
    author: "Anu Mangal",
    session: "Technical Session VI",
    chair: "",
  },
  {
    endTime: "03:00 PM",
    paperId: 494,
    author: "Rajesh Rajaan",
    session: "Technical Session VI",
    chair: "",
  },
  {
    endTime: "03:55 PM",
    paperId: 495,
    author: "Mehaboob Mujawar",
    session: "Technical Session VII",
    chair: "Dr. Manju Vyas",
  },
  {
    endTime: "04:05 PM",
    paperId: 457,
    author: "Edwin Xorsenyo Amenu",
    session: "Technical Session VII",
    chair: "",
  },
  {
    endTime: "04:15 PM",
    paperId: 463,
    author: "Jose P",
    session: "Technical Session VII",
    chair: "",
  },
  {
    endTime: "04:25 PM",
    paperId: 465,
    author: "Niha Kamal Basha",
    session: "Technical Session VII",
    chair: "",
  },
  {
    endTime: "04:35 PM",
    paperId: 466,
    author: "Gopirajan PV",
    session: "Technical Session VII",
    chair: "",
  },
  {
    endTime: "05:00 PM",
    paperId: 468,
    author: "Shruti S",
    session: "Technical Session VII",
    chair: "",
  },
];

export default ConferenceItinerary;
