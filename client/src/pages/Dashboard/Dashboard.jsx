import React from "react";
import "./Dashboard.css";
import AddLink from "../../components/Dashboard/AddLink/AddLink";
import Card from "../../components/Dashboard/Card/Card";
const Dashboard = () => {
  return (
    <div className="Dashboard">
      <AddLink />
      <h1>Current Links</h1>
      <div className="cards-container">
        <Card title="Instagram" url="http://www.google.com" checked={false} />
        <Card title="Instagram" url="http://www.google.com" checked={false} />
        <Card title="Instagram" url="http://www.google.com" checked={false} />
      </div>
    </div>
  );
};

export default Dashboard;
