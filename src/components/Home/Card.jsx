import { Link } from "react-router";

const Card = ({ data }) => {
  return (
    <Link
      to={`/service/${data?.id}`}  
      className="col-span-1 cursor-pointer group shadow-xl p-3 rounded-xl"
    >
      <div className="flex flex-col gap-2 w-full">

        {/* Image */}
        <div
          className="
            aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
          "
        >
          <img
            className="
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            "
            src={data?.image || "https://i.ibb.co.com/rMHmQP2/money-plant-in-feng-shui-brings-luck.jpg"}
            alt={data?.name}
          />
        </div>

        {/* Title */}
        <div className="font-semibold text-lg">{data?.name}</div>

        {/* Category */}
        <div className="text-gray-600 font-medium">
          Category: {data?.category || "N/A"}
        </div>

        {/* Quantity */}
        <div className="text-gray-600 font-medium">
          Quantity: {data?.quantity || 0}
        </div>

        {/* Price */}
        <div className="flex flex-row items-center gap-1">
          <div className="font-semibold">Price: ${data?.price}</div>
        </div>

      </div>
    </Link>
  );
};

export default Card;
