import React from "react";
import Container from "../../components/Shared/Container";

const Contact = () => {
  return (
    <Container>
      {/* Contact Form Section */}
      <div className="text-center my-10 w-full md:w-2/3 lg:w-1/2 mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold">Contact Us</h2>

        <h3 className="text-xl md:text-2xl font-semibold mt-3">
          Any questions or remarks? Just write us a message!
        </h3>

        {/* Form Fields */}
        <div className="flex flex-col md:flex-row gap-5 items-center justify-center my-10">
          <fieldset className="w-full">
            <label className="text-left text-xl font-semibold block mb-1">
              Email
            </label>
            <input
              type="email"
              className="input w-full bg-emerald-100 border-0 rounded-2xl p-3"
              placeholder="Enter your email"
            />
          </fieldset>

          <fieldset className="w-full">
            <label className="text-left text-xl font-semibold block mb-1">
              Name
            </label>
            <input
              type="text"
              className="input w-full bg-emerald-100 border-0 rounded-2xl p-3"
              placeholder="Name here"
            />
          </fieldset>
        </div>

        {/* Submit Button */}
        <button className="btn tracking-widest text-xl font-bold text-white w-full bg-primary rounded-4xl py-3">
          Submit
        </button>
      </div>

      {/* Contact Info Section */}
      <div className="w-full bg-primary py-10 mt-20">
        <div className="bg-gray-300 w-11/12 md:w-10/12 mx-auto rounded-md shadow-md py-10 px-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            
            {/* About Club */}
            <div>
              <div className="w-20 h-20 bg-[#0E9BA4] mx-auto rounded-full flex items-center justify-center text-white text-4xl">
                🏃
              </div>
              <h3 className="text-xl font-bold mt-4 tracking-wide">
                ABOUT CLUB
              </h3>
              <p className="text-gray-700 mt-2">Running Guide</p>
              <p className="text-gray-700">Workouts</p>
            </div>

            {/* Phone */}
            <div>
              <div className="w-20 h-20 bg-[#0E9BA4] mx-auto rounded-full flex items-center justify-center text-white text-4xl">
                ☎️
              </div>
              <h3 className="text-xl font-bold mt-4 tracking-wide">
                PHONE (LANDLINE)
              </h3>
              <p className="text-gray-700 mt-2">+912 3 567 8987</p>
              <p className="text-gray-700">+912 5 252 3336</p>
            </div>

            {/* Office Location */}
            <div>
              <div className="w-20 h-20 bg-[#0E9BA4] mx-auto rounded-full flex items-center justify-center text-white text-4xl">
                📍
              </div>
              <h3 className="text-xl font-bold mt-4 tracking-wide">
                OUR OFFICE LOCATION
              </h3>
              <p className="text-gray-700 mt-2">
                The Interior Design Studio Company
              </p>
              <p className="text-gray-700">The Courtyard, Al Quoz 1</p>
              <p className="text-gray-700">Colorado, USA</p>
            </div>

          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
