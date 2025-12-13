import React from "react";
import { FiUserPlus } from "react-icons/fi";
import Container from "../Shared/Container";
import { MdOutlineBuildCircle } from "react-icons/md";
import { FaCreditCard, FaRocket } from "react-icons/fa";

const HowItWork = () => {
  return (
    <Container>
      <section className="py-16 bg-base-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-base-content">
            <span className="text-secondary">How It</span> Works
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div
              data-aos="flip-left"
              className="p-4 text-center bg-base-200 rounded-2xl shadow hover:shadow-xl transition"
            >
              <FiUserPlus size={60} className="text-primary" />
              <div className="text-left mt-4">
                <h3 className="text-xl font-bold text-primary mb-2">
                  Sign Up
                </h3>
                <p className="text-sm text-base-content/70">
                  Create an account quickly and easily, then log in to the webpage!
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div
              data-aos="flip-left"
              className="p-4 text-center bg-base-200 rounded-2xl shadow hover:shadow-xl transition"
            >
              <MdOutlineBuildCircle size={60} className="text-primary" />
              <div className="text-left mt-4">
                <h3 className="text-xl font-bold text-primary mb-2">
                  Choose Service
                </h3>
                <p className="text-sm text-base-content/70">
                  Choose a service and then read its detailed description.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div
              data-aos="flip-left"
              className="p-4 text-center bg-base-200 rounded-2xl shadow hover:shadow-xl transition"
            >
              <FaCreditCard size={60} className="text-primary" />
              <div className="text-left mt-4">
                <h3 className="text-xl font-bold text-primary mb-2">
                  Make Payment
                </h3>
                <p className="text-sm text-base-content/70">
                  Pay securely and confirm your order.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div
              data-aos="flip-left"
              className="p-4 text-center bg-base-200 rounded-2xl shadow hover:shadow-xl transition"
            >
              <FaRocket size={60} className="text-primary" />
              <div className="text-left mt-4">
                <h3 className="text-xl font-bold text-primary mb-2">
                  Get Started
                </h3>
                <p className="text-sm text-base-content/70">
                  Start using the service and track your payments easily.
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
