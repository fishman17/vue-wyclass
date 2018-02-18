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

</style>
