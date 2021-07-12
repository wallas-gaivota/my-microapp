import React, { useEffect } from "react";
import { Button } from "@gaivota-frontend/gaivota-ui";
import { t } from "utils/Translation";
import { useAppDispatch, useAppSelector } from "store";
import { listPersonActions } from "store/listPerson";
import { NormalizeListPerson } from "normalizes/listPerson";
import { Outlet, useNavigate } from "react-router-dom";
import { FULL_ROUTES } from "router/router-constants";

const Person = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const listPersonState = useAppSelector(state => state.listPersonReducer);

  const listPersonData = NormalizeListPerson(listPersonState.payload);

  useEffect(() => {
    getListPerson();
  }, []);

  const getListPerson = () => {
    dispatch(listPersonActions.request({}));
  };

  const goToPersonProfile = () => {
    navigate(FULL_ROUTES.PERSON_ROUTES.PROFILE("29"));
  };
  return (
    <>
      {t("person")}
      <Button onClick={() => goToPersonProfile()}> Ir para Farm page </Button>
      <br />
      {JSON.stringify(listPersonData)}
      <Outlet />
    </>
  );
};

export default Person;
