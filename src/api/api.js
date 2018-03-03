import axios from 'axios';

let base = '';

export const requestLogin = params => {
    return axios.post(`${base}/api/login`, params).then(res => {
        return res.data;
    }, err => {
        reject(err);
    }).catch((error) => {
        reject(error)
    });
};
export const getUserList = params => {
    return axios.get(`${base}/api/userData`, { params: params }).then(res => {
        return res.data;
    }, err => {
        reject(err);
    }).catch((error) => {
        reject(error)
    });
};