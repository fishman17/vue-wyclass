<template>
  <div id="app">
    <router-view/>
    <loading v-show="loading"/>
    <tabbar/>
  </div>
</template>

<script>
import tabbar from "@/components/tabbar"
import loading from "@/components/loading"
import { mapGetters } from 'vuex'
export default {
  components:{
    tabbar,
    loading
  },
  computed: {
    ...mapGetters([
        'loading',
    ]),
  }
}
</script>

<style lang="stylus" scoped>

</style>
