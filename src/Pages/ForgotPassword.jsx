//imports from React
import React, { useEffect } from "react";

//importing form to display on page
import ForgotForm from "../Components/ForgotPassword Page/forgot-form";

export default function ForgotPassword() {
  //useEffect to set the page title and background
  useEffect(() => {
    document.title = "Forgot Password";

    document.body.classList.add("bg-blue-400");

    return () => {
      document.body.classList.remove("bg-blue-400");
    };
  });

  return (
    <>
      <ForgotForm />
    </>
  );
}
