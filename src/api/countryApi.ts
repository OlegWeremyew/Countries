import { ResponseType } from 'App/types';
import { ALL_COUNTRIES } from 'config';
import { instance } from './instance';

export const countryApi = {
  getCountryById(name: string) {
    return instance.get(`${name}`).then(res => res.data);
  },
  getCountriesList() {
    return instance.get<ResponseType[]>(`${ALL_COUNTRIES}`).then(res => res.data);
  },
};
