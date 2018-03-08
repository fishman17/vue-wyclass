import axios from 'axios';

// let base = 'http://120.79.232.154:3000'; //此接口和webpack dev-server相同
let base = '';

export const requestLogin = params => {                //用户登录请求
    return axios.post(`${base}/api/login`, params).then(res => {
        return res.data;
    }, err => {
        reject(err);
    }).catch((error) => {
        reject(error)
    });
};
export const getUserList = params => {                    //获取用户信息
    return axios.get(`${base}/api/userData`, { params: params }).then(res => {
        return res.data;
    }, err => {
        reject(err);
    }).catch((error) => {
        reject(error)
    });
};
export const getRecommend = params => {                 //获取主页中推荐页面信息
    return axios.get(`${base}/api/getrecommend`, { params: params }).then(res => {
        return res.data;
    }, err => {
        reject(err);
    }).catch((error) => {
        reject(error)
    });
};
export const getClassic = params => {                   //获取主页中经典课程信息
    return axios.get(`${base}/api/getclassic`, { params: params }).then(res => {
        return res.data;
    }, err => {
        reject(err);
    }).catch((error) => {
        reject(error)
    });
};
export const getExpert = params => {                    //获取主页中行家信息
    return axios.get(`${base}/api/getexpert`, { params: params }).then(res => {
        return res.data;
    }, err => {
        reject(err);
    }).catch((error) => {
        reject(error)
    });
};
export const getMajor = params => {                 //获取主页中专业信息
    return axios.get(`${base}/api/getmajor`, { params: params }).then(res => {
        return res.data;
    }, err => {
        reject(err);
    }).catch((error) => {
        reject(error)
    });
};
export const getClassify = params => {                  //获取课程分类信息
    return axios.get(`${base}/api/getclassify`, { params: params }).then(res => {
        return res.data;
    }, err => {
        reject(err);
    }).catch((error) => {
        reject(error)
    });
};
export const getAllclass = params => {                  //获取全部课程列表
    return axios.get(`${base}/api/getallclass`, { params: params }).then(res => {
        return res.data;
    }, err => {
        reject(err);
    }).catch((error) => {
        reject(error)
    });
};
export const findCourseById = params => {               //通过id查找课程
    return axios.post(`${base}/api/findcoursebyid`, params).then(res => {
        return res.data;
    }, err => {
        reject(err);
    }).catch((error) => {
        reject(error)
    });
};