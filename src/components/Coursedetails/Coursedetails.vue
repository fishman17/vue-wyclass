<template>
  <div class="wrapper">
      <div class="toolbar">一些工具</div>
      <div class="img"><img src="" alt=""></div>
      <div class="tab border-1px">
        <div class="tab-item">
            <router-link to="introduce">介绍</router-link>
        </div>
        <div class="tab-item">
            <router-link to="catalog">目录</router-link>
        </div>
        <div class="tab-item">
            <router-link to="comment">评价</router-link>
        </div>
      </div>
      <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>

</style>
