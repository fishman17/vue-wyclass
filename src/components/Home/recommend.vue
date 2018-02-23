<template>
  <div class="wrapper">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in recommend.swiperCourse" :key="item.id" class="item">
        <img :src="item.imgSrc" alt="" class="image">
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
        <li v-for="course in types.courses" :key="course.id" class="course">
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
export default {
  data(){
    return{
        recommend:{
          swiperCourse:[
            {
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
                  imgSrc:'',
                  name:'视觉摄影FUN及后期课堂',
                  introduce: '是一个工作室',
                },
                teacher:{
                  imgSrc: '',
                  name: '雷波',
                  introduce:'是一个老师',
                }
              },
            },{
              title:'222222222',
              imgSrc:'http://edu-image.nosdn.127.net/4fef8668-4a30-4764-bb9a-9659b7c581b5.jpg?imageView&thumbnail=960y440&quality=100',
              starLevel: 4.6,
              learnNumber: 468,
              newPrice:'16.90',
              oldPrice:'69.00',
              introduce:{
                courseIntroduce:'这是一堂厉害的课',
                fitPeople: '摄影爱好者',
                provider: {
                  imgSrc:'',
                  name:'视觉摄影FUN及后期课堂',
                  introduce: '是一个工作室',
                },
                teacher:{
                  imgSrc: '',
                  name: '雷波',
                  introduce:'是一个老师',
                }
              },
            },{
              title:'3333333',
              imgSrc:'http://edu-image.nosdn.127.net/673f3689-7bed-4ba4-8c55-664f98ab92ad.jpg?imageView&thumbnail=960y440&quality=100',
              starLevel: 4.6,
              learnNumber: 468,
              newPrice:'16.90',
              oldPrice:'69.00',
              introduce:{
                courseIntroduce:'这是一堂厉害的课',
                fitPeople: '摄影爱好者',
                provider: {
                  imgSrc:'',
                  name:'视觉摄影FUN及后期课堂',
                  introduce: '是一个工作室',
                },
                teacher:{
                  imgSrc: '',
                  name: '雷波',
                  introduce:'是一个老师',
                }
              },
            },{
              title:'4444444',
              imgSrc:'http://edu-image.nosdn.127.net/5639de2d-bc47-43bb-a3f1-49bd2c474928.png?imageView&thumbnail=960y440&quality=100',
              starLevel: 4.6,
              learnNumber: 468,
              newPrice:'16.90',
              oldPrice:'69.00',
              introduce:{
                courseIntroduce:'这是一堂厉害的课',
                fitPeople: '摄影爱好者',
                provider: {
                  imgSrc:'',
                  name:'视觉摄影FUN及后期课堂',
                  introduce: '是一个工作室',
                },
                teacher:{
                  imgSrc: '',
                  name: '雷波',
                  introduce:'是一个老师',
                }
              },
          }],
          popular:{
            title:'热门新知',
            feed:['']
          },
          types:[
            {
              title: '编辑精选',
              head:'探索人工智能奥秘',
              courses:[
                  {
                    title:'我们管他叫人工智能课程1',
                    imgSrc:'http://edu-image.nosdn.127.net/1c6b772a-9d4a-4356-90d0-66f6e364d852.jpg?imageView&thumbnail=960y440&quality=100',
                    starLevel: 4.6,
                    learnNumber: 468,
                    newPrice:'16.90',
                    oldPrice:'69.00',
                    mainMessage:'由浅入深的讲解Excel Power Pivot的基础知识，以及从数据获取、分析到展现的全过程，通过学习本课程，可以快速的通过Excel Power Pivot进行数据建模分析，作出让老板眼前一亮的企业级分析报告。',
                    introduce:{
                      courseIntroduce:'这是一堂厉害的课',
                      fitPeople: '摄影爱好者',
                      provider: {
                        imgSrc:'',
                        name:'视觉摄影FUN及后期课堂',
                        introduce: '是一个工作室',
                      },
                      teacher:{
                        imgSrc: '',
                        name: '雷波',
                        introduce:'是一个老师',
                      }
                    },
                  },{
                    title:'我们管他叫人工智能课程2',
                    imgSrc:'http://edu-image.nosdn.127.net/4fef8668-4a30-4764-bb9a-9659b7c581b5.jpg?imageView&thumbnail=960y440&quality=100',
                    starLevel: 4.6,
                    learnNumber: 468,
                    newPrice:'16.90',
                    mainMessage:'222由浅入深的讲解Excel Power Pivot的基础知识，以及从数据获取、分析到展现的全过程，通过学习本课程，可以快速的通过Excel Power Pivot进行数据建模分析，作出让老板眼前一亮的企业级分析报告。',
                    introduce:{
                      courseIntroduce:'这是一堂厉害的课',
                      fitPeople: '摄影爱好者',
                      provider: {
                        imgSrc:'',
                        name:'视觉摄影FUN及后期课堂',
                        introduce: '是一个工作室',
                      },
                      teacher:{
                        imgSrc: '',
                        name: '雷波',
                        introduce:'是一个老师',
                      }
                    },
                  },{
                    title:'我们管他叫人工智能课程3',
                    imgSrc:'http://edu-image.nosdn.127.net/673f3689-7bed-4ba4-8c55-664f98ab92ad.jpg?imageView&thumbnail=960y440&quality=100',
                    starLevel: 4.6,
                    learnNumber: 468,
                    newPrice:'16.90',
                    oldPrice:'69.00',
                    mainMessage:'333由浅入深的讲解Excel Power Pivot的基础知识，以及从数据获取、分析到展现的全过程，通过学习本课程，可以快速的通过Excel Power Pivot进行数据建模分析，作出让老板眼前一亮的企业级分析报告。',
                    introduce:{
                      courseIntroduce:'这是一堂厉害的课',
                      fitPeople: '摄影爱好者',
                      provider: {
                        imgSrc:'',
                        name:'视觉摄影FUN及后期课堂',
                        introduce: '是一个工作室',
                      },
                      teacher:{
                        imgSrc: '',
                        name: '雷波',
                        introduce:'是一个老师',
                      }
                    },
                  },{
                    title:'我们管他叫人工智能课程4',
                    imgSrc:'http://edu-image.nosdn.127.net/5639de2d-bc47-43bb-a3f1-49bd2c474928.png?imageView&thumbnail=960y440&quality=100',
                    starLevel: 4.6,
                    learnNumber: 468,
                    newPrice:'16.90',
                    oldPrice:'69.00',
                    mainMessage:'444由浅入深的讲解Excel Power Pivot的基础知识，以及从数据获取、分析到展现的全过程，通过学习本课程，可以快速的通过Excel Power Pivot进行数据建模分析，作出让老板眼前一亮的企业级分析报告。',
                    introduce:{
                      courseIntroduce:'这是一堂厉害的课',
                      fitPeople: '摄影爱好者',
                      provider: {
                        imgSrc:'',
                        name:'视觉摄影FUN及后期课堂',
                        introduce: '是一个工作室',
                      },
                      teacher:{
                        imgSrc: '',
                        name: '雷波',
                        introduce:'是一个老师',
                      }
                    },
                  }
              ],
            },
             {
              title: '时间管理',
              head:'探索时间的奥秘',
              courses:[
                  {
                    title:'我们管他叫时间管理课程1',
                    imgSrc:'http://edu-image.nosdn.127.net/1c6b772a-9d4a-4356-90d0-66f6e364d852.jpg?imageView&thumbnail=960y440&quality=100',
                    starLevel: 4.6,
                    learnNumber: 468,
                    newPrice:'16.90',
                    oldPrice:'69.00',
                    mainMessage:'PPT在线课程三冠王，王牌首选爆款课程，畅销四年遥遥领先，超6万人学习好评如潮！、课程不限时间和次数~',
                    introduce:{
                      courseIntroduce:'这是一堂厉害的课',
                      fitPeople: '摄影爱好者',
                      provider: {
                        imgSrc:'',
                        name:'视觉摄影FUN及后期课堂',
                        introduce: '是一个工作室',
                      },
                      teacher:{
                        imgSrc: '',
                        name: '雷波',
                        introduce:'是一个老师',
                      }
                    },
                  },{
                    title:'我们管他叫时间管理课程2',
                    imgSrc:'http://edu-image.nosdn.127.net/4fef8668-4a30-4764-bb9a-9659b7c581b5.jpg?imageView&thumbnail=960y440&quality=100',
                    starLevel: 4.6,
                    learnNumber: 468,
                    newPrice:'16.90',
                    mainMessage:'222222222222PPT在线课程三冠王，王牌首选爆款课程，畅销四年遥遥领先，超6万人学习好评如潮！、课程不限时间和次数~',
                    introduce:{
                      courseIntroduce:'这是一堂厉害的课',
                      fitPeople: '摄影爱好者',
                      provider: {
                        imgSrc:'',
                        name:'视觉摄影FUN及后期课堂',
                        introduce: '是一个工作室',
                      },
                      teacher:{
                        imgSrc: '',
                        name: '雷波',
                        introduce:'是一个老师',
                      }
                    },
                  },{
                    title:'我们管他叫时间管理课程3',
                    imgSrc:'http://edu-image.nosdn.127.net/673f3689-7bed-4ba4-8c55-664f98ab92ad.jpg?imageView&thumbnail=960y440&quality=100',
                    starLevel: 4.6,
                    learnNumber: 468,
                    newPrice:'16.90',
                    oldPrice:'69.00',
                    mainMessage:'333333333PPT在线课程三冠王，王牌首选爆款课程，畅销四年遥遥领先，超6万人学习好评如潮！、课程不限时间和次数~',
                    introduce:{
                      courseIntroduce:'这是一堂厉害的课',
                      fitPeople: '摄影爱好者',
                      provider: {
                        imgSrc:'',
                        name:'视觉摄影FUN及后期课堂',
                        introduce: '是一个工作室',
                      },
                      teacher:{
                        imgSrc: '',
                        name: '雷波',
                        introduce:'是一个老师',
                      }
                    },
                  }
              ],
            }
          ]
      }
    }
  },
  components:{
    star
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
    background-color white
    padding 0.3333rem
    margin-top 0.2rem
    &>ul
      padding 0
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
          height 0.01rem
          background-color #8b8f97
        &:after
          content ''
          position absolute
          top: 47%;
          right: 39%;
          width 0.35rem
          height 0.01rem
          background-color #8b8f97
      .head
        display block
        font-size 0.6rem
        text-align center
      .course
        list-style-type none
        margin-top 0.5rem
        width 10rem
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
          .course-title
            display block
            color black 
            font-size 0.45rem
          .star
            display inline-block
            margin-top 0.1111rem
            margin-bottom 0.1111rem
          .mainmessage
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

