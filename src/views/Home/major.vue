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
import {getMajor} from '@/api/api'
export default {
  data(){
    return{
      majors:[]
    }
  },
  mounted(){
    getMajor().then(res=>{
      this.majors= res.majors;
    })
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
    &:active
      background-color #f2f4f7
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
