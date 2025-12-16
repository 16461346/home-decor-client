import { Link } from "react-router";

const Card = ({ data }) => {
  console.log(data);
  return (
    <Link
      to={`/service/${data?._id}`}
      className="col-span-1 cursor-pointer group shadow-xl p-3 rounded-xl"
    >
      <div className="relative pb-4 w-full rounded-xl  bg-base-100 bg-clip-border text-gray-700 shadow-lg hover:shadow-cyan-200">
        {/* IMAGE */}
        <div className="relative mx-4 mt-4 overflow-hidden rounded-t-xl bg-blue-gray-500 h-48 sm:h-56 md:h-64 lg:h-72">
          <img
            src={
              data?.image ||
              "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9"
            }
            className="w-full h-full object-cover"
            alt="ui/ux review check"
          />
        </div>

        {/* CONTENT */}
        <div className="p-6 flex flex-col flex-grow">
          <div className="mb-3 flex items-center justify-between">
            <h5 className="block font-bold text-xl text-blue-gray-900">
              {data?.name.split(" ").slice(0, 5).join(" ")}
              {data?.name.split(" ").length > 5 ? "..." : ""}

              <span className="text-green-700 text-xs border px-1 rounded-2xl ml-1">
                {data?.category || "N/A"}
              </span>
            </h5>

            <p className="flex items-center gap-1.5 text-blue-gray-900">
              ⭐ {data?.rattings}.0
            </p>
          </div>

          <h3 className="font-bold text-xl mb-2">Total Cost : ${data?.price}</h3>

          {/* DESCRIPTION — AUTO GROW SPACE */}
          <p className="text-base text-gray-700 flex-grow">
            {(data?.description || "")
              .replace(/\n/g, " ")
              .replace(/\s+/g, " ")
              .trim()
              .split(" ")
              .slice(0, 15)
              .join(" ")}
            ...
          </p>
        </div>

        {/* BUTTON — ALWAYS AT BOTTOM */}
        <div className="px-6 pt-3 mt-auto">
          <button
            className="block w-full rounded-lg bg-primary py-3.5 px-7 text-center font-bold uppercase text-white shadow-md  hover:text-black"
            type="button"
          >
            Detail's more
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Card;
