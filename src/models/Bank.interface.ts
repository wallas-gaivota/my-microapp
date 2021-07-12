import { IMaritalMarriageStatus } from "./Person.interface";

export enum BankAttributes {
  name = "name",
  agency = "agency",
  account = "account",
}

export interface IBank {
  [BankAttributes.name]?: string;
  [BankAttributes.agency]?: string;
  [BankAttributes.account]?: string;
}

export type IBankNames = IMaritalMarriageStatus;
