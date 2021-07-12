import { GetSelectedOrg } from "utils/AuthUtils";

export const PersonApi = {
  postPerson: "register/person",
  searchPerson: (name: string, offset = 0, perPage: 10) =>
    `register/organization/${GetSelectedOrg()}/person/search?fullName=${name}&offset=${offset}&perPage=${perPage}`,
  getListPerson: (perPage = 10, offset = 0) =>
    `register/organization/${GetSelectedOrg()}/person?perPage=${perPage}&offset=${offset}`,
  getPerson: (id: string) => `register/organization/${GetSelectedOrg()}/person/${id}`,
  getPersonRelations: (id: string) =>
    `register/organization/${GetSelectedOrg()}/person/${id}/relations`,
  getMaritalStatus: "register/person/marital-status",
  getMarriageRegime: "register/person/marriage-regime",
};
