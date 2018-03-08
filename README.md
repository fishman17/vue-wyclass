# Vue-wyclass 仿网易云课堂App


>### 在线预览：[手机浏览或切换谷歌浏览器移动调试](http://120.79.232.154:8080/#/home)



>### Gif预览

![](https://user-gold-cdn.xitu.io/2018/3/8/16203d3d03800d2e?w=351&h=626&f=gif&s=327481)

![](https://user-gold-cdn.xitu.io/2018/3/8/16203d3f8ed79d81?w=351&h=626&f=gif&s=73844)

![](https://user-gold-cdn.xitu.io/2018/3/8/16203d449bdb1094?w=351&h=626&f=gif&s=2450471)

![](https://user-gold-cdn.xitu.io/2018/3/8/16203d487b3b41b0?w=351&h=626&f=gif&s=1196111)

![](https://user-gold-cdn.xitu.io/2018/3/8/16203d4b5295eee5?w=351&h=626&f=gif&s=162689)
# 描述
前端部分
* Vue2.0 + Mint-ui快速构建前端界面（轮播图，swiper滑块）   ---[Mint-ui](http://mint-ui.github.io/#!/zh-cn)
* Vuex 管理现非父子组件之间的通信
* 移动设备兼容：使用rem+flexible.js  
* Stylus实现css预编译
* icon-font实现所有小图标的加载，减少http请求 ----[Icon-font](http://www.iconfont.cn/)
* 路由懒加载：Vue Router结合 Vue异步组件和Webpack 的 Code Splitting
* axios做ajax请求 
* sessionStorage 存储用户信息


后端部分
* 本地使用webpack dev-server 搭建小型express服务 
* 服务器端使用express搭建静态资源资源接口

待更新的功能
* 用 express + mongodb 保存用户状态


# 功能实现
### 首页
* 1、搜索框
* 1、tabbar切换
* 4、swiper滑动，切换页面
* 6、首页各个界面
### 分类
* 1、实现切换分类模块
* 2、右侧菜单
### 我的学习
* 1、判断登录状态
* 2、用户所学课程展示

### 个人
* 1、账户的登录
* 2、设置界面 退出当前账号

### 搜索界面
* 1、根据用户输入查找所有课程中符合要求的课程并显示

### 课程详细界面
* 1、通过router传参查找课程
* 1、根据用户是否拥有选择播放视频权限
* 2、课程介绍界面


## 总结
* 1、熟悉使用Vue2.0
* 2、在项目中，将组件进行分离，编写可以复用的组件，提高效率
* 3、Vuex的状态管理模块，统一的状态的管理，让我们更好的去对数据操作
* 4、util的工具，倒计时js
* 5、对axios有更进一步的理解，利用cros进行跨域处理
* 6、进行路由的懒加载，优化页面加载

## 实现细节
### 登录拦截
```
router.beforeEach((to, from, next) => {
  // NProgress.start();
  if (to.path == '/login') {
    sessionStorage.removeItem('userInfo');
  }
  let userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
   if (!userInfo && to.path != '/account/login') {
     next({ path: '/account/login' })
   } else {
     next()
   }                            
  next()
})
```
### 路由懒加载

```
export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: resolve => require(['@/views/Home/Home'], resolve),
    },
    ]
})
```
### vue-router  url传参
```
   changeToCoursedetails(course){
      this.$router.push({path:"/home/coursedetails" , query:{id:course.id}})
      // this.$router.push({name:"Coursedetails" , params:{id:course.id}}) 
      // 可使用vue.$route 获取query和params
    },
```
params的特点是 路由后面要带参数名
并且传参的时候，参数名要跟路由后面设置的参数名对应。

但是 刷新界面，或者跳到别的界面，参数就会消失
params一旦设置在路由，params就是路由的一部分

### CORS解决跨域问题
```
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});
```
## 文件目录
```
├─api
│      api.js        ---Axios请求
├─common             
│  ├─font           ---iconfont
│  ├─js
│  └─stylus             ---stylus预处理和函数
├─components
│  │  loading.vue       ---加载界面组件
│  │  NotFound.vue      ---notFound组件
│  │  search.vue        ---查找组件
│  │  tabbar.vue        ---tabbar组件
│  │  
│  └─star               ---星级组件
├─router
│      index.js         ---router入口文件
│      
├─views
│  │  Classify.vue          ---主页分类界面
│  │  Classifydetails.vue   ---分类详细界面
│  │  Login.vue             ---登录界面
│  │  Mystudy.vue           ---主页我的学习界面
│  │  
│  ├─Account                ---主页我的账号界面
│  │      Account.vue       
│  │      setting.vue       ---设置界面
│  │      
│  ├─Coursedetails          ---课程详细界面
│  │      catalog.vue       
│  │      comment.vue
│  │      Coursedetails.vue 
│  │      introduce.vue     ---暂开发课程介绍界面
│  │      
│  └─Home                   ---我的主页中首页界面
│          classic.vue      ---经典课程界面
│          expert.vue       ---专家界面
│          Home.vue
│          major.vue        ---行家界面
│          recommend.vue    ---推荐界面
│          
└─vuex
    │  store.js             
    │  types.js
    │  
    └─modules
            com.js      ---vuex 状态管理
            user.js     ---vuex 用户管理

```
## 使用

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

># 源码地址：[Github](https://github.com/fishman17/vue-wyclass) 欢迎star哦


