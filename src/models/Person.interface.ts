import { IAddress } from "./Address.interface";
import { IBank } from "./Bank.interface";

export enum PersonAttributes {
  id = "id",
  organizationId = "organizationId",
  fullName = "fullName",
  cpf = "cpf",
  rg = "rg",
  ie = "ie",
  birthDate = "birthDate",
  genderCode = "genderCode",
  issuingBody = "issuingBody",
  occupation = "occupation",
  address = "address",
  email = "email",
  phoneNumber = "phoneNumber",
  maritalStatus = "maritalStatus",
  spouseId = "spouseId",
  marriageRegime = "marriageRegime",
  bank = "bank",
  modifiedBy = "modifiedBy",
  modifiedOn = "modifiedOn",
  createdOn = "createdOn",
  createdBy = "createdBy",
}

export interface IMaritalMarriageStatus {
  name: string;
  value: string;
}

export enum MaritalStatusEnum {
  None = 0,
  Single = 1,
  Married = 2,
  Divorced = 3,
  Widowed = 4,
  Separated = 5,
}

export enum MarriageRegimeEnum {
  None = "None",
  RegimePartialCommunityProperty = "RegimePartialCommunityProperty",
  RegimeUniversalCommunityProperty = "RegimeUniversalCommunityProperty",
  FinalSharingAcquits = "FinalSharingAcquits",
  SeparationProperty = "SeparationProperty",
}

export enum GenderCodeEnum {
  None = 0,
  Male = 1,
  Female = 2,
}

export type PersonRelationVariants = "farm" | "people" | "properties" | "company";

export interface IPerson {
  [PersonAttributes.id]?: string;
  [PersonAttributes.organizationId]?: string;
  [PersonAttributes.fullName]: string;
  [PersonAttributes.cpf]: string;
  [PersonAttributes.rg]?: string;
  [PersonAttributes.ie]?: string;
  [PersonAttributes.birthDate]: string;
  [PersonAttributes.genderCode]: GenderCodeEnum;
  [PersonAttributes.issuingBody]?: string;
  [PersonAttributes.occupation]?: string;
  [PersonAttributes.address]?: IAddress;
  [PersonAttributes.email]?: string;
  [PersonAttributes.phoneNumber]?: string;
  [PersonAttributes.maritalStatus]?: MaritalStatusEnum;
  [PersonAttributes.spouseId]?: string;
  [PersonAttributes.marriageRegime]?: MarriageRegimeEnum;
  [PersonAttributes.bank]?: IBank;
  [PersonAttributes.modifiedBy]?: IPersonLog;
  [PersonAttributes.modifiedOn]?: string;
  [PersonAttributes.createdOn]?: string;
  [PersonAttributes.createdBy]?: IPersonLog;
}

export interface IPersonLog {
  [PersonAttributes.id]: string;
  [PersonAttributes.fullName]: string;
}

export interface IPersonSample {
  [PersonAttributes.id]?: string;
  [PersonAttributes.fullName]: string;
  [PersonAttributes.cpf]: string;
}
