import {adminApi} from '../apiService';

export const getFetchData = async (url, setState) => {
  try {
    const response = await adminApi.get(url);
    setState(response?.data);
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};
