import React from "react";
import manju from "../../assets/manju_vyas.png";
import Nguyen from "../../assets/Nguyen.png";
import rk from "../../assets/rajendra_kumar.jpg";
import RS from "../../assets/RS_Salaria.jpg";
import Rsri from "../../assets/RSridaran.jpg";
import sonal from "../../assets/sonal_vyas.jpg";
import tanu from "../../assets/Tanupriya.png";
import VK from "../../assets/tripathiVK.jpeg.jpg";
import chandraHauns from "../../assets/chandraHauns.png";
import cat from "../../assets/catareina.png";

const EminentSpeakers = () => {
  return (
    <div className="min-h-screen md:px-16 pb-10">
      <div className="mt-4">
        <p className="md:text-5xl text-2xl text-center font-serif font-bold">
          Eminent Speakers
        </p>
        <div className="h-1 mt-2 rounded-xl bg-gradient-to-r from-white via-black to-white relative" />
      </div>
      <div className="h-full w-full grid grid-cols-1 place-items-center  md:grid-cols-4 mt-6 gap-8">
        {speakers.map((i) => (
          <SpeakerCard
            key={i.id}
            image={i.image}
            name={i.name}
            description={i.description}
          />
        ))}
      </div>
    </div>
  );
};

const SpeakerCard = ({ image, name, description }) => {
  return (
    <div className="border w-[21rem] h-full p-2 rounded-lg border-blue-600 text-center">
      <img src={image} alt="" className="h-[20rem] w-[20rem] object-fill" />
      <div className="mt-3">
        <p className="font-bold mb-2">{name}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

const speakers = [
  {
    id: 1,
    image: VK,
    name: "Dr. Tripathi, V.K.",
    description: "Professor at NITTR Bhopal",
  },
  {
    id: 2,
    image: chandraHauns,
    name: "Dr. Chandrahauns Chavan",
    description:
      "Senior Professor in Management Studies, Director (2005-09 & 2015-18), Jamnalal Bajaj Institute of Management Studies (JBIMS), University of Mumbai",
  },
  {
    id: 3,
    image: tanu,
    name: "Dr. Tanupriya Choudhury",
    description: "UPES, Dehradun",
  },
  {
    id: 4,
    image: Rsri,
    name: "Prof.(Dr) R. Sridaran",
    description: "Dean, Faculty of Computer Applications, Marwadi University",
  },
  {
    id: 5,
    image: RS,
    name: "Prof R S Salaria",
    description:
      "Dean, University Institute of Computer Science & Application, Guru Nanak University, Hyderabad, Telangana",
  },
  {
    id: 6,
    image: Nguyen,
    name: "Dr. Nguyen Ha Huy Cuong",
    description:
      "Deputy Director, Software Development Center, University of Danang, Da Nang, Vietnam",
  },
  {
    id: 7,
    image: rk,
    name: "Prof. Rajendrakumar A. Patil",
    description: "Professor, College of Engineering Pune",
  },
  {
    id: 8,
    image: sonal,
    name: "Dr. Sonal Vyas",
    description: "Assistant Professor, UPES, Dehradun",
  },
  {
    id: 9,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQABqQIdskCD9BK0I81EbVfV9tTz320XvJ35A&s",
    name: "Sh. Raju L. Kanchibhotla",
    description: "CEO, Khar Energy Optimisers & E-Pariksha, Hyderabad",
  },
  {
    id: 10,
    image: cat,
    name: "Dr. Catarina Moreira",
    description:
      "Associate Professor, Machine Learning, Data Science Institute, University of Technology, Sydney, Australia",
  },
  {
    id: 11,
    image: manju,
    name: "Dr. Manju Vyas",
    description:
      "Associate Professor, Head of AI & DS Department, JECRC, Jaipur",
  },
];

export default EminentSpeakers;
