<template>
  <div class="wrapper">
    <search :isSearching="false" @click.native="changeToSearch"></search>
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
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">个性推荐</mt-tab-item>
        <mt-tab-item id="2">精品课</mt-tab-item>
        <mt-tab-item id="3">微专业</mt-tab-item>
        <mt-tab-item id="4">行家</mt-tab-item>
      </mt-navbar>
    </div>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <recommend/>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <classic/>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <expert/>
      </mt-tab-container-item>
      <mt-tab-container-item id="4">
        <major/>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import classic from "@/components/Home/classic";
import expert from "@/components/Home/expert";
import major from "@/components/Home/major";
import recommend from "@/components/Home/recommend";
import search from "@/components/search";
export default {
  components: {
    classic,
    expert,
    major,
    recommend,
    search
  },
  data(){
    return{
      selected: "1",
    }
  },
  mounted(){
  },
  methods:{
    changeToSearch(){
      this.$router.push({path:'home/search'});
    }
  }
};
</script>

<style lang="stylus" scoped>
.wrapper
  .mint-search
      height initial
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
