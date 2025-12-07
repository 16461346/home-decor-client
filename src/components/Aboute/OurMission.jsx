import React from "react";

const OurMission = () => {
  return (
    <div className=" my-30 px-20">
      <div className="flex flex-wrap gap-2 w-full mx-auto justify-center">
        <img
          className="rounded-l-full  w-100 object-cover"
          src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=870&auto=format&fit=crop"
          alt=""
        />
        <img
          className="rounded-r-full w-60 object-cover"
          src="https://images.unsplash.com/photo-1521316730702-829a8e30dfd0?q=80&w=870&auto=format&fit=crop"
          alt=""
        />
      </div>

      <div className="my-10">
        <h3 className="text-3xl font-bold">
          🏡 Our <span className="text-secondary">Mission</span>
        </h3>
        <div className="flex flex-col gap-2 py-4">
          <p className="bg-blue-300 py-2 px-4">
            At HomeDecor, our mission is to bring beauty, comfort, and
            personality to every home. We believe every space should reflect its
            owner’s unique taste while staying functional and modern.
          </p>
          <p className="bg-amber-200 py-2 px-4">
            From personalized consultations to on-site decoration, we aim to
            simplify the home styling process. Our team works closely with
            clients to ensure every corner shines with creativity and care.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
