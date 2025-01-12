import type { ResponseType } from 'App/types';
import type { InfoItem } from 'components/Card/types';
import type { Nullable } from 'types';
import { SetStateAction } from 'react';

export type CountryInfoType = {
  img: string;
  name: string;
  info: InfoItem[];
};

export type HomePageType = {
  countries: ResponseType[];
  setCountries: (data: ResponseType[]) => void;
};

export type ResponseCountry = SetStateAction<Nullable<ResponseType>>[];
