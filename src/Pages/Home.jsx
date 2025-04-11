import React, { useEffect } from "react";

import AllProfileCards from "../Components/Home Page/allProfile-cards";

export default function Home() {
  useEffect(() => {
    document.title = "Home";
  });

  return (
    <>
      <AllProfileCards />
    </>
  );
}
