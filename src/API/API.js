import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { 
        "API-KEY": "1f478f7d-5328-40c8-a6bf-f76fc5eb6df0"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },
    follow (userId) {
        return instance.post(`follow/${userId}`, {})
    },
    unfollow (userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        return instance.get(`profile/`+userId);            
    }
};

export const authAPI = {
    authMe () {
        return instance.get(`auth/me`)
     }
}