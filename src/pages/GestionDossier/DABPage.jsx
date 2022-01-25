import React from "react";
import { Outlet } from "react-router-dom";

const DABPage = () => {
  return (
    <div>
      <h1>DAB</h1>
      <Outlet />
    </div>
  );
};

export default DABPage;
