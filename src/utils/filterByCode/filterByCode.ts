import { BASE_URL } from '../../config';

export const filterByCode = (codes: any[]): string =>
  `${BASE_URL}alpha?codes=${codes.join(',')}`;
