import axios from 'axios';
import {BASE_URL} from '@env';
// console.log("BASE_URL*******",BASE_URL);

export const adminApi = axios.create({
  baseURL: `${BASE_URL}/admin/api`, // Replace with your actual API base URL
  timeout: 10000, // 10 seconds timeout
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
