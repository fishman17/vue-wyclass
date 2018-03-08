<template>
      <div class="wrapper">
        
        <div class="search">
        
          <div class="searchbar">
            <i class="mintui mintui-search"></i>
            <form action="" class="form">
            <input
            ref="input"
            @click="visible = true"
            type="search"
            v-model="currentValue"
            :placeholder="placeholder"
             class="input"
            @change="change">
            </form>
          </div>
          <a class="back" @click="back" v-show="isSearching">取消</a>
        </div>

        <div class="content" v-if="isShowContent">
          <li class="result" v-for="item in result" :key="item.id">
            <mt-cell :title="item.title"  is-link  @click.native="changeToCourseDetail(item)">
            </mt-cell>
          </li>
          <div class="notfound" v-if="!result.length">
            <h1>NOT Found</h1>
          </div>
        </div>
      </div>
      
</template>

<script>
import { getAllclass } from "@/api/api";
export default {
  props: {
    isSearching: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      currentValue: null,
      visible: false,
      placeholder: "搜索我感兴趣的内容",
      allClass: [],
      result: [],
      isShowContent: false
    };
  },
  methods: {
    back() {
      this.$router.go("-1");
    },
    change(event) {
      this.result = this.allClass.filter(item => {
        if (item.title.indexOf(event.target.value) >= 0) {
          return item;
        }
      });
    },
    changeToCourseDetail(course) {
      this.$router.push({
        path: "/home/coursedetails",
        query: { id: course.id }
      });
    }
  },
  mounted() {
    getAllclass().then(res => {
      this.allClass = res;
    });
    if (this.$route.path == "/home/search") {
      this.isShowContent = true;
    } else this.isShowContent = false;
  }
};
</script>

<style lang="stylus" scoped>
.wrapper
  .search
    height 1.28rem
    width 100%
    margin 0 auto
    display flex
    align-items center
    justify-content center
    background-color white
    .searchbar
      background-color #f2f4f7
      flex 9
      margin 0.28444rem
      border-radius 0.42666rem
      .mintui-search
        line-height 0.71111rem
        margin-left 0.28444rem
      .form
        display inline
        .input
          background-color #f2f4f7
          width 85%
          height 0.83222rem
          border 0
          outline none
    .back
      text-align center
      flex 1
      &:active
        background-color #f2f4f7
  .content
    .result
      list-style-type none
      .mint-cell-wrapper
        font-size 0.3rem
    .notfound
      text-align center
</style>
