import { Link, useLocation, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
import { useForm } from "react-hook-form";
import { imageUpload, saveUserOrUpdate } from "../../Utils";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const SignUp = () => {
  const { createUser, updateUserProfile, signInWithGoogle, loading } =
    useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state || "/";
  const [showPassword, setShowPassword] = useState(false); // Password toggle

  //React Hook From
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { name, email, password, image } = data;

    const imageFile = image[0];

    try {
      const imageURL = await imageUpload(imageFile);

      //2. User Registration
      const result = await createUser(email, password);

      await saveUserOrUpdate({
        name,
        email,
        image: imageURL,
        role: "customer",
        createdAt: new Date(),
      });

      //3. Save username & profile photo
      await updateUserProfile(name, imageURL);
      console.log(result);

      navigate(from, { replace: true });
      toast.success("Signup Successful");
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };

  // Handle Google Signin
  const handleGoogleSignIn = async () => {
    try {
      //User Registration using google
      const { user } = await signInWithGoogle();

      await saveUserOrUpdate({
        name: user?.displayName,
        email: user?.email,
        image: user?.photoURL,
        role: "customer",
        createdAt: new Date().toISOString(),
      });

      navigate(from, { replace: true });
      navigate('/')
      toast.success("Signup Successful");
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div
        className="
  flex flex-col
  w-[95%]
  sm:w-[90%]
  md:w-[70%]
  lg:w-[40%]
  xl:w-[35%]
  my-20
  shadow-2xl
  rounded-md
  p-6
  sm:p-8
  md:p-10
  bg-gray-100
  text-gray-900
"
      >
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
          <p className="text-sm text-gray-400">Welcome to PlantNet</p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter name"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-primary bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 6,
                    message: "name must 6 carecter logn",
                  },
                  maxLength: 20,
                })}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
            {/* Image */}
            <div>
              <label
                htmlFor="image"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Profile Image
              </label>
              <input
                type="file"
                id="image"
                accept="image/*"
                className="block w-full text-sm text-gray-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-md file:border-0
      file:text-sm file:font-semibold
      file:bg-lime-50 file:text-primary
      hover:file:bg-lime-100
      bg-gray-100 border border-dashed border-fuchsia-600 rounded-md cursor-pointer
      focus:outline-none focus:ring-2 focus:ring-primary focus:border-lime-400
      py-2"
                {...register("image")}
              />
              <p className="mt-1 text-xs text-gray-500">
                PNG, JPG or JPEG (max 2MB)
              </p>
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter email"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-primary bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
                {...register("email", {
                  required: "Email must be required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm">
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  autoComplete="new-password"
                  placeholder="*******"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 
                 focus:outline-primary bg-gray-200 text-gray-900 pr-10"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                    maxLength: {
                      value: 20,
                      message: "Password must be less than 20 characters",
                    },
                    pattern: {
                      value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/,
                      message:
                        "Password must contain uppercase, lowercase and a number",
                    },
                  })}
                />

                {/* 👁 Show / Hide Icon */}
                <div
                  className="absolute right-3 top-2.5 text-gray-600 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <AiOutlineEyeInvisible size={20} />
                  ) : (
                    <AiOutlineEye size={20} />
                  )}
                </div>
              </div>

              {/* ❌ Error message */}
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="bg-primary font-bold w-full rounded-md py-3 text-white"
            >
              {loading ? (
                <TbFidgetSpinner className="animate-spin m-auto" />
              ) : (
                "Continue"
              )}
            </button>
          </div>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Signup with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <div
          onClick={handleGoogleSignIn}
          className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 bg-fuchsia-200 border-rounded cursor-pointer"
        >
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
        <p className="px-6 text-sm text-center text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="hover:underline hover:text-primary font-bold text-gray-700"
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default SignUp;
