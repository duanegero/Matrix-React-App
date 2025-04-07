import React, { useEffect } from "react";
import LoginForm from "../Components/Login Page/login-form";

export default function Login() {
  useEffect(() => {
    document.title = "Login";
  });

  return (
    <>
      <LoginForm />
    </>
  );
}
