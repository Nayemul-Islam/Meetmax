import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import { MdAlternateEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import Header from "../Shared/Header";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("✅ Password reset email sent! Check your inbox.");
    } catch (error) {
      setMessage("❌ " + error.message);
    }
  };

  return (
    <>
      <Header />
      <div className="card bg-base-100 w-full mt-10">
        <h2 className="text-xl font-bold text-center mb-2">Forgot Password?</h2>
        <h2 className="text-center">
          Enter your details to receive a rest link
        </h2>

        <label className="input input-bordered flex items-center gap-2 w-full mt-10">
          <MdAlternateEmail size={18} className="text-base-content/50" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            required
          />
        </label>

        <button
          onClick={handleReset}
          className="btn mt-5 bg-blue-500 text-white"
        >
          Send
        </button>

        {message && (
          <p className="mt-3 text-center text-sm text-gray-700">{message}</p>
        )}
        <button className="mt-3 text-blue-500">
          {" "}
          <Link to="/signin"> {"< "} Back to Sign In</Link>
        </button>
      </div>
    </>
  );
};
export default ForgotPassword;
