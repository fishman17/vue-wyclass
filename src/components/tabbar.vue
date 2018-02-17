<template>
  <div class="tab border-1px" v-show="isShowTabbar">
    <div class="tab-item">
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
    </div>
  </div>
</template>

<script>
export default {  
   	computed: {
		isShowTabbar () {
      let routeLength = this.$route.path.split('/').length;
      let home = this.$route.path.split('/')[1];

			return routeLength > 2 && home != 'home' ? false : true;
		}
    }, 
    methods:{
    }
}
</script>

<style lang="stylus" scoped>
  .tab
    height 100px
    width 100%
    position fixed
    bottom 0px
    left 0px
    right 0px
    background-color red
    display flex
    justify-content center 
    align-items center 
    .tab-item
      flex:1
      background-color blue
</style>

