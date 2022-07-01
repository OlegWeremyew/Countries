const BASE_URL = 'https://restcountries.com/v2/';

export const ALL_COUNTRIES = `${BASE_URL}all`;

export const searchByCountry = (name: string): string => `${BASE_URL}name/${name}`;

export const filterByCode = (codes: []): string =>
  `${BASE_URL}alpha?codes=${codes.join(',')}`;
