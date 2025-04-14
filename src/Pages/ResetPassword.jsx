//imports from React
import React, { useEffect } from "react";

import ResetForm from "../Components/ResetPassword Page/reset-form";

export default function ResetPassword() {
  //useEffect to set the page title and background
  useEffect(() => {
    document.title = "Reset Password";

    document.body.classList.add("bg-blue-400");

    return () => {
      document.body.classList.remove("bg-blue-400");
    };
  });

  return (
    <>
      <ResetForm />
    </>
  );
}
