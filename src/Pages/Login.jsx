import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../Components/Login Page/login-form";
import naviageHome from "../Components/Home Page/Helpers/navigateHome";

export default function Login() {
  useEffect(() => {
    document.title = "Login";

    document.body.classList.add("bg-blue-400");

    return () => {
      document.body.classList.remove("bg-blue-400");
    };
  });

  const navigate = useNavigate();

  return (
    <>
      <button
        className="absolute top-5 right-5 flex items-center text-2xl p-3 font-rubikone text-gray-400 hover:text-blue-400 cursor-pointer"
        onClick={() => naviageHome(navigate)}
      >
        Home
      </button>
      <LoginForm />
    </>
  );
}
