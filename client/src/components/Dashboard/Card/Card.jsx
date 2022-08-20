import React from "react";
import "./Card.css";
import Switch from "react-switch";
import { useState } from "react";

const Card = ({ title, url, checked }) => {
  // For the toggle switch
  const [isChecked, setIsChecked] = useState(checked);
  const handleChange = () => {
    setIsChecked(!isChecked);
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
