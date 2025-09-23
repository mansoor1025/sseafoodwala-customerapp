import axios from 'axios';
import {BASE_URL_ADMIN} from '@env';

console.log('BASE_URL_ADMIN*********', BASE_URL_ADMIN);

export const adminApi = axios.create({
  baseURL: `${BASE_URL_ADMIN}/admin/api`, // Replace with your actual API base URL
  timeout: 10000, // 10 seconds timeout
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
