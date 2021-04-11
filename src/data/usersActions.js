import { actionTypes } from './constants';

export const setFollow = (userId, follow) => {
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
