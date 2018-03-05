<template>
  <div class="wrapper">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in classic.swiperCourse" :key="item.id" class="item" > 
        <img :src="item.imgSrc" alt="" class="image" @click="changeToCoursedetails(item)">
      </mt-swipe-item>
    </mt-swipe>
    <div class="courses">
      <ul class="recommend" v-for="types in classic.courses" :key="types.id">
        <span class="head">{{types.head}}</span>
        <li v-for="course in types.data" :key="course.id" class="course-detail" @click="changeToCoursedetails(course)">
          <img :src="course.imgSrc" alt="">
          <span class="title">{{course.title}}</span>
          <div class="relevent">
            <star :size="24" :score="course.starLevel" class="star"></star>
            <span class="starlevel">{{course.starLevel}}</span>
            <span class="learnnumber">{{course.learnNumber}}人学过</span>
            <span class="newprice">￥{{course.newPrice}}</span>
            <span class="oldprice" v-if="course.oldPrice">￥{{course.oldPrice}}</span>
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
import star from '@/components/star/star'
import {getClassic} from '@/api/api'
export default {
  data(){
    return{
        classic:{}
    }
  },
  components:{
    star,
  },
  methods:{
    changeToCoursedetails(course){
      this.$router.push({path:"/home/coursedetails" , query:{id:course.id}})
      // this.$router.push({name:"Coursedetails" , params:{id:course.id}})
    },
  },
  mounted(){
    getClassic().then(res=>{
      this.classic= res;
    })
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  // overflow scroll
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
    .recommend
      margin 0
      padding 0
      .head
        display block
        font-size 0.47rem
        margin 0.42667rem
        margin-bottom 0
        font-weight 600
      .course-detail
        list-style-type none
        width 4.224rem
        height 5.12rem
        display inline-block
        margin-top 0.42667rem
        margin 0.384rem
        vertical-align: middle
        &:active
          background-color #f2f4f7
        &>img 
          width 4.224rem
          height 2.56rem
        // .title
        .title
          font-size #333440
        .relevent
          .star
            display inline-block
          .starlevel
          .learnnumber
            font-size 0.29867rem
            color #a6abb3
          .newprice 
            font-size 0.46933rem
            color #ff4400
          .oldprice
            position relative
            display inline-block
            font-size 0.34134rem
            color #a6abb3
            &:after
              position absolute
              top 50%
              right -5%
              content ''
              width 1.2667rem
              height 0.04267rem
              background-color #a6abb3
      
</style>
