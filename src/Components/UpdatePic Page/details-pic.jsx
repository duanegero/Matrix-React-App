//iports from react
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { IoCloudUploadOutline } from "react-icons/io5";

import submitPicture from "./Helpers/submitPicture";
import buttonStyle from "../Styles/buttonStyle";

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
      <header className="flex justify-between items-center border-b-2 border-b-gray-400 bg-gray-200">
        <p className="flex items-center pl-4 font-rubikone text-3xl tracking-wider text-gray-400 pt-4 pb-4">
          <IoCloudUploadOutline />
          Upload
        </p>
      </header>
      <form
        className="pt-18 flex flex-col justify-center items-center bg-gray-100 border-b-2 border-gray-400"
        onSubmit={handleSubmit}
      >
        <label className="font-rubikone text-2xl text-gray-400 pb-14">
          Account Photo
        </label>
        <input
          type="file"
          name="image"
          onChange={handleFileChange}
          className="p-2 bg-transparent border-b-2 border-gray-300 shadow-2xl focus:outline-none focus:border-blue-500 mb-20"
        ></input>
        <div className="pb-30">
          <button className={buttonStyle()} type="submit">
            Upload
          </button>
        </div>
      </form>
    </div>
  );
}
