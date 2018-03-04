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
export const getRecommend = params => {
    return axios.get(`${base}/api/getrecommend`, { params: params }).then(res => {
        return res.data;
    }, err => {
        reject(err);
    }).catch((error) => {
        reject(error)
    });
};
export const getClassic = params => {
    return axios.get(`${base}/api/getclassic`, { params: params }).then(res => {
        return res.data;
    }, err => {
        reject(err);
    }).catch((error) => {
        reject(error)
    });
};
export const getExpert = params => {
    return axios.get(`${base}/api/getexpert`, { params: params }).then(res => {
        return res.data;
    }, err => {
        reject(err);
    }).catch((error) => {
        reject(error)
    });
};
export const getMajor = params => {
    return axios.get(`${base}/api/getmajor`, { params: params }).then(res => {
        return res.data;
    }, err => {
        reject(err);
    }).catch((error) => {
        reject(error)
    });
};
export const getClassify = params => {
    return axios.get(`${base}/api/getclassify`, { params: params }).then(res => {
        return res.data;
    }, err => {
        reject(err);
    }).catch((error) => {
        reject(error)
    });
};
export const getAllclass = params => {
    return axios.get(`${base}/api/getallclass`, { params: params }).then(res => {
        return res.data;
    }, err => {
        reject(err);
    }).catch((error) => {
        reject(error)
    });
};
export const findCourseById = params => {
    return axios.post(`${base}/api/findcoursebyid`, params).then(res => {
        return res.data;
    }, err => {
        reject(err);
    }).catch((error) => {
        reject(error)
    });
};