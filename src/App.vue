<template>
  <div id="app">
    <router-view/>
    <tabbar/>
  </div>
</template>

<script>
import tabbar from "@/components/tabbar"
export default {
  components:{
    tabbar,
  }
}
</script>

<style lang="stylus" scoped>
#app
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
