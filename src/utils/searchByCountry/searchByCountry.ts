import { BASE_URL } from '../../config';

export const searchByCountry = (name: string): string => `${BASE_URL}name/${name}`;
