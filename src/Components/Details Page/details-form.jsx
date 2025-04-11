//imports from React
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { supabase } from "../../supabaseClient";
import { FaUserEdit } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

//import helpers
import submitUserDetails from "./Helpers/submitUserDetails";
import navigateProfilePage from "../Profile Page/Helpers/navigateProfilePage";
import buttonStyle from "../Styles/buttonStyle";

export default function DetailsForm() {
  //state variables to handle user data
  const [bio, setBio] = useState("");
  const [completionYear, setCompletionYear] = useState("");
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [githubUrl, setGithubUrl] = useState("");

  //variable to handle location import
  const location = useLocation();
  //variable to handle url serarch
  const queryParams = new URLSearchParams(location.search);
  //variable to handle id from url
  const studentId = queryParams.get("id");
  //variable to handle navigation
  const navigate = useNavigate();

  useEffect(() => {
    //async function to check if user is in a session
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      //if no session, redirect to login
      if (!session) {
        navigate("/", { replace: true });
        return;
      }
    };
    //call function
    checkSession();
  }, [studentId, navigate]);

  //variable to handle form submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    //call herlper function with passed in variables
    submitUserDetails(
      studentId,
      bio,
      completionYear,
      linkedinUrl,
      githubUrl,
      setBio,
      setCompletionYear,
      setLinkedinUrl,
      setGithubUrl,
      navigate
    );
  };

  return (
    <div>
      <header className="flex justify-between items-center border-b-2 border-b-gray-400 bg-gray-200">
        <p className="flex items-center pl-4 font-rubikone text-3xl tracking-tighter text-gray-400 pt-4 pb-4">
          <FaUserEdit className="text-3xl text-gray-400" />
          EDIT
        </p>
        <button
          onClick={() => navigateProfilePage(studentId, navigate)}
          className="flex items-center text-2xl p-3 font-rubikone text-gray-400 hover:text-blue-400 cursor-pointer"
        >
          <CgProfile />
          Profile
        </button>
      </header>
      <div className=" bg-gray-100 pt-6">
        <p className="flex justify-center items-center font-rubik text-gray-500">
          Update your profile with the latest information by editing one or more
          fields below.
        </p>
      </div>
      <form
        className="justify-center items-center grid grid-cols-2 gap-y-18 gap-x-12 p-4 pt-10 pb-26 bg-gray-100"
        onSubmit={handleSubmit}
        id="profileForm"
      >
        <div className="flex flex-col">
          <label className="font-rubikone text-2xl text-gray-400">Bio</label>
          <textarea
            rows="6"
            className="mt-2 p-3 border-2 border-gray-300 rounded-md bg-gray-100 hover:bg-white focus:outline-none focus:ring focus:ring-blue-400 text-lg font-rubik text-gray-600 tracking-wide shadow-2xl"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          ></textarea>
        </div>
        <div className="flex flex-col">
          <label className="font-rubikone text-2xl text-gray-400">
            Completion Date
          </label>
          <input
            type="date"
            className="p-2 bg-transparent border-b-2 border-gray-300 shadow-2xl focus:outline-none focus:border-blue-500"
            value={completionYear}
            onChange={(e) => setCompletionYear(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label className="font-rubikone text-2xl text-gray-400">
            Linkedin
          </label>
          <input
            type="url"
            className="p-2 bg-transparent border-b-2 border-gray-300 shadow-2xl focus:outline-none focus:border-blue-500"
            value={linkedinUrl}
            onChange={(e) => setLinkedinUrl(e.target.value)}
            placeholder="URL"
          ></input>
        </div>
        <div className="flex flex-col">
          <label className="font-rubikone text-2xl text-gray-400">GitHub</label>
          <input
            type="url"
            className="p-2 bg-transparent border-b-2 border-gray-300 shadow-2xl focus:outline-none focus:border-blue-500"
            value={githubUrl}
            onChange={(e) => setGithubUrl(e.target.value)}
            placeholder="URL"
          ></input>
        </div>
      </form>
      <div className="flex justify-center items-center bg-gray-100 pb-20 border-b-2 border-gray-400">
        <button form="profileForm" className={buttonStyle()} type="submit">
          Submit
        </button>
      </div>
    </div>
  );
}
