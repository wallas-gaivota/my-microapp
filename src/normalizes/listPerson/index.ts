import { IPerson } from "Models/Person.interface";
import { AddCpfMask } from "utils/AddCpfCnpjMask";
import { FormatDateToHumans } from "utils/FormatDate";

export const NormalizeListPerson = (data: IPerson[]) => {
  return data?.map(person => ({
    id: person["id"],
    person: { name: person.fullName },
    cpf: AddCpfMask(person.cpf),
    contact_owner: { name: person.createdBy.fullName || "-" },
    registered: FormatDateToHumans(person.createdOn),
  }));
};
