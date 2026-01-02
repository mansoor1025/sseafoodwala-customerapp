import { adminApi } from '../adminApiService';
import { BASE_URL } from '@env';
import { customerApiService } from '../customerApiService';

export const getFetchData = async (url, setState = false, customerApiFlag) => {
  try {
    let response;

    if (customerApiFlag) {
      response = await customerApiService.get(url);
    }
    else {
      response = await adminApi.get(url);
    }

    if (setState) {
      setState(response?.data?.data);
    }

    return response?.data?.data
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};

export const imageUrlWrapper = url => {
  if (!url) return '';

  // If full URL, return as is
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }

  // Otherwise add BASE_URL
  return `${BASE_URL}${url}`;
};
