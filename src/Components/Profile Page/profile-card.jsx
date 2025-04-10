//imports from React
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { MdEdit } from "react-icons/md";
import { VscSignOut } from "react-icons/vsc";

import dayjs from "dayjs";

//import helper function
import fetchUserDetails from "./Helpers/fetchUserDetails";
import navigateDetailsPage from "../Details Page/Helpers/navigateDetailsPage";
import handleLogout from "../handleLogout";
import { supabase } from "../../supabaseClient";
import buttonStyle from "../Styles/buttonStyle";
import openProfilePic from "../UpdatePic Page/Helpers/openProfilePic";

export default function ProfileCard() {
  //state variables to handle user data
  const [bio, setBio] = useState("");
  const [completionYear, setCompletionYear] = useState("");
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [githubUrl, setGithubUrl] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [profilePic, setProfilePic] = useState("");

  //variable to handle location import
  const location = useLocation();
  //variable to handle url serarch
  const queryParams = new URLSearchParams(location.search);
  //variable to handle id from url
  const studentId = queryParams.get("id");
  //varible to handle navigation
  const navigate = useNavigate();

  //variable to handle dayjs formatted date
  const formattedCompletionYear = dayjs(completionYear).format("MMMM YYYY");

  //useEffect to call helper every time there's a new student ID
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

      //fetch user details if session exists
      fetchUserDetails(
        studentId,
        setBio,
        setCompletionYear,
        setGithubUrl,
        setLinkedinUrl,
        setFirstname,
        setLastname,
        setProfilePic
      );
    };

    //call the function
    checkSession();
  }, [studentId, navigate]);

  return (
    <div>
      <header className="flex justify-between items-center border-b-2 border-b-gray-400 bg-gray-200">
        <p className="flex items-center pl-4 font-rubikone text-3xl tracking-wider text-gray-400 pt-4 pb-4">
          <CgProfile className="text-3xl text-gray-400" />
          PROFILE{" "}
        </p>
        <button
          onClick={() => handleLogout(navigate)}
          className="flex items-center text-2xl p-3 font-rubikone text-gray-400 hover:text-blue-400 cursor-pointer"
        >
          <VscSignOut />
          Logout
        </button>
      </header>
      <div className="flex items-center border-b-2 bg-gray-100">
        {Boolean(profilePic) && (
          <img
            onClick={() => openProfilePic(studentId)}
            src={profilePic}
            alt={`${firstname} ${lastname}'s Profile`}
            className="w-64 h-64 mt-6 mb-6 ml-10  border-2 border-gray-200 rounded-full object-cover max-w-full max-h-full cursor-pointer"
          />
        )}
        <h2 className="ml-20 font-rubikone text-6xl text-gray-600">
          {firstname} {lastname}
        </h2>
      </div>
      <div className="bg-gray-200">
        <button
          onClick={() => navigateDetailsPage(studentId, navigate)}
          className="flex items-center text-2xl p-3 font-rubikone text-gray-400 hover:text-blue-400 cursor-pointer"
        >
          <MdEdit />
          Edit
        </button>
        <div className="justify-center items-center grid grid-cols-2 gap-y-8 gap-x-12 p-4 pt-10 pb-16">
          <div className="flex flex-col">
            <h3 className="font-rubikone text-3xl tracking-wider text-gray-400">
              BIO:
            </h3>
            <p className="font-rubik tracking-wide text-lg text-gray-500">
              {bio}
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="font-rubikone text-3xl tracking-wider text-gray-400">
              Completion Year:
            </h3>
            <p className="font-rubik tracking-wide text-lg text-gray-500">
              {formattedCompletionYear}
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="font-rubikone text-3xl tracking-wider text-gray-400">
              {" "}
              LinkedIn:
            </h3>
            <p>
              {" "}
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 text-lg underline hover:text-blue-700"
              >
                {linkedinUrl}
              </a>
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="font-rubikone text-3xl tracking-wider text-gray-400">
              GitHub:
            </h3>
            <p>
              {" "}
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 text-lg underline hover:text-blue-700"
              >
                {githubUrl}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
