import { actionTypes } from './constants';

const initialState = {
    users: [],
    currentPage: 1,
    pageSize: 20,
    totalUsersCount: 0,
    isLoading: false,
    followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.USERS_SET_FOLLOW: {
            let users = state.users.map((u) => {
                return u.id == action.userId
                    ? { ...u, followed: action.follow }
                    : { ...u };
            });
            return {
                ...state,
                users,
            };
        }
        case actionTypes.USERS_SET_USERS: {
            return {
                ...state,
                users: action.users,
            };
        }
        case actionTypes.USERS_SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount,
            };
        case actionTypes.USERS_SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            };
        case actionTypes.USERS_SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading,
            };
        case actionTypes.USERS_FOLLOWING_IN_PROGRESS:
            const followingInProgress = action.isLoading
                ? [...state.followingInProgress, action.userId]
                : state.followingInProgress.filter((id) => id != action.userId);
            return {
                ...state,
                followingInProgress,
            };
        default:
            return state;
    }
};

export default usersReducer;
