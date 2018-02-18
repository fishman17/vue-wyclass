<template>
  <div class="tab" v-show="isShowTabbar">
    <!-- <div class="tab-item">
      <router-link to="/home">首页</router-link>
    </div>
    <div class="tab-item">
      <router-link to="/classify">分类</router-link>
    </div>
    <div class="tab-item">
      <router-link to="/mystudy">我的学习</router-link>
    </div>
    <div class="tab-item">
      <router-link to="/account">账号</router-link>
    </div> -->
    <mt-tabbar  v-show="isShowTabbar" fixed>
      <mt-tab-item id="首页" class="tabbar-item" @click.native="changeToMain">
        <i slot="icon" class="icon iconfont icon-shouye" ></i>
        首页
      </mt-tab-item>
      <mt-tab-item id="分类" class="tabbar-item" @click.native="changeToClass">
        <i slot="icon" class="icon iconfont icon-leimupinleifenleileibie2"></i>
        分类
      </mt-tab-item>
      <mt-tab-item id="我的学习" class="tabbar-item" @click.native="changeToLearn">
        <i slot="icon" class="icon iconfont icon-icon"></i>
        我的学习
      </mt-tab-item>
      <mt-tab-item id="账号" class="tabbar-item" @click.native="changeToMy">
        <i slot="icon" class="icon iconfont icon-icon_account"></i>
        账号
      </mt-tab-item>
    </mt-tabbar>
  </div>
  
</template>

<script>
export default {  
    data(){
      return{
        
      }
    },
   	computed: {
		isShowTabbar () {
      let routeLength = this.$route.path.split('/').length;
      let home = this.$route.path.split('/')[1];

			return routeLength > 2 && home != 'home' ? false : true;
		}
    }, 
    methods:{
    },
    methods:{
      changeToMain(){
        this.$router.push({path:'/home'});
      },
      changeToClass(){
        this.$router.push({path:'/classify'});        
      },
      changeToLearn(){
        this.$router.push({path:'/mystudy'});       
      },
      changeToMy(){
        this.$router.push({path:'/account'});       
      },

    }
}
</script>

<style lang="stylus" scoped>
  .tab
    // position fixed
    // bottom 0px
    // left 0px
    // right 0px
    .tabbar-item
      display inline-block
      .icon
        font-size 25px
</style>

