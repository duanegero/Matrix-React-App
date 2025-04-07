//imports from React
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

//import helpers
import submitUserDetails from "./Helpers/submitUserDetails";

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
      <form onSubmit={handleSubmit}>
        <label>Bio</label>
        <textarea
          type="text"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        ></textarea>
        <label>Completion Year</label>
        <input
          type="date"
          value={completionYear}
          onChange={(e) => setCompletionYear(e.target.value)}
        ></input>
        <label>Linkedin Url</label>
        <input
          type="url"
          value={linkedinUrl}
          onChange={(e) => setLinkedinUrl(e.target.value)}
        ></input>
        <label>Git Hub</label>
        <input
          type="url"
          value={githubUrl}
          onChange={(e) => setGithubUrl(e.target.value)}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
