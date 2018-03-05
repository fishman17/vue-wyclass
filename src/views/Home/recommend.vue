<template>
  <div class="wrapper">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in recommend.swiperCourse" :key="item.id" class="item" >
        <img :src="item.imgSrc" alt="" class="image" @click="changeToCoursedetails(item)">
      </mt-swipe-item>
    </mt-swipe>
    <div class="popular">
      <!-- <span class="popular-title"></span> -->
      <!-- <span v-for=""></span> -->
    </div>
    <div class="courses">
      <ul v-for="types in recommend.types" :key="types.id">
        <span class="title">{{types.title}}</span>
        <span class="head">{{types.head}}</span>
        <li v-for="course in types.courses" :key="course.id" class="course" @click="changeToCoursedetails(course)">
          <div class="course-image">
            <img :src="course.imgSrc" alt="">
          </div>
          <div class="course-detail">
            <span class="course-title">{{course.title}}</span>
            <star :size="24" :score="course.starLevel" class="star"></star>
            <span class="starlevel">{{course.starLevel}}</span>
            <span class="learnnumber">{{course.learnNumber}}人学过</span>
            <span class="mainmessage">{{course.mainMessage}}</span>
          </div>
          
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import star from '@/components/star/star'
import {getRecommend} from '@/api/api'
export default {
  data(){
    return{
        recommend:{}
    }
  },
  components:{
    star
  },
  mounted(){
    getRecommend().then(res=>{
      this.recommend= res;
    })
  },
  methods:{
    changeToCoursedetails(course){
      this.$router.push({path:"/home/coursedetails" , query:{id:course.id}})
    },
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  background-color #f2f4f7
  margin-bottom 1.28rem
  .mint-tab-container
    .mint-swipe
      height 4.2667rem
      .mint-swipe-items-wrap
        height 4.2667rem
        .image
          width 10rem
          height 4.2667rem
  .courses
    padding 0.3333rem
    margin-top 0.2rem
    background-color white
    &>ul
      padding 0
      margin-bottom 1rem
      .title
        display block
        font-size 0.3rem
        text-align center
        position relative 
        color #81929a
        &:before
          content ''
          position absolute
          top: 47%;
          left: 39%;
          width 0.35rem
          height 0.02rem
          background-color #8b8f97
        &:after
          content ''
          position absolute
          top: 47%;
          right: 39%;
          width 0.35rem
          height 0.02rem
          background-color #8b8f97
      .head
        display block
        font-size 0.6rem
        text-align center
      .course
        list-style-type none
        margin-top 0.5rem
        width 9.4rem
        height 2.5rem
        &:active
          background-color #f2f4f7
        .course-image
          display inline-block
          &>img
            width 4.2222rem
            height 2.4684rem
            vertical-align top
            border-radius 0.3rem
        .course-detail
          vertical-align: top;
          display inline-block
          margin-left 0.3333rem
          width 4.3333rem
          height 2.8684rem
          color #8b8f97
          font-size 0.3rem
          position relative
          .course-title
            display block
            color black 
            font-size 0.45rem
          .star
            display inline-block
            margin-top 0.1111rem
            margin-bottom 0.1111rem
          .mainmessage
            position absolute
            bottom 0.32rem
            display block 
            height 0.9111rem
            // white-space inherit
            // overflow hidden
            // text-overflow ellipsis 
            text-overflow: -o-ellipsis-lastline
            overflow: hidden
            text-overflow: ellipsis
            display: -webkit-box
            -webkit-line-clamp: 2
            -webkit-box-orient: vertical
            font-size 0.35rem
</style>

