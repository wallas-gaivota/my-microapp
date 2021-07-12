export enum AddressAttributes {
  cep = "cep",
  street = "street",
  houseNumber = "houseNumber",
  city = "city",
  state = "state",
}

export interface IAddress {
  [AddressAttributes.cep]?: string;
  [AddressAttributes.street]?: string;
  [AddressAttributes.houseNumber]?: string;
  [AddressAttributes.city]?: string;
  [AddressAttributes.state]?: string;
}
