<template>
<div class="test">
  <div class="wrapper">
    <div class="majors" v-for="major in majors" :key="major.id">
      <img :src="major.imgSrc" alt="">
      <h1 class="title">{{major.title}}</h1>
      <span class="message">{{major.message}}</span>
    </div>
  </div>
</div>

</template>

<script>
export default {
  data(){
    return{
      majors:[
        {
          title: '互联网项目管理',
          imgSrc: 'http://edu-image.nosdn.127.net/51CA69A972018C5E58C43B4168024BB5.jpg',
          message:'三节课联合网易共同打造，带你系统掌握 网易 & BAT 内部产品经理在设计产品过程中的工作技能、方法、流程！通过高强度训练，帮你掌握产品经理必备核心技能！'
        },
        {
          title: '初级UI设计师',
          imgSrc: 'http://edu-image.nosdn.127.net/8D7A4CD2B783EBC244D9F6FDE6543BFB.png?imageView&thumbnail=470y184&quality=100',
          message:'三节课联合网易共同打造，带你系统掌握 网易 & BAT 内部产品经理在设计产品过程中的工作技能、方法、流程！通过高强度训练，帮你掌握产品经理必备核心技能！'
        },
        {
          title: '高级UI设计师',
          imgSrc: 'http://edu-image.nosdn.127.net/FC783BBB34B5B7CD0AAF2160CB05EC35.jpg?imageView&thumbnail=470y184&quality=100',
          message:'三节课联合网易共同打造，带你系统掌握 网易 & BAT 内部产品经理在设计产品过程中的工作技能、方法、流程！通过高强度训练，帮你掌握产品经理必备核心技能！'
        },
        {
          title: '产品经理',
          imgSrc: 'http://edu-image.nosdn.127.net/94821B045079F13CFE22BC4E9699E88B.jpg?imageView&thumbnail=470y184&quality=100',
          message:'三节课联合网易共同打造，带你系统掌握 网易 & BAT 内部产品经理在设计产品过程中的工作技能、方法、流程！通过高强度训练，帮你掌握产品经理必备核心技能！'
        },
        {
          title: '产品运营',
          imgSrc: 'http://nos.netease.com/edu-image/1F301F2A80E190306025D2F8CA7C4FF6.jpg?imageView&thumbnail=470y184&quality=100',
          message:'三节课联合网易共同打造，带你系统掌握 网易 & BAT 内部产品经理在设计产品过程中的工作技能、方法、流程！通过高强度训练，帮你掌握产品经理必备核心技能！'
        },
        {
          title: '全栈新媒体运营',
          imgSrc: 'http://edu-image.nosdn.127.net/9AEAE3BF26DEE81105B54354B385B0D9.jpg',
          message:'三节课联合网易共同打造，带你系统掌握 网易 & BAT 内部产品经理在设计产品过程中的工作技能、方法、流程！通过高强度训练，帮你掌握产品经理必备核心技能！'
        },
        
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  background-color #f7f7f7
  padding 0.3rem
  margin-bottom 1rem
  .majors
    box-sizing border-box
    width 9.4rem
    background-color white
    padding 0.3rem
    margin-bottom 0.3rem
    img 
      width 8.8rem
      height 5rem
    .title
      // display block 
      font-size 0.5rem
    .message
      height 0.5rem
      font-size 0.35rem
      color #859295
      display block
      white-space nowrap
      overflow hidden
      text-overflow ellipsis 
      // text-overflow: -o-ellipsis-lastline
      // overflow: hidden
      // text-overflow: ellipsis
      // display: -webkit-box
      // -webkit-line-clamp: 1
      // -webkit-box-orient: vertical
</style>
