<template>
  <div class="wrapper">
    <serch class="serch"></serch>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="recommend">个性推荐</router-link>
      </div>
      <div class="tab-item">
        <router-link to="classic">精品课</router-link>
      </div>
      <div class="tab-item">
        <router-link to="major">微专业</router-link>
      </div>
      <div class="tab-item">
        <router-link to="expert">行家</router-link>
      </div>
    </div>
    <router-view class="router"></router-view>
  </div>
</template>

<script>
import serch from "@/components/serch";
export default {
  components: {
    serch
  }
};
</script>

<style lang="stylus" scoped>
.wrapper
    // position relative
    // .serch
    //   position absolute
    //   top: 0
    //   margin: 0 auto 
  .tab
    height 100px
    width 100%
    background-color red
    display flex
    justify-content center 
    align-items center 
    .tab-item
      flex:1
      background-color blue
  .router
    height 400px
</style>
