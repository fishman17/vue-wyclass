<template>
  <div class="wrapper">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in classic.swiperCourse" :key="item.id" class="item">
        <img :src="item.imgSrc" alt="" class="image">
      </mt-swipe-item>
    </mt-swipe>
    <div class="courses">
      <ul class="recommend" v-for="types in classic.courses" :key="types.id">
        <span class="head">{{types.head}}</span>
        <li v-for="course in types.data" :key="course.id" class="course-detail">
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
export default {
  data(){
    return{
        classic:{
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
          series:[],
          courses:[
            {
              head:'精选好课',
              data: [
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
                    title:'呃呃呃呃呃呃呃嗯嗯嗯嗯嗯呃呃呃呃呃呃呃呃呃呃呃鹅鹅鹅鹅鹅鹅饿',
                    imgSrc:'http://edu-image.nosdn.127.net/4fef8668-4a30-4764-bb9a-9659b7c581b5.jpg?imageView&thumbnail=960y440&quality=100',
                    starLevel: 4.6,
                    learnNumber: 468,
                    newPrice:'16.90',
                  
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
                  }
              ],
            },
            {
              head:'免费好课',
              data: [
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
                    title:'呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃鹅鹅鹅鹅鹅鹅饿',
                    imgSrc:'http://edu-image.nosdn.127.net/4fef8668-4a30-4764-bb9a-9659b7c581b5.jpg?imageView&thumbnail=960y440&quality=100',
                    starLevel: 4.6,
                    learnNumber: 468,
                    newPrice:'16.90',
                  
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
                  }
              ],
            }
          ]
          }
    }
  },
  components:{
    star,
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
