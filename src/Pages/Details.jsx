import React, { useEffect } from "react";

import DetailsForm from "../Components/Details Page/details-form";
import DetailsPic from "../Components/Details Page/details-pic";

export default function Details() {
  useEffect(() => {
    document.title = "Details";
  });

  return (
    <>
      <DetailsForm />
      <DetailsPic />
    </>
  );
}
