import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true
})
type deleteUserPromiseType = {
    resultCode: number
}
export const userAPI = {
    unfollowUser: (userID: number): Promise<deleteUserPromiseType> => axiosInstance.delete(`follow/${userID}`)
        .then(response => response.data),

    followUser: (userID: number): Promise<any> => axiosInstance.post(`follow/${userID}`, {})
        .then(response => response.data)


}

export const authAPI = {
    me: () => axiosInstance.get(`auth/me`).then( response => response.data)
}