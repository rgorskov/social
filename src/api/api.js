import * as axios from 'axios';

const api = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'api-key': 'bbb456ba-076e-44e4-9911-e2153d748cd2',
    },
});

export const usersApi = {
    async getAll(page, size) {
        const users = await api.get(`/users?page=${page}&count=${size}`);

        return users.data;
    },
    async setFollow(userId, follow) {
        const response = await (follow
            ? api.post(`/follow/${userId}`)
            : api.delete(`/follow/${userId}`));

        return response.data;
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
    async checkAuthMe() {
        let response = await api.get('/auth/me');
        return response.data;
    },
};

export const profileApi = {
    async getUserProfile(userId) {
        const response = await api.get(`/profile/${userId}`);
        return response.data;
    },
};
