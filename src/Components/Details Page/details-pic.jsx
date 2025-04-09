//iports from react
import { useState } from "react";
import { useLocation } from "react-router-dom";

import submitPicture from "./Helpers/submitPicture";

export default function DetailsPic() {
  //state variables yo handle image upload
  const [selectedDetailsPic, setSelectedDetailsPic] = useState(null);

  //variable to handle location import
  const location = useLocation();
  //variable to handle url serarch
  const queryParams = new URLSearchParams(location.search);
  //variable to handle id from url
  const studentId = queryParams.get("id");

  //defining a function to handle file change
  const handleFileChange = (e) => {
    //variable to handle file
    const file = e.target.files[0];
    //if file uploaded set state variable
    if (file) {
      setSelectedDetailsPic(file);
    }
  };

  //defining a function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    //if no file or id alert user
    if (!selectedDetailsPic || !studentId) {
      alert("No file selected or no ID.");
      return;
    }

    //varaible to handle helper function
    const result = await submitPicture(selectedDetailsPic, studentId);

    //if success log url and clear input
    if (result.success) {
      console.log(result);
      console.log("Image Url:", result.url);
      setSelectedDetailsPic(null);
    } else {
      alert("Failed to upload picture: " + result.error);
      console.error("Upload error:", result.error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Upload Profile Picture</label>
        <input type="file" name="image" onChange={handleFileChange}></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
