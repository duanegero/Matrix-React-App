//imports from React
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TbBrandMatrix } from "react-icons/tb";
import { VscSignIn } from "react-icons/vsc";
import { MdOutlineImageNotSupported } from "react-icons/md";

//importing herlper functions
import fetchAllUsers from "./Helpers/fetchAllUsers";
import navigateLoginPage from "../Login Page/Helpers/navigateLoginPage";

//import dayjs to format time
import dayjs from "dayjs";

export default function AllProfileCards() {
  //state variable to handle array of users
  const [users, setUsers] = useState([]);
  //variable to handle navigate
  const navigate = useNavigate();

  useEffect(() => {
    //async function to handle helper function
    const getUsers = async () => {
      //variable to to handle returned from helper function
      const allUsers = await fetchAllUsers();
      setUsers(allUsers);
    };
    //call the function
    getUsers();
  }, []);

  return (
    <div>
      <header className="flex justify-between items-center border-b-2 border-b-gray-400 bg-gray-200">
        <p className="flex items-center pl-4 font-rubikone text-3xl tracking-wider text-gray-400 pt-4 pb-4">
          <TbBrandMatrix />
          Matrix Profiles
        </p>
        <button
          onClick={() => navigateLoginPage(navigate)}
          className="flex items-center text-2xl p-3 font-rubikone text-gray-400 hover:text-blue-400 cursor-pointer"
        >
          <VscSignIn />
          Login
        </button>
      </header>

      {users.map((user) => {
        //loop through the users array and destructure the properties
        const {
          id,
          bio,
          completion_year,
          github_url,
          linkedin_url,
          profile_pic_url,
          firstname,
          lastname,
        } = user;

        //format the date to readable date
        const formattedCompletionYear =
          dayjs(completion_year).format("MMMM YYYY");

        return (
          <div key={id}>
            <div className="flex items-center border-b-2 bg-gray-100">
              {profile_pic_url ? (
                <img
                  src={profile_pic_url}
                  alt={`${firstname} ${lastname}'s Profile`}
                  className="w-64 h-64 mt-6 mb-6 ml-10  border-2 border-gray-200 rounded-full object-cover max-w-full max-h-full"
                />
              ) : (
                <div className="w-64 h-64 mt-6 mb-6 ml-10 border-2 border-gray-200 rounded-full object-cover max-w-full max-h-full  flex flex-col items-center justify-center font-rubik tracking-widest text-xl text-gray-400">
                  <MdOutlineImageNotSupported />
                  No Photo
                </div>
              )}
              <h2 className="ml-10 font-rubikone text-4xl text-gray-600">
                {firstname} {lastname}
              </h2>
            </div>
            <div className="bg-gray-200">
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
                    Linkedin:
                  </h3>
                  <a
                    href={linkedin_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 text-lg underline hover:text-blue-700"
                  >
                    {linkedin_url}
                  </a>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-rubikone text-3xl tracking-wider text-gray-400">
                    GitHub:
                  </h3>
                  <a
                    href={github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 text-lg underline hover:text-blue-700"
                  >
                    {github_url}
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
