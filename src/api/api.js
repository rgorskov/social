import * as axios from 'axios';

const api = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'api-key': 'bbb456ba-076e-44e4-9911-e2153d748cd2',
    },
});

export const usersApi = {
    getAll(page, size) {
        return api
            .get(`/users?page=${page}&count=${size}`)
            .then((response) => response.data);
    },
    setFollow(userId, follow) {
        return (follow
            ? api.post(`/follow/${userId}`)
            : api.delete(`/follow/${userId}`)
        ).then((response) => response.data);
    },
    follow(userId) {
        return api.post(`/follow/${userId}`).then((response) => response.data);
    },
    unFollow(userId) {
        return api
            .delete(`/follow/${userId}`)
            .then((response) => response.data);
    },
};

export const authApi = {
    checkAuthMe() {
        return api.get('/auth/me').then((response) => response.data);
    },
};
