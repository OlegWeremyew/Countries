import type { SetStateAction } from 'react';
import type { ResponseType } from 'App/types';
import type { InfoItem } from 'components/Card/types';
import type { Nullable } from 'types';

interface CountryInfoType {
  img: string;
  name: string;
  info: InfoItem[];
}

interface HomePageType {
  countries: ResponseType[];
  setCountries: (data: ResponseType[]) => void;
}

type ResponseCountry = SetStateAction<Nullable<ResponseType>>[];

export type { CountryInfoType, HomePageType, ResponseCountry };
