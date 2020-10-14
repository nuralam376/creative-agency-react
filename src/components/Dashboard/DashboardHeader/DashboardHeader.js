import React from "react";

const DashboardHeader = ({ title }) => {
  return (
    <div className="d-flex justify-content-between mb-5">
      <h2>{title}</h2>
      <h4>User Name</h4>
    </div>
  );
};

export default DashboardHeader;
