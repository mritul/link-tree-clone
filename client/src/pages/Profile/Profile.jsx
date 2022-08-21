import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Profile.css";

const Profile = () => {
  const username = useParams().username;
  const [links, setLinks] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_BACKEND_URL}/${username}`,
      });
      setLinks(result.data);
    };

    fetchData();
  }, []);
  return (
    <div className="Profile">
      {links.map((link) => (
        <a href={`${link.url}`} target="_blank">
          {link.title}
        </a>
      ))}
    </div>
  );
};

export default Profile;
