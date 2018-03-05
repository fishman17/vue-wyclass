<template>
  <div class="wrapper">
    <span class="title">推荐行家</span>
    <div class="expert" v-for="expert in experts" :key="expert.id">
      <img :src="expert.imgSrc" alt="" class="avatar">
      <div class="expert-detail">
        <span class="name">{{expert.name}}</span>
        <span class="describe">{{expert.describe}}</span>
        <span class="number">{{expert.courseNumber}}门课程|{{expert.studentNumber}}位学员</span>
      </div>
      <div class="recommend">推荐学习:&nbsp;&nbsp;&nbsp;<span>{{expert.recommendCourse}}</span></div>
    </div>
  </div>
</template>

<script>
import {getExpert} from '@/api/api'
export default {
  data(){
    return{
      experts:[]
    }
  },
  mounted(){
    getExpert().then(res=>{
      this.experts= res.experts;
    })
  },

}
</script>

<style lang="stylus" scoped>
.wrapper
  margin-bottom 2rem
  .title
    text-align left 
    font-weight bolder
    font-size 0.4rem
    margin-left 0.5rem
  .expert
    width 10rem
    border-bottom 1px solid #e6eaf2
    &:active
      background-color #f2f4f7
    img 
      width 2rem
      height 2rem
      border-radius 50%
      vertical-align top
      margin-left 0.3rem
      margin-top 0.3rem
    .expert-detail
      display inline-block
      margin 0.3rem
      font-size 0.4rem
      .name 
        display block
        margin-bottom 0.2rem
      .describe
        display block
        margin-bottom 0.2rem
        color #8b8f97
      .number
        color #8b8f97
    .recommend
      font-size 0.4rem
      margin 0.3rem
      text-align left
      color #8b8f97
      span 
        color black
        white-space nowrap
        overflow hidden
        text-overflow ellipsis 
</style>

