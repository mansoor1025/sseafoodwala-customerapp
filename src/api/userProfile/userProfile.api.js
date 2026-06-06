import { customerApiService } from '../client';

export const updateUserProfile = (data) => {
    return customerApiService.patch('/users/updateUserProfile', data);
};

export const getUserProfile = (data) => {
    return customerApiService.get('/users/getUserProfile');
};




