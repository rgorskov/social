const SET_FOLLOW = 'SET_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_IS_LOADING = 'SET_IS_LOADING';

const initialState = {
  users: [
    // { id: 1, followed: false, firstname: 'Alexey', surname: 'Popov', photoUrl: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg' },
    // { id: 2, followed: true, firstname: 'Sergey', surname: 'Petrov', photoUrl: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg' },
    // { id: 3, followed: false, firstname: 'Petr', surname: 'Ivanov', photoUrl: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg' },
    // { id: 4, followed: false, firstname: 'Ivan', surname: 'Kukanov', photoUrl: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg' }
  ],
  currentPage: 1,
  pageSize: 100,
  totalUsersCount: 0,
  isLoading: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FOLLOW: {
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
    case SET_USERS: {
      return {
        ...state,
        users: action.users,
      };
    }
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    default:
      return state;
  }
};

export const setFollow = (userId, follow) => {
  return {
    type: SET_FOLLOW,
    userId,
    follow,
  };
};

export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};

export const setUsersCount = (totalUsersCount) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount,
  };
};

export const setCurrentPage = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage,
  };
};

export const setIsLoading = (isLoading) => {
  return {
    type: SET_IS_LOADING,
    isLoading,
  };
};

export default usersReducer;
