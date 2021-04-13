import { actionTypes } from './constants';

export const setFollowSuccess = (userId, follow) => {
    return {
        type: actionTypes.USERS_SET_FOLLOW,
        userId,
        follow,
    };
};

export const setUsers = (users) => {
    return {
        type: actionTypes.USERS_SET_USERS,
        users,
    };
};

export const setUsersCount = (totalUsersCount) => {
    return {
        type: actionTypes.USERS_SET_TOTAL_USERS_COUNT,
        totalUsersCount,
    };
};

export const setCurrentPage = (currentPage) => {
    return {
        type: actionTypes.USERS_SET_CURRENT_PAGE,
        currentPage,
    };
};

export const setIsLoading = (isLoading) => {
    return {
        type: actionTypes.USERS_SET_IS_LOADING,
        isLoading,
    };
};

export const setFollowingInProgress = (userId, isLoading) => {
    return {
        type: actionTypes.USERS_FOLLOWING_IN_PROGRESS,
        userId,
        isLoading,
    };
};
