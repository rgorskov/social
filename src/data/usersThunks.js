import { usersApi } from '../api/api';
import {
    setCurrentPage,
    setIsLoading,
    setUsersCount,
    setUsers,
    setFollowingInProgress,
    setFollowSuccess,
} from './usersActions';

export const getUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(setIsLoading(true));

        const users = await usersApi.getAll(currentPage, pageSize);

        dispatch(setIsLoading(false));
        dispatch(setUsers(users.items));
        dispatch(setUsersCount(users.totalCount));
    };
};

export const followUser = (userId, follow) => {
    return async (dispatch) => {
        dispatch(setFollowingInProgress(userId, true));

        const setFollowRes = await usersApi.setFollow(userId, follow);
        if (setFollowRes.resultCode == 0) {
            dispatch(setFollowSuccess(userId, follow));
        }

        dispatch(setFollowingInProgress(userId, false));
    };
};
