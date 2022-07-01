import { ResponseType } from '../../../App/types';
import { InfoItem } from '../../../components/Card/types';

export type CountryInfoType = {
  img: string;
  name: string;
  info: InfoItem[];
};

export type HomePageType = {
  countries: ResponseType[];
  setCountries: (data: ResponseType[]) => void;
};
