import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../Components/Login Page/login-form";
import naviageHome from "../Components/Home Page/Helpers/navigateHome";
import { FaHome } from "react-icons/fa";

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
        className="absolute top-5 right-5 flex items-center text-2xl p-3 font-rubikone text-gray-800 hover:text-white cursor-pointer"
        onClick={() => naviageHome(navigate)}
      >
        <FaHome className="mr-2" />
        Home
      </button>
      <LoginForm />
    </>
  );
}
