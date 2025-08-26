import React, { useContext, useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { toast, ToastContainer, Slide } from "react-toastify";
import { FaGoogle, FaApple, FaLock, FaEye, FaEyeSlash } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import Header from "../Shared/Header";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signIn, googleSignIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    e.target.email.value = "";
    e.target.password.value = "";
    signIn(email, password)
      .then(() => {
        navigate(location?.state ? location.state : "/");
      })
      .catch(() => {
        toast.error("Wrong Email or Password !", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Slide,
        });
      });
  };
  const handleGoogleLogin = () => {
    googleSignIn()
      .then(() => {
        navigate(location?.state ? location.state : "/");
      })
      .catch();
  };

  return (
    <>
      <Header/>
      <h1 className="text-2xl text-center mt-5 mb-2">Sign In</h1>
      <h1 className="text-sm text-center mb-8">
        Welcome back, you've been missed!
      </h1>

      {/* Google and Apple Sign In Div */}
      <div className="flex justify-between mb-8">
        <button className="btn  w-6/13" onClick={handleGoogleLogin}>
          {" "}
          <FaGoogle></FaGoogle> Login With Google
        </button>
        <button className="btn  w-6/13" onClick={handleGoogleLogin}>
          {" "}
          <FaApple /> Login With Apple
        </button>
      </div>

      <div className="flex items-center mb-8">
        <div className="flex-grow border-t border-black-300"></div>
        <span className="px-3  text-black-500">OR</span>
        <div className="flex-grow border-t border-black-300"></div>
      </div>

      {/* Input Field of email and password */}

      <form className="flex justify-center" onSubmit={handleLogin}>
        <div className="card bg-base-100 w-full">
          <fieldset className="fieldset">
            {/* Email Field  */}
            <label className="input input-bordered flex items-center gap-2 w-full">
              <MdAlternateEmail size={18} className="text-base-content/50" />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </label>

            {/* Password Field  */}

            <label className="input input-bordered flex items-center gap-2 mt-4 w-full">
              <FaLock size={16} className="text-base-content/50" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Your Password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="text-base-content/50 hover:text-primary"
              >
                {showPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
              </button>
            </label>

            <div className="flex justify-between items-center mb-2 mt-2">
              {/* Remember Me */}
              <label className="label">
                <input
                  type="checkbox"
                  className="checkbox rounded-none size-4"
                />
                <p className="text-black text-sm">Remember me</p>
              </label>

              {/* Forgot Password */}
              <Link
                to="/forgetpassword"
                className="text-black-500 hover:underline text-sm"
              >
                Forgot password?{" "}
              </Link>
            </div>

            <button className="btn mt-2 bg-blue-500 text-white mb-4">
              Sign In
            </button>
          </fieldset>

          <p>
            You haven't any account?{" "}
            <Link to="/signup">
              {" "}
              <button className="text-blue-500 font-bold">Sign Up.</button>
            </Link>{" "}
          </p>
        </div>
      </form>

      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Slide}
      />
    </>
  );
};

export default Login;
