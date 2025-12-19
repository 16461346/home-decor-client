import { Link, Navigate, NavLink, useLocation, useNavigate } from "react-router";
import toast from "react-hot-toast";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";
import useAuth from "../../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import { TbFidgetSpinner } from "react-icons/tb";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { saveUserOrUpdate } from "../../Utils";
import { useState } from "react";

const Login = () => {
  const { signIn, signInWithGoogle, loading, user, setLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state || "/";

  const [loginError, setLoginError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // 🔥 NEW STATES (design e kono impact nai)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (loading) return <LoadingSpinner />;
  if (user) return <Navigate to={from} replace />;

  // validation logic
  const validateInputs = (emailValue, passwordValue) => {
    if (!emailValue) return "Email is required";
    if (!passwordValue) return "Password is required";
    if (passwordValue.length < 6)
      return "Password must be at least 6 characters";
    return "";
  };

  // onChange handlers
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setLoginError(validateInputs(value, password));
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setLoginError(validateInputs(email, value));
  };

  // submit (আগের মতোই)
  const handleSubmit = async (event) => {
    event.preventDefault();

    const error = validateInputs(email, password);
    if (error) {
      setLoginError(error);
      return;
    }

    try {
      setLoginError("");
      const { user } = await signIn(email, password);

      await saveUserOrUpdate({
        name: user?.displayName,
        email: user?.email,
        image: user?.photoURL,
        role: "customer",
        createdAt: new Date().toISOString(),
      });

      toast.success("Login Successful");
      navigate(from, { replace: true });
    } catch (err) {
      setLoginError("Invalid email or password");
      setLoading(false);
    }
  };

  // google login
  const handleGoogleSignIn = async () => {
    try {
      setLoginError("");
      const { user } = await signInWithGoogle();

      await saveUserOrUpdate({
        name: user?.displayName,
        email: user?.email,
        image: user?.photoURL,
        role: "customer",
        createdAt: new Date().toISOString(),
      });

      toast.success("Login Successful");
      navigate(from, { replace: true });
    } catch (err) {
      setLoading(false);
      setLoginError(err?.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-200 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Log In</h1>
          <p className="text-sm text-gray-400">
            Sign in to access your account
          </p>
        </div>

        {/* 🔴 DESIGN একদম আগের মতো */}
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-primary bg-gray-200 text-gray-900"
                value={email}
                onChange={handleEmailChange}
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
              </div>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  autoComplete="current-password"
                  placeholder="*******"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-primary bg-gray-200 text-gray-900 pr-10"
                  value={password}
                  onChange={handlePasswordChange}
                />

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
            </div>
          </div>

          {loginError && (
            <p className="text-red-600 text-sm mt-1">{loginError}</p>
          )}

          <div className="space-y-3">
            <button
              type="submit"
              disabled={!!loginError}
              className={`bg-primary w-full rounded-md py-3 font-bold text-white flex items-center justify-center ${
                loginError ? "opacity-60 cursor-not-allowed" : ""
              }`}
            >
              {loading ? (
                <TbFidgetSpinner className="animate-spin" />
              ) : (
                "Continue"
              )}
            </button>

            <NavLink
              to="/"
              className="bg-secondary w-full rounded-md py-3 font-bold text-white flex items-center justify-center"
            >
              Continue without login
            </NavLink>
          </div>
        </form>

        {/* rest unchanged */}
        <div className="space-y-1">
          <button className="text-sm mt-3 font-semibold hover:underline text-green-800 cursor-pointer">
            Forgot password?
          </button>
        </div>

        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>

        <div
          onClick={handleGoogleSignIn}
          className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 rounded hover:bg-pink-200 cursor-pointer"
        >
          <FcGoogle size={32} />
          <p>Continue with Google</p>
        </div>

        <p className="px-6 text-sm text-center text-gray-400">
          Don&apos;t have an account yet?{" "}
          <Link
            state={from}
            to="/signup"
            className="hover:underline hover:text-primary font-bold text-gray-600"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
