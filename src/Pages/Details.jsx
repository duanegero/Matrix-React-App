import React, { useEffect } from "react";

import DetailsForm from "../Components/Details Page/details-form";

export default function Details() {
  useEffect(() => {
    document.title = "Details";
  });

  return (
    <>
      <DetailsForm />
    </>
  );
}
