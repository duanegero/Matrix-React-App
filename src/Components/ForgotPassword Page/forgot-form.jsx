//imports from React
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import buttonStyle from "../Styles/buttonStyle";
import sendResetLink from "./Helpers/sendResetLink";

export default function ForgotForm() {
  //state variables to handle user data
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  //async function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    //call the helper with passed in variables
    await sendResetLink(email, setEmail, setMessage, navigate);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen mt-10">
      <div className="flex justify-center items-center pb-8 border-2 border-gray-500 w-110 pt-8 bg-gray-100 text-2xl font-semibold tracking-wider">
        <span className="text-blue-400 font-rubikone">Forgot Password</span>
      </div>
      <form
        onSubmit={handleSubmit}
        className="relative w-110 border-2 border-gray-500 pt-10 bg-gray-50"
      >
        <div className="flex justify-center">
          <div className="flex flex-col items-start w-full max-w-xs space-y-1 pb-10">
            <label className="font-rubikone font-semibold tracking-widest">
              Email
            </label>
            <div className="flex items-center w-full border-b-2 border-gray-300 focus-within:border-black">
              <MdOutlineEmail className="text-gray-500 mr-3 text-2xl" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full focus:outline-none focus:ring-0"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mb-10">
          <button className={buttonStyle()} type="submit">
            Send reset link
          </button>
        </div>
      </form>
      {message && (
        <p className="mt-5 font-rubik text-white text-xl tracking-wide">
          {message}
        </p>
      )}
    </div>
  );
}
