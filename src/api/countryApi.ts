import type { ResponseType } from 'App/types';
import { instance } from './instance';

export const countryApi = {
  getCountryById(name: string) {
    return instance.get(`${name}`).then(res => res.data);
  },
  getCountriesList(): Promise<ResponseType[]> {
    return instance
      .get<ResponseType[]>(`${process.env.REACT_APP_ALL_COUNTRIES}`)
      .then(res => res.data);
  },
};
