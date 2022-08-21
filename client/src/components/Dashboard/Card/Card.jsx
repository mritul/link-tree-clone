import React from "react";
import "./Card.css";
import Switch from "react-switch";
import { useState } from "react";
import axios from "axios";

const Card = ({ title, url, active, linkId }) => {
  // For the toggle switch
  const [isChecked, setIsChecked] = useState(active);
  const handleChange = async () => {
    try {
      setIsChecked(!isChecked);
      const response = await axios({
        method: "PUT",
        url: `${process.env.REACT_APP_BACKEND_URL}/api/update-link-status/${linkId}`,
        data: {
          title: title,
          url: url,
          active: isChecked,
        },
        withCredentials: true,
      });
    } catch (err) {
      throw err;
    }
  };
  return (
    <div className="Card">
      <div>
        <button className="btn-drag" onClick={(e) => console.log(isChecked)}>
          <i className="fa-solid fa-grip-vertical"></i>
        </button>
      </div>
      <div className="details">
        <h1 className="title">{title}</h1>
        <p className="url">{url}</p>
      </div>
      <div className="btn-panel">
        <label>
          <Switch
            onChange={handleChange}
            checked={isChecked}
            offColor="#FF0000"
          />
        </label>
        <button className="btn-delete">
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default Card;
