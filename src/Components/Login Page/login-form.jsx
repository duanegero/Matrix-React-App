//imports from React
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabaseClient";
import { FaUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";

//importing helper function
import submitUserLogin from "./Helpers/submitUserLogin";
import navigateSignUpPage from "../SignUp Page/Helpers/navigateSignUpPage";
import buttonStyle from "../Styles/buttonStyle";
import navigateForgotPasswordPage from "../ForgotPassword Page/Helpers/navigateForgotPassword";

//defining function
export default function LoginForm() {
  //creating use state variables to set and use
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //creating variable to have navigate
  const navigate = useNavigate();

  //use effect to check if user is already logged in
  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session) {
        console.log("Already signed in");
      }
    };
    checkUser();
  }, [navigate]);

  //async function to handle form submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    //helper function with passed in variables
    submitUserLogin(email, password, setEmail, setPassword, navigate);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen mt-10">
      <div className="flex justify-center items-center pb-8 border-2 border-gray-500 w-110 pt-8 bg-gray-100 text-2xl font-semibold tracking-wider">
        <FaUser className="text-gray-700 mr-3" />
        <span className="text-blue-400 font-rubikone">WELCOME BACK!</span>
      </div>
      <form
        onSubmit={handleSubmit}
        className="relative w-110 border-2 border-gray-500 pt-10 bg-gray-50"
      >
        <div className="flex justify-center">
          <div className="flex flex-col items-start w-full max-w-xs space-y-1 pb-10">
            <label className="font-rubikone font-semibold tracking-widest">
              EMAIL
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
            <label className="font-rubikone font-semibold tracking-widest pt-4">
              PASSWORD
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
          </div>
        </div>
        <div className="flex justify-center items-center mb-10">
          <button className={buttonStyle()} type="submit">
            Sign In
          </button>
        </div>
      </form>
      <div className="flex flex-row border-2 border-gray-500 w-110 pt-8 bg-gray-100">
        <div className="flex-1 flex justify-center mb-5 ">
          <button
            onClick={() => navigateSignUpPage(navigate)}
            className="font-rubik tracking-wider text-gray-600 hover:text-blue-400 cursor-pointer"
          >
            Don't have an account?
          </button>
        </div>

        <div
          onClick={() => navigateForgotPasswordPage(navigate)}
          className="flex-1 flex justify-center mb-5"
        >
          <button className="font-rubik tracking-wider text-gray-600 hover:text-blue-400 cursor-pointer">
            Forgot Password?
          </button>
        </div>
      </div>
    </div>
  );
}
