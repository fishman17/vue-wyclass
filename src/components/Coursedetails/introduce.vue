<template>
  <div class="wrapper">
    <div class="head">
      <h1>{{course.title}}</h1>
      <span>{{course.learnNumber}}人在学</span>
      <p>￥{{course.newPrice}}</p>
    </div>
    <div class="main-message" v-if="course.introduce">
      <h3>课程介绍</h3>
      <span>{{course.introduce.courseIntroduce}}</span>
      <h3>适用人群</h3>
      <span>{{course.introduce.fitPeople}}</span>
      <h3>提供方</h3>
      <div class="people">
        <img :src="course.introduce.provider.imgSrc" alt="">
        <div class="people-detail">
          <p>{{course.introduce.provider.name}}</p>
          <span>{{course.introduce.provider.introduce}}</span>
        </div>
        
      </div>
      <h3>讲师</h3>
      <div class="people">
        <img :src="course.introduce.teacher.imgSrc" alt="">
        <div class="people-detail">
          <p>{{course.introduce.teacher.name}}</p>
          <span>{{course.introduce.teacher.introduce}}</span>
        </div>
        
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  props:{
    course:Object,
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  background-color #f2f4f7
  margin-bottom 3rem
  .head
    padding-left 0.6rem
    background-color white
    h1
      font-size 0.4rem
    span
      font-size 0.35rem
    p 
      font-size 0.46933rem
      color #ff4400
      margin-top 0.2rem
      padding-bottom  0.3rem
  .main-message
    background-color white
    padding-left 0.6rem
    h3
      padding-top 0.2rem
      margin-bottom 0.3rem
    .people
      display flex
      // justify-content center 
      align-items center
      .people-detail
        display inline-block
        margin-left 0.2rem
        height 1.5rem
        line-height 0.75rem 
        p
          margin 0
      img 
        width 1rem
        height 1rem
        border-radius 50%
        vertical-align top

</style>