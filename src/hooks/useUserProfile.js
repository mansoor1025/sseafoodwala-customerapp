import { useDispatch } from 'react-redux';
import { useAuthStore } from '../store/useAuthStore';
import { updateUserProfileThunk } from '../store/userProfile/userProfileThunk';
import { USER_TYPES } from '../constants/user.constants';

export const useUserProfile = () => {
    const dispatch = useDispatch();
    const state = useAuthStore(state => state);
    const { user } = state
    let userType = null

    const handleUpdateUserProfile = async (data) => {
        console.log("handleUpdateUserProfile is running***************** ");
        console.log("data**********", data);


        if (!user) {
            userType = USER_TYPES.GUEST
        }
        else {
            userType = USER_TYPES.LOGGEDIN
        }

        try {
            await dispatch(
                updateUserProfileThunk({ data, userType })
            ).unwrap();

        } catch (err) {
            console.log("err?.message*****", err);
        }
    };

    return { handleUpdateUserProfile };
};
