<template>
  <div class="wrapper">
    <div class="title">
        <span class="back" @click="back">&lt;</span>
        <span class="head">课程界面</span>
    </div>
    <img :src="course.imgSrc" alt="" class="main-image">
    <mt-navbar v-model="selected">
        <mt-tab-item id="1">介绍</mt-tab-item>
        <mt-tab-item id="2">目录</mt-tab-item>
        <mt-tab-item id="3">评价</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected" swipeable>
      <mt-tab-container-item id="1">
        <introduce :course="course"/>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <catalog :course="course"/>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <comment :course="course"/>
      </mt-tab-container-item>
    </mt-tab-container>
    <div class="fixed">
        <div class="want" @click="wantLearn">
            <i class="icon iconfont icon-xiangqu" :class="isWantLearn? 'active':''"></i>
            <span>想学</span>
        </div>
        <div class="addtostudy">
            <i class="icon iconfont icon-jia"></i>
            <span>加入学习</span>
        </div>
    </div>
  </div>
</template>

<script>
import catalog from '@/components/Coursedetails/catalog'
import comment from '@/components/Coursedetails/comment'
import introduce from '@/components/Coursedetails/introduce'
import {findCourseById} from '@/api/api'
export default {
    components:{
        catalog,
        comment,
        introduce,
    },
    data(){
        return{
            course:{
                    // title:'假期攻略:放假提升能力8堂必修课',
                    // imgSrc:'http://edu-image.nosdn.127.net/1c6b772a-9d4a-4356-90d0-66f6e364d852.jpg?imageView&thumbnail=960y440&quality=100',
                    // starLevel: 4.6,
                    // learnNumber: 468,
                    // newPrice:'16.90',
                    // oldPrice:'69.00',
                    // introduce:{
                    //   courseIntroduce:'这是一堂厉害的课',
                    //   fitPeople: '摄影爱好者',
                    //   provider: {
                    //     imgSrc:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2821683830,3552358787&fm=27&gp=0.jpg',
                    //     name:'视觉摄影FUN及后期课堂',
                    //     introduce: '是一个工作室',
                    //   },
                    //   teacher:{
                    //     imgSrc: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1716543176,2846776791&fm=27&gp=0.jpg',
                    //     name: '雷波',
                    //     introduce:'是一个老师',
                    //   }
                    // },
                  },
            selected: '1',
            isWantLearn: true,   //想学icon红心是否点亮，依赖于用户我的收藏中是否存在当前课程
        }
    },
    methods:{
        back(){
            this.$router.go('-1');
        },
        wantLearn(){
            this.isWantLearn = !this.isWantLearn;
        }
    },
    mounted(){
      findCourseById({id:this.$route.query.id}).then((res)=>{
        // console.log(res+"ggg");
        this.course = res;
      })
    }
}
</script>

<style lang="stylus" scoped>
.wrapper
  background-color white
  .title
    position fixed
    top 0
    right 0
    left 0
    height 1.2rem
    background-color white
    line-height 1.2rem
    .back
      font-size 0.8rem
      margin-left 0.3rem
    .head
      font-size 0.6rem
      position absolute
      left 38%
  .main-image
    margin-top 1.2rem
    width 10rem
    height 5.5rem
  .fixed
    position fixed 
    bottom 0
    left 0
    right 0
    height 1rem
    font-size 0
    text-align center
    line-height 1rem
    border-top 1px solid #e6eaf2
    margin-bottom -1px
    .want
      width 5rem
      display inline-block
      background-color white
      font-size 0.4rem
      .active
        color red
    .addtostudy
      width 5rem
      display inline-block
      background-color #ff632a
      font-size 0.4rem
</style>
