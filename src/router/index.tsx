import Person from "pages/Person";
import PersonProfile from "pages/PersonProfile";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { BASE_ROUTES, BASE_URL } from "./router-constants";

const Router: React.FC = () => {
  return (
    <Routes basename={BASE_URL}>
      <Route path={`${BASE_ROUTES.PEOPLE}/*`} element={<Person />}>
        <Route path={`${BASE_ROUTES.PROFILE}`} element={<PersonProfile />} />
      </Route>
    </Routes>
  );
};

export default Router;
