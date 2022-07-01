export type ResponseType = {
  name: string;
  capital: string;
  region: string;
  population: number;
  flags: FlagsType;
  independent: boolean;
};

export type FlagsType = {
  svg: string;
  png: string;
};
