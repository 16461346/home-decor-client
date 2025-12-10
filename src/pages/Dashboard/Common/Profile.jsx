import useAuth from "../../../hooks/useAuth";

const coverImg =
  "https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="flex  justify-center items-center h-screen">
     <div className="bg-white  rounded-2xl md:w-4/5 lg:w-3/8
                shadow-lg ">
        <img
          alt="cover photo"
          src={coverImg}
          className="w-full mb-4 rounded-lg  h-56"
        />
        <div className="flex flex-col items-center justify-center p-4 -mt-16">
          <a href="#" className="relative block">
            <img
              alt="profile"
              src={user?.photoURL}
              className="mx-auto object-cover rounded-full h-24 w-24  border-2 border-white "
            />
          </a>

          {/* <p className="p-2 px-4 text-xs text-white bg-primary rounded-full">
            Customer
          </p> */}
          <p className="mt-2 text-xl font-medium text-gray-800 ">
            User Id: {user?.uid}
          </p>
          <div className="w-full p-2 mt-4 rounded-lg">
            <div className="flex flex-wrap items-center justify-between text-sm text-gray-600 ">
              <div>
                <h2 className="text-xl font-bold">
                  Name :{" "}
                  <span className="font-normal text-gray-600 ">
                    {user?.displayName}
                  </span>
                </h2>
                <h2 className="text-xl font-bold">
                  Email :{" "}
                  <span className="font-bold text-red-400 ">
                    {user?.email}
                  </span>
                </h2>
                <h2 className="text-xl font-bold">
                  Role :{" "}
                  <span className=" text-secondary font-bold  ">
                    Customer
                  </span>
                </h2>

              </div>

              <div className="flex  gap-4 mt-4 w-full">
                <button
                  className="w-full h-12 bg-primary  text-gray-700 rounded-lg font-semibold  hover:text-white
                     hover:bg-blue-500 hover:scale-105 transform transition duration-300 ease-in-out"
                >
                  Profile update
                </button>
                <button
                  className="w-full h-12 bg-primary  text-gray-700 rounded-lg font-semibold  hover:text-white
                     hover:bg-blue-500 hover:scale-105 transform transition duration-300 ease-in-out"
                >
                  Change password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
