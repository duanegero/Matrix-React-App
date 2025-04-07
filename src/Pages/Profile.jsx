import React, { useEffect } from "react";

import ProfileCard from "../Components/Profile Page/profile-card";

export default function Profile() {
  useEffect(() => {
    document.title = "Profile";
  });

  return (
    <>
      <ProfileCard />
    </>
  );
}
