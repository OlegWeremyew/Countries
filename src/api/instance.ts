import axios from 'axios';
import { BASE_URL } from 'config';

export const instance = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
});
