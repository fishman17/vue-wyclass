const appData = require('../../static/data.json')
const userList = appData.userList
const recommend=appData.home[0]
const classic=appData.home[1]
const expert=appData.home[3]
const major=appData.home[2]
const classify=appData.classes
const allclass=appData.allclass


 function login(params) {
   return new Promise((resolve, reject) => {
     let userData = params;
     let isExist = false;
     //模拟登录loading中
     setTimeout(() => {
       userList.map((user) =>{
         if(user.username == userData.username && user.password == userData.password){

           isExist = true;
           resolve({...user})
         }
       })
       if(!isExist){
        reject("notFound")
       }
     }, 1000);


   })
}




export const findCourseById = params => {//通过id查找课程
  return new Promise((resolve, reject) => {
    for(let index in appData.allclass){
      if(appData.allclass[index].id === params.id ){
        resolve(appData.allclass[index])
      }
    }
    reject("error")
  })

};

export const requestLogin = params => {                //用户登录请求
    return new Promise((resolve, reject)=>{
      login(params).then(res=>{
        resolve(res)
      }).catch(err=>{
      resolve(err)
      })
    })
};

export const getUserList  = params => {               //获取用户信息
  return new Promise((resolve, reject)=>{
    resolve(userList)
    reject("error")
  })
};

export const getRecommend = params => {                 //获取主页中推荐页面信息
    return new Promise((resolve, reject)=>{
      resolve(recommend)
      reject("error")
    })
};

export const getClassic = params => {                 //获取主页中经典课程信息
  return new Promise((resolve, reject)=>{
    resolve(classic)
    reject("error")
  })
};
export const getExpert = params => {               //获取主页中行家信息
  return new Promise((resolve, reject)=>{
    resolve(expert)
    reject("error")
  })
};

export const getMajor = params => {              //获取主页中专业信息
  return new Promise((resolve, reject)=>{
    resolve(major)
    reject("error")
  })
};

export const getClassify = params => {                //获取课程分类信息
  return new Promise((resolve, reject)=>{
    resolve(classify)
    reject("error")
  })
};

export const getAllclass = params => {                //获取全部课程列表
  return new Promise((resolve, reject)=>{
    resolve(allclass)
    reject("error")
  })
};


