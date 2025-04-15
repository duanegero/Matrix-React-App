//imports from React
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { VscSignIn } from "react-icons/vsc";

//import helper function
import submitUserSignUp from "./Helpers/submitUserSignUp";
import buttonStyle from "../Styles/buttonStyle";
import navigateLoginPage from "../Login Page/Helpers/navigateLoginPage";

export default function SignUpForm() {
  //state variable to handle user input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  //variable to handle navigation
  const navigate = useNavigate();

  //async function to handle form submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    //call helper function with passed in variables
    submitUserSignUp(
      email,
      password,
      firstname,
      lastname,
      dateOfBirth,
      setEmail,
      setPassword,
      setFirstname,
      setLastname,
      setDateOfBirth
    );
  };

  return (
    <div>
      <header className="flex justify-between items-center border-b-2 border-b-gray-400 bg-gray-200">
        <p className="flex items-center pl-4 font-rubikone text-3xl tracking-wider text-gray-400 pt-4 pb-4">
          Signup
        </p>
        <button
          onClick={() => navigateLoginPage(navigate)}
          className="flex items-center text-2xl p-3 font-rubikone text-gray-400 hover:text-blue-400 cursor-pointer"
        >
          <VscSignIn />
          Login
        </button>
      </header>
      <form
        id="signUpForm"
        className="justify-center items-center grid grid-cols-2 gap-y-18 gap-x-12 p-4 pt-10 pb-26 bg-gray-100"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col">
          <label className="font-rubikone text-2xl text-gray-400 tracking-wider">
            Email
          </label>
          <input
            className="p-2 bg-transparent border-b-2 border-gray-300 shadow-2xl focus:outline-none focus:border-blue-500 font-rubik text-gray-600 tracking-wide "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
          ></input>
        </div>
        <div className="flex flex-col">
          <label className="font-rubikone text-2xl text-gray-400 tracking-wider">
            Password
          </label>
          <input
            className="p-2 bg-transparent border-b-2 border-gray-300 shadow-2xl focus:outline-none focus:border-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
          ></input>
        </div>
        <div className="flex flex-col">
          <label className="font-rubikone text-2xl text-gray-400 tracking-wider">
            Firstname
          </label>
          <input
            className="p-2 bg-transparent border-b-2 border-gray-300 shadow-2xl focus:outline-none focus:border-blue-500 font-rubik text-gray-600 tracking-wide "
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            type="text"
            required
          ></input>
        </div>
        <div className="flex flex-col">
          <label className="font-rubikone text-2xl text-gray-400 tracking-wider">
            Lastname
          </label>
          <input
            className="p-2 bg-transparent border-b-2 border-gray-300 shadow-2xl focus:outline-none focus:border-blue-500 font-rubik text-gray-600 tracking-wide "
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            type="text"
            required
          ></input>
        </div>
        <div className="flex flex-col">
          <label className="font-rubikone text-2xl text-gray-400 tracking-wider">
            Date Of Birth
          </label>
          <input
            className="p-2 bg-transparent border-b-2 border-gray-300 shadow-2xl focus:outline-none focus:border-blue-500"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            type="date"
            required
          ></input>
        </div>
      </form>
      <div className="flex justify-center items-center bg-gray-100 pb-20 border-b-2 border-gray-400">
        <button form="signUpForm" className={buttonStyle()} type="submit">
          Join Today!
        </button>
      </div>
    </div>
  );
}
