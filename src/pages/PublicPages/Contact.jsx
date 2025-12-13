import React from "react";
import Container from "../../components/Shared/Container";
import { FaFacebookMessenger, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <Container>

      {/* Contact Form Section */}
      <div
        data-aos="fade-up"
        data-aos-duration="900"
        className="text-center my-10 w-full md:w-2/3 lg:w-1/2 mx-auto px-4"
      >
        <h2
          data-aos="zoom-in"
          data-aos-duration="900"
          className="text-4xl md:text-5xl font-extrabold text-base-content"
        >
          Contact Us
        </h2>

        <h3
          data-aos="fade-up"
          data-aos-duration="900"
          className="text-xl md:text-2xl font-semibold mt-3 text-base-content"
        >
          Any questions or remarks? Just write us a message!
        </h3>

        {/* Form Fields */}
        <div className="flex flex-col md:flex-row gap-5 items-center justify-center my-10">
          
          <fieldset
            data-aos="fade-right"
            data-aos-duration="1000"
            className="w-full"
          >
            <label className="text-left text-xl font-semibold block mb-1 text-base-content">
              Email
            </label>
            <input
              type="email"
              className="input w-full bg-base-200 border-0 rounded-2xl p-3 text-base-content"
              placeholder="Enter your email"
            />
          </fieldset>

          <fieldset
            data-aos="fade-left"
            data-aos-duration="1000"
            className="w-full"
          >
            <label className="text-left text-xl font-semibold block mb-1 text-base-content">
              Name
            </label>
            <input
              type="text"
              className="input w-full bg-base-200 border-0 rounded-2xl p-3 text-base-content"
              placeholder="Name here"
            />
          </fieldset>
        </div>

        {/* Submit Button */}
        <button
          data-aos="zoom-in"
          data-aos-duration="900"
          className="btn tracking-widest text-xl font-bold w-full bg-primary text-primary-content rounded-4xl py-3"
        >
          Submit
        </button>
      </div>

      {/* Contact Info Section */}
      <div
        data-aos="fade-up"
        data-aos-duration="900"
        className="w-full bg-primary-content py-10 mt-20"
      >
        <div className="bg-base-200 w-11/12 md:w-10/12 mx-auto rounded-md shadow-md py-10 px-5 text-base-content">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

            {/* About Club */}
            <div data-aos="flip-left" data-aos-duration="1000">
              <div className="w-20 h-20 bg-primary mx-auto rounded-full flex items-center justify-center text-white text-4xl">
               <FiSend className="text-red-500"/>
              </div>
              <h3 className="text-xl font-bold mt-4 tracking-wide">Send Message</h3>
              <div className="flex mt-2 gap-4 items-center justify-center"><FaWhatsapp className="text-green-600" size={40} />
              <FaFacebookMessenger className="text-[#0084FF]" size={40} /><FaInstagram size={40} className="text-[#df195b]" /></div>
            </div>

            {/* Phone */}
            <div data-aos="flip-up" data-aos-duration="1000">
              <div className="w-20 h-20 bg-primary mx-auto rounded-full flex items-center justify-center text-white text-4xl">
                ☎️
              </div>
              <h3 className="text-xl font-bold mt-4 tracking-wide">PHONE (LANDLINE)</h3>
              <p className="mt-2"> +912 3 567 8987</p>
              <p>+912 5 252 3336</p>
            </div>

            {/* Office Location */}
            <div data-aos="flip-right" data-aos-duration="1000">
              <div className="w-20 h-20 bg-primary mx-auto rounded-full flex items-center justify-center text-white text-4xl">
                📍
              </div>
              <h3 className="text-xl font-bold mt-4 tracking-wide">OUR OFFICE LOCATION</h3>
              <p className="mt-2">The Interior Design Studio Company</p>
              <p>The Courtyard, Al Quoz 1</p>
              <p>Colorado, USA</p>
            </div>

          </div>
        </div>
      </div>

    </Container>
  );
};

export default Contact;
