import React from "react";
import { Outlet } from "react-router-dom";

const MIPage = () => {
  return (
    <div>
      <h1>MI</h1>
      <Outlet />
    </div>
  );
};

export default MIPage;
