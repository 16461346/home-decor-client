import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import Swal from "sweetalert2";

const handleSuccess = (e) => {
  e.preventDefault()
  e.target.reset()
  Swal.fire({
    title: "Subscribe Success",
    icon: "success",
    draggable: true,
  });
};

const NewsLetter = () => {
  return (
    <div className="w-full flex justify-center py-16 bg-base-100">
      <div className="bg-white shadow-xl rounded-2xl max-w-xl w-full overflow-hidden text-center">
        {/* Full Width Image */}
        <img
          src="https://images.unsplash.com/photo-1637593992672-ed85a851fdc3?q=80&w=862&auto=format&fit=crop"
          alt="subscribe"
          className="w-full h-56 object-cover opacity-90"
        />

        {/* Text Section */}
        <div className="p-10">
          <h2 className="text-2xl font-extrabold text-primary mb-3">
            SUBSCRIBE
          </h2>

          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter and stay updated
          </p>

          {/* Input + Button */}
          <form onSubmit={handleSuccess}>
            <div className="flex items-center gap-2">
              <label className="input input-bordered flex items-center gap-2 w-full">
                <HiOutlineMail className="text-xl" />
                <input type="email" required className="grow" placeholder="Your email" />
              </label>

              <button
                className="btn btn-secondary px-6"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
