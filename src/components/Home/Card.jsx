import { Link } from "react-router";

const Card = ({ data }) => {
  return (
    <Link
      to={`/service/${data?.id}`}
      className="col-span-1 cursor-pointer group shadow-xl p-3 rounded-xl"
    >
      {/* <!-- component --> */}
      <div className="relative flex  w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
       <div className="relative mx-4 mt-4 overflow-hidden rounded-t-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 h-48 sm:h-56 md:h-64 lg:h-72">
          <img
            src={
              data?.image ||
              "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
            }
             className="w-full h-full object-cover"
            alt="ui/ux review check"
          />
        </div>
        <div className="p-6">
          <div className="mb-3 flex items-center justify-between">
            <h5 className="block font-bold font-sans text-xl leading-snug tracking-normal text-blue-gray-900 antialiased">
              {data?.name}{" "}
              <span className="text-green-700 text-xs border px-1 rounded-2xl">
                {data?.category || "N/A"}
              </span>
            </h5>
            <p className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="-mt-0.5 h-5 w-5 text-yellow-400"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              {data?.rating}
            </p>
          </div>
          <h3 className="font-bold text-xl">Cost : ${data?.cost}</h3>
          <p className="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
            {data?.description.split(" ").slice(0, 12).join(" ")}
            {data?.description.split(" ").length > 12 ? "..." : ""}
          </p>
        </div>
        <div className="p-6 pt-3">
          <button
            className="block w-full select-none rounded-lg bg-primary py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md  transition-all hover:shadow-lg  hover:text-black hover:shadow-cyan-200 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            Book Now
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Card;
