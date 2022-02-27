import React from "react";
import { Outlet, useParams, useLocation } from "react-router-dom";

import DAB from "../../components/Tables/DAB/DAB";

const DABPage = () => {
  const params = useParams();
  const { pathname } = useLocation();
  const pathLen = pathname.split("/").length <= 4;
  return (
    <div>
      {pathLen ? <DAB /> : <h1>DAB</h1>}
      <Outlet />
    </div>
  );
};

export default DABPage;
