<template>
  <div class="wrapper">
    <div class="head">
      <h1>{{course.title}}</h1>
      <span>{{course.learnNumber}}在学</span>
      <span>{{course.newPrice}}</span>
    </div>
    <div class="main-message">
      <h3>课程介绍</h3>
      <span>{{course.introduce.courseIntroduce}}</span>
      <h3>适用人群</h3>
      <span>{{course.introduce.fitPeople}}</span>
      <h3>提供方</h3>
      <div>
        <img :src="course.introduce.provider.imgSrc" alt="">
        <span>{{course.introduce.provider.name}}</span>
        <span>{{course.introduce.provider.introduce}}</span>
      </div>
      <h3>讲师</h3>
      <div>
        <img :src="course.introduce.teacher.imgSrc" alt="">
        <span>{{course.introduce.teacher.name}}</span>
        <span>{{course.introduce.teacher.introduce}}</span>
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

</style>