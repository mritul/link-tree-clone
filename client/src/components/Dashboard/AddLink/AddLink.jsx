import React, { useState } from "react";
import "./AddLink.css";

const AddLink = () => {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");

  const handleTitleInput = (e) => {
    setTitle(e.target.value);
  };

  const handleLinkInput = (e) => {
    setLink(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO
  };
  return (
    <div className="AddLink">
      <h1>Add Links</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          required
          value={title}
          onChange={handleTitleInput}
          placeholder="Title"
        />
        <input
          type="url"
          required
          value={link}
          onChange={handleLinkInput}
          placeholder="Url"
        />
        <button className="btn-add">Add Link</button>
      </form>
    </div>
  );
};

export default AddLink;
