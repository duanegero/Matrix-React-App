import React, { useEffect } from "react";
import LoginForm from "../Components/Login Page/login-form";

export default function Login() {
  useEffect(() => {
    document.title = "Login";

    document.body.classList.add("bg-blue-400");

    return () => {
      document.body.classList.remove("bg-blue-400");
    };
  });

  return (
    <>
      <LoginForm />
    </>
  );
}
