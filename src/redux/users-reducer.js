const SET_FOLLOW = 'SET_FOLLOW';
const SET_USERS = 'SET_USERS';

const initialState = {
    users: [
        // { id: 1, followed: false, firstname: 'Alexey', surname: 'Popov', photoUrl: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg' },
        // { id: 2, followed: true, firstname: 'Sergey', surname: 'Petrov', photoUrl: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg' },
        // { id: 3, followed: false, firstname: 'Petr', surname: 'Ivanov', photoUrl: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg' },
        // { id: 4, followed: false, firstname: 'Ivan', surname: 'Kukanov', photoUrl: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg' }
    ]
};

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_FOLLOW:{
            let users = state.users.map(u => {
                return u.id == action.userId
                    ? {...u, followed: action.follow}
                    : {...u};
            });
            return {
                ...state,
                users
            };
        }
        case SET_USERS: {
            return {
                ...state,
                users: [...state.users, ...action.users]
            };
        }
        default:
            return state;
    }
};

export const setFollofAC = (userId, follow) => {
    return {
    type: SET_FOLLOW,
    userId, 
    follow
    }
};

export const setUsersAC = (users) => {
    return {
    type: SET_USERS,
    users
    }
};

export default usersReducer;