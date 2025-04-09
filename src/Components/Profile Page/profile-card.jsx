//imports from React
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

//import helper function
import fetchUserDetails from "./Helpers/fetchUserDetails";
import navigateDetailsPage from "../Details Page/Helpers/navigateDetailsPage";
import handleLogout from "../handleLogout";

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

  //useEffect to call helper every time there's a new student ID
  useEffect(() => {
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
  }, [studentId]);

  return (
    <div>
      <h2>
        {firstname} {lastname}'s Profile
      </h2>
      {Boolean(profilePic) && (
        <img
          src={profilePic}
          alt={`${firstname} ${lastname}'s Profile`}
          className="w-48 h-48 rounded-full object-cover "
        />
      )}
      <p>Bio: {bio}</p>
      <p>Completion Year: {completionYear}</p>
      <p>
        LinkedIn:{" "}
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          {linkedinUrl}
        </a>
      </p>
      <p>
        GitHub:{" "}
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          {githubUrl}
        </a>
      </p>
      <button onClick={() => navigateDetailsPage(studentId, navigate)}>
        Update
      </button>
      <button onClick={() => handleLogout(navigate)}>Logout</button>
    </div>
  );
}
