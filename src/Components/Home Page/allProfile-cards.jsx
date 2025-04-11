//imports from React
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import fetchAllUsers from "./Helpers/fetchAllUsers";

import dayjs from "dayjs";

export default function AllProfileCards() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getUsers = async () => {
      const allUsers = await fetchAllUsers();
      setUsers(allUsers);
    };
    getUsers();
  }, []);

  return (
    <div>
      {users.map((user) => {
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

        return (
          <div key={id}>
            <div>
              {profile_pic_url && (
                <img
                  src={profile_pic_url}
                  alt={`${firstname} ${lastname}'s Profile`}
                />
              )}
              <h2 className="ml-10 font-rubikone text-4xl text-gray-600">
                {firstname} {lastname}
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-y-6 gap-x-10">
              <div>
                <h3>BIO:</h3>
                <p>{bio}</p>
              </div>
              <div>
                <h3>Completion Year:</h3>
                <p>{completion_year}</p>
              </div>
              <div>
                <h3>Linkedin:</h3>
                <a
                  href={linkedin_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {linkedin_url}
                </a>
              </div>
              <div>
                <h3>GitHub:</h3>
                <a href={github_url} target="_blank" rel="noopener noreferrer">
                  {github_url}
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
