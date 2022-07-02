import { BASE_URL } from 'config';

export const filterByCode = (codes: string[]): string =>
  `${BASE_URL}alpha?codes=${codes.join(',')}`;
