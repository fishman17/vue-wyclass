<template>
  <div class="wrapper">
      <!-- <div class="toolbar">一些工具</div>
      <div class="img"><img src="" alt=""></div>
      <div class="tab border-1px">
        <div class="tab-item">
            <router-link to="introduce">介绍</router-link>
        </div>
        <div class="tab-item">
            <router-link to="catalog">目录</router-link>
        </div>
        <div class="tab-item">
            <router-link to="comment">评价</router-link>
        </div>
      </div>
      <router-view></router-view> -->
    <div class="title">
        <span class="back" @click="back">&lt;</span>
        <span class="title">课程界面</span>
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
        <div class="want">
            <i></i>
            <span>想学</span>
        </div>
        <div class="addtostudy">
            <i></i>
            <span>加入学习</span>
        </div>
    </div>
  </div>
</template>

<script>
import catalog from '@/components/Coursedetails/catalog'
import comment from '@/components/Coursedetails/comment'
import introduce from '@/components/Coursedetails/introduce'
export default {
    components:{
        catalog,
        comment,
        introduce,
    },
    data(){
        return{
            course:{
                    title:'假期攻略:放假提升能力8堂必修课',
                    imgSrc:'http://edu-image.nosdn.127.net/1c6b772a-9d4a-4356-90d0-66f6e364d852.jpg?imageView&thumbnail=960y440&quality=100',
                    starLevel: 4.6,
                    learnNumber: 468,
                    newPrice:'16.90',
                    oldPrice:'69.00',
                    introduce:{
                      courseIntroduce:'这是一堂厉害的课',
                      fitPeople: '摄影爱好者',
                      provider: {
                        imgSrc:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2821683830,3552358787&fm=27&gp=0.jpg',
                        name:'视觉摄影FUN及后期课堂',
                        introduce: '是一个工作室',
                      },
                      teacher:{
                        imgSrc: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1716543176,2846776791&fm=27&gp=0.jpg',
                        name: '雷波',
                        introduce:'是一个老师',
                      }
                    },
                  },
            selected: '1'
        }
    },
    methods:{
        back(){
            this.$router.go('-1');
        }
    }
}
</script>

<style lang="stylus" scoped>
.wrapper
  background-color white
  .title
    height 1.2rem
    background-color #f7f9fc
    line-height 1.2rem
    .back
      font-size 0.8rem
      margin-left 0.3rem
    .title
      font-size 0.6rem
      position absolute
      left 45%
  .main-image
    width 10rem
    height 4rem
</style>
