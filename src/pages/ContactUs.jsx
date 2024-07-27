import React from "react";

const ContactUs = () => {
  return (
    <div className="md:px-16 px-5 my-5">
      <div>
        <p className="md:text-5xl text-2xl text-center font-serif font-bold ">
          Contact Us
        </p>
        <div className=" h-1 mt-2 rounded-xl bg-gradient-to-r from-white via-black to-white relative" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="py-4">
          <p className="text-xl font-semibold">
            “International Conference on Modern Practices and Trends in Expert
            Applications Security2024" at IES University, Bhopal 22nd 24th
            Nov2024
          </p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.5807350211144!2d77.32249907577314!3d23.185497510227737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c5c59828828f7%3A0x8bde4c9b369cfe2f!2sIES%20University%2C%20Bhopal!5e0!3m2!1sen!2sin!4v1722105182294!5m2!1sen!2sin"
          frameborder="0"
          className="w-[90%] h-[300px] md:h-[400px] mt-4"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
