import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const ReviewCard = ({ reviewer }) => {
  const { userName, ratings, review, user_photoURL } = reviewer;

  return (
    <div className="relative border-2 max-w-xs mx-auto bg-base-200 rounded-xl shadow-xl p-6 pb-10 text-center">
      {/* Avatar */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2">
        <div className="w-20 mt-10 h-20 rounded-full border-4 border-primary bg-white overflow-hidden shadow-md">
          <img
            src={user_photoURL}
            alt={userName}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Quote Icon */}
      <FaQuoteLeft className="text-primary text-2xl mt-16 mx-auto" />

      {/* Name */}
      <h3 className="mt-3 font-bold text-lg">{userName}</h3>

      {/* Review */}
      <p className="text-sm text-gray-600 mt-2">{review}</p>

      {/* Rating */}
      <div className="flex justify-center mt-4">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={`text-xl ${
              i < Math.round(ratings) ? "text-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewCard;
