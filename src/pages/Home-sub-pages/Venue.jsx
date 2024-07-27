import React from "react";

const Venue = () => {
  return (
    <div className="md:px-16 px-5 my-3">
      <div>
        <p className="md:text-5xl text-2xl text-center font-serif font-bold ">Venue</p>
        <div className=" h-1 mt-2 rounded-xl bg-gradient-to-r from-white via-black to-white relative" />
      </div>
      <div className="flex justify-center items-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.5807350211144!2d77.32249907577314!3d23.185497510227737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c5c59828828f7%3A0x8bde4c9b369cfe2f!2sIES%20University%2C%20Bhopal!5e0!3m2!1sen!2sin!4v1722105182294!5m2!1sen!2sin"
          frameborder="0"
          className="w-[90%] h-[300px] md:h-[400px] mt-4"
          loading="lazy"
        ></iframe>
      </div>
      <div className="md:px-16 mt-5 text-lg text-justify tracking-wide space-y-3">
        <p>
          Known as the{" "}
          <span className=" font-bold md:font-semibold"> City of Lakes</span>,
          Bhopal is the capital of Madhya Pradesh. Founded by Raja Bhoj, the
          city has many natural and artificial lakes and it is one of the
          greenest cities in the country.
        </p>
        <p>
          Bhopal has retained its old world charm despite industrialization,
          with the old part of the city being full of narrow alleyways and
          crammed markets, while the new part of the city is better planned and
          is full of parks and gardens.
        </p>
        <p>
          The city has been a place where Hindus and Muslims have coexisted
          harmoniously over the years and it is reflected in the cuisine too.
          Both vegetarian and non-vegetarian dishes are available here, but
          Bhopal’s spicy meat delicacies, especially the curries and kebabs, are
          a result of the Mughal influence. The vegetarian cuisine is mostly
          mildly spicy and has a distinct taste to it. It has direct flights
          from the major cities of India.
        </p>
        <p>
          For more details about IES University, visit
          <a
            className="px-2 text-blue-600 underline"
            href="http://www.iesuniversity.ac.in"
          >
            http://www.iesuniversity.ac.in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Venue;
