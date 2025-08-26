import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { toast, ToastContainer, Slide } from "react-toastify";

import {
  FaGoogle,
  FaApple,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaRegCalendarDays,
} from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { RiUserSmileLine } from "react-icons/ri";
import Header from "../Shared/Header";

const setPlaceholder = (e) => {
  e.target.email.value = "";
  e.target.password.value = "";
  e.target.photoURL.value = "";
  e.target.name.value = "";
};
const Register = () => {
  const { createUser, googleSignIn } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const naviGate = useNavigate();

  // Sign Up with email password
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setPlaceholder(e);
    createUser(email, password)
      .then(() => {
        toast("Account Created Successfully!", {
          position: "top-right",
          autoClose: 700,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Slide,
        });
        setTimeout(() => {
          naviGate("/");
        }, 1000);
      })
      .catch();
  };

  // Sign Up with Google
  const handleGoogleLogin = () => {
    googleSignIn()
      .then(() => {
        naviGate(location?.state ? location.state : "/");
      })
      .catch();
  };

  return (
    <div>
      <Header/>
      <h1 className="text-2xl text-center mt-5 mb-2">Getting Started</h1>
      <h1 className="text-sm text-center mb-8">
        Create an account to continue and connect with the people.
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

      <form className="flex justify-center" onSubmit={handleRegister}>
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

            {/* Name Field  */}
            <label className="input input-bordered flex items-center gap-2 mt-4 w-full">
              <RiUserSmileLine size={18} className="text-base-content/50" />
              <input type="text" name="name" placeholder="Your Name" required />
            </label>

            {/* Password Field  */}

            <label className="input input-bordered flex items-center gap-2 mt-4 w-full">
              <FaLock size={16} className="text-base-content/50" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Your password"
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

            {/* DOB Field  */}
            <label className="input input-bordered flex items-center gap-2 mt-4 w-full">
              <FaRegCalendarDays size={18} className="text-base-content/50" />
              <input
                type="text"
                name="dateOfBirth"
                placeholder="Date of Birth"
                required
              />
            </label>

            <label className="input input-bordered flex items-center gap-10 mt-4 w-full">
              <span className="text-2xl text-black">♂</span>

              {/* Male */}
              <span className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  className="radio size-4 border-3 border-gray-600"
                />
                <span className="flex items-center gap-1">
                  Male
                </span>
              </span>
 
              {/* Female */}
              <span className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  className="radio size-4 border-3 border-gray-600 "
                />
                <span className="flex items-center gap-1">
                  Female
                </span>
              </span>
            </label>

            <button className="btn mt-2 bg-blue-500 text-white mb-4">
              Sign Up
            </button>
          </fieldset>

          <p>
            Already have an account?{" "}
            <Link to="/signin">
              {" "}
              <button className="text-blue-500 font-bold">Sign In.</button>
            </Link>{" "}
          </p>
        </div>
      </form>

      <ToastContainer
        position="top-right"
        autoClose={700}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />
    </div>
  );
};

export default Register;
