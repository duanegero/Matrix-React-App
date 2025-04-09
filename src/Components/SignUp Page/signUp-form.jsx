//imports from React
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//import helper function
import submitUserSignUp from "./Helpers/submitUserSignUp";
import buttonStyle from "../Styles/buttonStyle";

export default function SignUpForm() {
  //state variable to handle user input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

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
    <div className="flex flex-col justify-center items-center border-2 p-4">
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
        ></input>
        <label>Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          required
        ></input>
        <label>Firstname</label>
        <input
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
          type="text"
          required
        ></input>
        <label>Lastname</label>
        <input
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          type="text"
          required
        ></input>
        <label>Date Of Birth</label>
        <input
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
          type="date"
          required
        ></input>
        <button className={buttonStyle()} type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}
