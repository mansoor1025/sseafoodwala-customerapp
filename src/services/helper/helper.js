import {adminApi} from '../apiService';
import {BASE_URL_ADMIN} from '@env';

export const getFetchData = async (url, setState) => {
  try {
    const response = await adminApi.get(url);
    console.log('response?.data*******', response?.data);

    setState(response?.data?.data);
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};

export const imageUrlWrapper =  url => {
  console.log(`${BASE_URL_ADMIN}${url}`);

  return `${BASE_URL_ADMIN}${url}`;
};
