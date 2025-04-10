import React, { useEffect } from "react";

import DetailsPic from "../Components/UpdatePic Page/details-pic";

export default function UpdatePic() {
  useEffect(() => {
    document.title = "Update Profile Picture";
  });

  return (
    <>
      <DetailsPic />
    </>
  );
}
