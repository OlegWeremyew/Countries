export type InfoType = {
  name?: string;
  nativeName?: string;
  flag?: string;
  capital?: string;
  population?: number;
  region?: string;
  subregion?: string;
  topLevelDomain?: string[];
  currencies?: CodeType[];
  languages?: LanguageType[];
  borders?: string[];
  area?: number;
  timezones?: string[];
};

export type CodeType = {
  code: string;
  name: string;
  symbol: string;
};

export type LanguageType = {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
};
