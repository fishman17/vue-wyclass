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
export default {
  data(){
    return{
      experts:[
        {
          name: 'expert1',
          describe: 'something that he have done',
          imgSrc:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1903935979,3194866924&fm=27&gp=0.jpg',
          courseNumber: 19,
          studentNumber: 189720,
          recommendCourse: '序列模型',
        },
        {
          name: 'expert2',
          describe: 'something that he have done',
          imgSrc:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1903935979,3194866924&fm=27&gp=0.jpg',
          courseNumber: 19,
          studentNumber: 189720,
          recommendCourse: '序列模型',
        },
        {
          name: 'expert3',
          describe: 'something that he have done',
          imgSrc:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2416317344,3243643264&fm=27&gp=0.jpg',
          courseNumber: 19,
          studentNumber: 189720,
          recommendCourse: '序列模型',
        },
        {
          name: 'expert4',
          describe: 'something that he have done',
          imgSrc:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2416317344,3243643264&fm=27&gp=0.jpg',
          courseNumber: 19,
          studentNumber: 189720,
          recommendCourse: '序列模型',
        },
        {
          name: 'expert5',
          describe: 'something that he have done',
          imgSrc:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2416317344,3243643264&fm=27&gp=0.jpg',
          courseNumber: 19,
          studentNumber: 189720,
          recommendCourse: '序列模型',
        },
        {
          name: 'expert6',
          describe: 'something that he have done',
          imgSrc:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2416317344,3243643264&fm=27&gp=0.jpg',
          courseNumber: 19,
          studentNumber: 189720,
          recommendCourse: '序列模型',
        },
        {
          name: 'expert7',
          describe: 'something that he have done',
          imgSrc:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2416317344,3243643264&fm=27&gp=0.jpg',
          courseNumber: 19,
          studentNumber: 189720,
          recommendCourse: '序列模型',
        },
        {
          name: 'expert8',
          describe: 'something that he have done',
          imgSrc:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2416317344,3243643264&fm=27&gp=0.jpg',
          courseNumber: 19,
          studentNumber: 189720,
          recommendCourse: '序列模型',
        },
        {
          name: 'expert9',
          describe: 'something that he have done',
          imgSrc:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2416317344,3243643264&fm=27&gp=0.jpg',
          courseNumber: 19,
          studentNumber: 189720,
          recommendCourse: '序列模型',
        },
        {
          name: 'expert10',
          describe: 'something that he have done',
          imgSrc:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1903935979,3194866924&fm=27&gp=0.jpg',
          courseNumber: 19,
          studentNumber: 189720,
          recommendCourse: '序列模型',
        },
      ]
    }
  }
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
    border-bottom 1px solid blue
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
        color blue
      .number
        color blue
    .recommend
      font-size 0.4rem
      margin 0.3rem
      text-align left
      span 
        color blue
        white-space nowrap
        overflow hidden
        text-overflow ellipsis 
</style>

