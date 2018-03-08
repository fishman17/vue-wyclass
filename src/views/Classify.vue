<template>
  <div class="wrapper">
    <search :isSearching="false" @click.native="changeToSearch" class="search"></search>
    <ul class="left">
      <li v-for="(item, index) in classes" :key="item.id" class="left-class" :class="item.isClick?'active':''" @click="changeTitle(index)">
        <span class="title">{{item.title}}</span>
      </li>
    </ul>
    <div class="right">
      <div v-for="src in nowClass.img" :key="src.id" class="image">
        <img :src="src" alt="">
      </div>
      <ul v-for="item in nowClass.class" :key="item.id" class="right-class">
        <span class="head">{{item.head}}</span>
        <div class="someclass">
          <li v-for="detail in item.detail" :key="detail.id">
          <span class="detail">{{detail}}</span>
          </li>
        </div>
        
      </ul>
    </div>
    
  </div>
</template>

<script>
import search from "@/components/search"
import { getClassify } from "@/api/api"
export default {
  data() {
    return {
      classes: [],
      nowClass:{},
    };
  },
  components: {
    search
  },
  methods: {
    changeToSearch() {
      this.$router.push({ path: "home/search" });
    },
    changeTitle(key) {         //改变css样式（当前点亮）
      let classes = this.classes;
      for (let item of classes) {
        item.isClick = false;
      }
      classes[key].isClick = true;
      this.nowClass = classes[key];
    }
  },
  mounted() {
    getClassify().then(res => {
      // console.log(res);
      let classes = res;
      for (let item of classes) {
        // this.$set(item, "isClick", false);
        item.isClick = false
      }
      classes[0].isClick = true;
      this.classes = classes
      this.nowClass = classes[0];
    });
  }
};
</script>

<style lang="stylus" scoped>
.wrapper
  position fixed
  height 92%
  width 100%
  overflow scroll
  .search
    position fixed
    overflow hidden
  .mint-search
    height initial
  .left
    position fixed
    width 2.56rem
    height 100%
    background-color #f7f9fc
    margin 0
    padding 0
    list-style-type none
    margin-top 1.28rem
    .left-class
      height 1.4506rem
      font-size 0.354rem
      line-height 1.4506rem
      text-align left
      .title
        display block
        margin-left 0.42667rem
      &.active
        background-color white
        font-weight bolder
        position relative
        &:before
          content ''
          position absolute
          width 0.128rem
          height 1.4506rem
          background-color #2cc17b
  .right
    width 6.61323rem
    // margin 1rem
    margin-left 2.9867rem
    margin-top 1.28rem
    margin-right 0.42666rem
    margin-bottom 0.85332rem
    .image
      display inline-block
      width 6.61323rem
      &> img
        width 6.61323rem
        height 2.56rem
    .right-class
      list-style-type none
      margin 0
      padding 0
      margin-top 0.42666rem
      .head
        font-weight bolder
        display block
        position relative
        &:after
          border solid 1px black
          border-bottom-width 0
          border-left-width 0
          content ' '
          top 55%
          position absolute
          width 7px
          height 7px
          -webkit-transform translateY(-50%) rotate(45deg)
          transform translateY(-50%) rotate(45deg)
      .someclass
        &>li
          flex 1
          display inline-block
          margin-top 0.42666rem
          margin-right 0.085332rem
        .detail
          width 2.048rem
          height 0.7111rem
          line-height 0.7111rem
          // margin
          display block
          border 1px solid #d5dae7
          border-radius 0.42667rem
          text-align center
          font-size 0.34134rem
          &:active
            background-color #f2f4f7
</style>

