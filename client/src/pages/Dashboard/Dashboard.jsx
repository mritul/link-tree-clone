import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import AddLink from "../../components/Dashboard/AddLink/AddLink";
import Card from "../../components/Dashboard/Card/Card";
import { useAuth } from "../../utils/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Dashboard = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [links, setLinks] = useState([]);
  useEffect(() => {
    if (auth.user === null) {
      navigate("/login");
    }
  }, [auth.user]);

  // useEffect to fetch the links
  useEffect(() => {
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_BACKEND_URL}/api/get-links`,
      withCredentials: true,
    })
      .then((res) => {
        setLinks(res.data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);
  return (
    <div className="Dashboard">
      <AddLink setLinks={setLinks} />
      <h1>Current Links</h1>
      <div className="cards-container">
        {links.map((link, idx) => (
          <Card
            title={link.title}
            url={link.url}
            active={link.active}
            linkId={link._id}
            key={idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
