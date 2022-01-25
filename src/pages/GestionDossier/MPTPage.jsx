import React from "react";
import { Outlet } from "react-router-dom";

const MPTPage = () => {
  return (
    <div>
      <h1>MPT</h1>
      <Outlet />
    </div>
  );
};

export default MPTPage;
