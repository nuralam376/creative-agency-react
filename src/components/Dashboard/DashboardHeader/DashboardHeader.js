import React, { useContext } from "react";
import { UserContext } from "../../../App";

const DashboardHeader = ({ title }) => {
  const [loggedInUser] = useContext(UserContext);
  console.log("LoggedInUser", loggedInUser);
  return (
    <div className="d-flex justify-content-between mb-5">
      <h2>{title}</h2>
      <h4>User Name</h4>
    </div>
  );
};

export default DashboardHeader;
