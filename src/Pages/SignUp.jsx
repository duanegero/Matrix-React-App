import React, { useEffect } from "react";
import SignUpForm from "../Components/SignUp Page/signUp-form";

export default function SignUp() {
  useEffect(() => {
    document.title = "Sign Up";
  });

  return (
    <>
      <SignUpForm />
    </>
  );
}
