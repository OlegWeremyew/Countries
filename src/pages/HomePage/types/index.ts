import { ResponseType } from 'App/types';
import { InfoItem } from 'components/Card/types';
import { Nullable } from 'types';
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
