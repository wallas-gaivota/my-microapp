// Above is an example of router constants

import { generatePath } from "react-router-dom";

export const BASE_URL = "new/registration";

export enum BASE_ROUTES {
  PEOPLE = "/people",
  CREATE_PERSON_RELATIONSHIP = "/relationship",
  CREATE = "/create",
  COMPANIES = "/companies",
  CREATE_COMPANY_PARTNER = "/partner",
  PROFILE = "/profile/:id",
  FARM = "/farm",
  PROPERTIES = "/rural-properties",
}

export const FULL_ROUTES = {
  PERSON_ROUTES: {
    INITIAL: `/${BASE_URL}${BASE_ROUTES.PEOPLE}`,
    CREATE_PERSON: `/${BASE_URL}${BASE_ROUTES.PEOPLE}${BASE_ROUTES.CREATE}`,
    CREATE_PERSON_RELATIONSHIP: `/${BASE_URL}${BASE_ROUTES.PEOPLE}${BASE_ROUTES.CREATE}${BASE_ROUTES.CREATE_PERSON_RELATIONSHIP}`,
    PROFILE: (id: string) =>
      generatePath(`/${BASE_URL}${BASE_ROUTES.PEOPLE}${BASE_ROUTES.PROFILE}`, { id }),
  },
};
