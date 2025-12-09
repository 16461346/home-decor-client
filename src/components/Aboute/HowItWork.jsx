import React from "react";
import { FiUserPlus } from "react-icons/fi";
import Container from "../Shared/Container";
import { MdOutlineBuildCircle } from "react-icons/md";
import { FaCreditCard, FaRocket } from "react-icons/fa";

const HowItWork = () => {
  return (
    <Container>
      <section className="py-16 bg-[#FEF9F5]">
        <div className="max-w-6xl mx-auto ">
          <h2 className="text-3xl font-bold mb-8 ">
            <span className="text-secondary">How It</span> Works
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div  data-aos="flip-left" className="p-4 text-center  bg-gray-300 rounded-2xl shadow hover:shadow-lg transition">
              <FiUserPlus size={60} />
              <div className="text-left">
                <h3 className="text-xl text-left font-bold text-primary mb-2">
                  Sign Up
                </h3>
                <p className="text-sm text-gray-600">
                  Create an account quickly and easily. and Log in the webpage !
                </p>
              </div>
            </div>
            <div  data-aos="flip-left" className="p-4 text-center  bg-gray-300 rounded-2xl shadow hover:shadow-lg transition">
              <MdOutlineBuildCircle size={60} />
              <div className="text-left">
                <h3 className="text-xl text-left font-bold text-primary mb-2">
                  Choose Service
                </h3>
                <p className="text-sm text-gray-600">
                  Choose a service and then read this services details .
                </p>
              </div>
            </div>
            <div  data-aos="flip-left" className="p-4 text-center  bg-gray-300 rounded-2xl shadow hover:shadow-lg transition">
              <FaCreditCard size={60} />
              <div className="text-left">
                <h3 className="text-xl text-left font-bold text-primary mb-2">
                  Make Payment
                </h3>
                <p className="text-sm text-gray-600">
                  Then You must Pay securely and confirm your order.
                </p>
              </div>
            </div>
            <div  data-aos="flip-left" className="p-4 text-center  bg-gray-300 rounded-2xl shadow hover:shadow-lg transition">
              <FaRocket size={60} />
              <div className="text-left">
                <h3 className="text-xl text-left font-bold text-primary mb-2">
                  Get Started
                </h3>
                <p className="text-sm text-gray-600">
                  Start using the service and enjoy! and Traking your payments
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default HowItWork;
