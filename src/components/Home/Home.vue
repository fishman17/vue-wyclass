<template>
  <div class="wrapper">
    <serch class="serch"></serch>
    <div class="tab">
      <!-- <div class="tab-item">
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
      </div> -->
    <!-- <mt-navbar>
      <mt-tab-item id="1"><router-link to="recommend">个性推荐</router-link></mt-tab-item>
      <mt-tab-item id="2"><router-link to="classic">精品课</router-link></mt-tab-item>
      <mt-tab-item id="3"><router-link to="major">微专业</router-link></mt-tab-item>
      <mt-tab-item id="4"><router-link to="expert">行家</router-link></mt-tab-item>
    </mt-navbar> -->
      <mt-tab-container v-model="active">
        <mt-tab-container-item id="tab-container1">
          <classic/>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container2">
          <expert/>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container3">
          <major/>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <!-- <router-view class="router"></router-view> -->
  </div>
</template>

<script>
import serch from "@/components/serch";
import classic from "@/components/home/classic";
import expert from "@/components/home/expert";
import major from "@/components/home/major";

export default {
  components: {
    serch,
    classic,
    expert,
    major,
  },
  data(){
    return{
      active: 1,
    }
  },
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
    // height 100px
    // width 100%
    // background-color red
    // display flex
    // justify-content center 
    // align-items center 
    // .tab-item
    //   flex:1
    //   background-color blue
  .router
    height 400px
</style>
