//imports from React
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabaseClient";

//importing helper function
import submitUserLogin from "./Helpers/submitUserLogin";
import navigateSignUpPage from "../SignUp Page/Helpers/navigateSignUpPage";
import buttonStyle from "../Styles/buttonStyle";

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
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      <button
        className={buttonStyle()}
        onClick={() => navigateSignUpPage(navigate)}
      >
        signUp
      </button>
      <form
        onSubmit={handleSubmit}
        className="relative w-96 border-2 rounded-4xl shadow-2xl p-30 "
      >
        <div>
          <p>Login</p>
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <button className={buttonStyle()} type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
}
