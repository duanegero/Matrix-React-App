//imports from React
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { TbLockPassword } from "react-icons/tb";
import buttonStyle from "../Styles/buttonStyle";

//import helper function
import sendResetPassword from "./Helpers/sendResetPassword";
import { supabase } from "../../supabaseClient";

export default function ResetForm() {
  //state variables to handle user input
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const code = queryParams.get("code");
  console.log("Recovery code from URL:", code);

  useEffect(() => {
    const exchangeRecoveryCode = async () => {
      if (code) {
        const { error } = await supabase.auth.exchangeCodeForSession(code);
        if (error) {
          setMessage("Reset link is invalid or expired.");
          console.error("Exchange error:", error.message);
        }
      }
    };

    exchangeRecoveryCode();
  }, [code]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    //if both passwords match call helper function
    if (password === confirmPassword) {
      await sendResetPassword(
        password,
        setPassword,
        setConfirmPassword,
        setMessage
      );
    } else {
      //else alert error and clear inputs
      alert("Passwords don't match!");
      setPassword("");
      setConfirmPassword("");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen mt-10">
      <div className="flex justify-center items-center pb-8 border-2 border-gray-500 w-110 pt-8 bg-gray-100 text-2xl font-semibold tracking-wider">
        <span className="text-blue-400 font-rubikone">Reset Password</span>
      </div>
      <form
        onSubmit={handleSubmit}
        className="relative w-110 border-2 border-gray-500 pt-10 bg-gray-50"
      >
        <div className="flex justify-center">
          <div className="flex flex-col items-start w-full max-w-xs space-y-1 pb-10">
            <label className="font-rubikone font-semibold tracking-widest pt-4">
              NEW PASSWORD
            </label>
            <div className="flex items-center w-full border-b-2 border-gray-300 focus-within:border-black">
              <TbLockPassword className="text-gray-500 mr-3 text-2xl" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full focus:outline-none focus:ring-0"
              ></input>
            </div>
            <label className="font-rubikone font-semibold tracking-widest pt-4">
              CONFIRM PASSWORD
            </label>
            <div className="flex items-center w-full border-b-2 border-gray-300 focus-within:border-black">
              <TbLockPassword className="text-gray-500 mr-3 text-2xl" />
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full focus:outline-none focus:ring-0"
              ></input>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mb-10">
          <button className={buttonStyle()} type="submit">
            Reset Password
          </button>
        </div>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
