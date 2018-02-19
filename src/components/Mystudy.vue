<template>
  <div class="wrapper">
    <div class="user">
      <img :src="user.src" alt="" class="avatar"/>
      <div class="description">
        <p class="title">{{user.username}}</p>
        <span class="target">{{user.target}}</span>
      </div>
      <div class="manage">
        <span class="myorder">我的订阅</span>
        <span class="mycollect">我的收藏</span>
        <span class="mydown">我的下载</span>
      </div>
    </div>
    <div class="nowlearn">
      <div class="head">
        <span class="title">在学的课程</span>
        <span class="seeall">查看全部</span>
      </div>
      <ul class="allclass" >
        <li v-for="classes in classList" :key="classes.id" class="class" @click="changeToDetail(classes)">
          <div class="class-description">
            <p class="title">{{classes.title}}</p>
            <span class="progress">已学{{classes.progress}}%</span>
          </div>
          <img :src="classes.imgSrc" alt="" class="class-img">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      user: {
        src: 'http://img1.imgtn.bdimg.com/it/u=3198762613,766144830&fm=27&gp=0.jpg',
        username: 'dmy123456789',
        ways: '通过qq登录',
        target: '2018好好奋斗，加油',
        nowLearnClass: [
          {id:18001,progress:5},
          {id:18003,progress:0},
          {id:18005,progress:34},
          {id:18006,progress:100}],
      },
      classList : [],
      allClass : [
        {id:18001,title:'C/C++',imgSrc:"http://img-ph-mirror.nosdn.127.net/nShw94SiVxzgQevSJqNElg==/6631798940933044057.png?imageView&thumbnail=223y124&quality=100"},
        {id:18002,title:'深度学习入门系列',imgSrc:"http://edu-image.nosdn.127.net/17ACCC2458A3B49A763E10FB9D133A4A.jpg?imageView&thumbnail=223y124&quality=100"},
        {id:18003,title:'JS游戏--别踩白块',imgSrc:"http://img-ph-mirror.nosdn.127.net/hh5kcySxlbimS4ZGB5jdsA==/3196429835626448852.png?imageView&thumbnail=223y124&quality=100"},
        {id:18004,title:'跟郝敏老师学声乐唱歌技巧',imgSrc:"http://img-ph-mirror.nosdn.127.net/9qAwvh_VGX8h0W3x-VmGRA==/6597390824054084846.jpg?imageView&thumbnail=223y124&quality=100"},
        {id:18005,title:'Git实用教程',imgSrc:"http://img-ph-mirror.nosdn.127.net/8ObC7AzOsOVAR8ph-6-MJw==/6631564744955406715.png?imageView&thumbnail=223y124&quality=100"},
        {id:18006,title:'高效阅读：如何投资你的碎片化时间',imgSrc:"http://edu-image.nosdn.127.net/8F0FC44AFD2BB8874A3150254198FC91.png?imageView&thumbnail=450y250&quality=100"},
      
      ],
    }
  },
  mounted(){
    this.user.nowLearnClass.map((item)=>{
      this.checkList(item);
      });
    console.log(this.classList);
  },
  methods:{
    checkList(item){    //通过user中的所学课程id从所有课程中寻找详细课程信息
      for(let key of this.allClass){
        if(key.id == item.id){
          key.progress = item.progress;
          this.classList.push(key);
        }
      }
    },
    changeToDetail(classes){
      console.log(classes);
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper 
  background-color: #d9d9d9;
  width: 100%;
  height: 92%;
  position: fixed;
  overflow: scroll;
  .user
    // height 7rem
    background-color: white;
    border-bottom: 0.1rem solid #ced1da;
    padding: 1rem;
    .nav 
      margin-top: 8px;
      margin-bottom: 0;
    .avatar 
      width: 4rem;
      height: 4rem;
      border-radius: 4rem;
      border: 0.3333rem solid #ced1da;
      display: inline-block;
      margin-left: 0.5rem;
      margin-top: 0.5rem;
    .description 
      display: inline-block;
      vertical-align: top;
      margin-left: 0.5rem;
      .title 
        font-size: 1.5rem;
        font-weight: 600;
        margin-top: 1rem;
        margin-bottom: 0;
      .target 
        display: inline-block;
        margin-top: 0.5rem;
        font-size: 0.8rem;
    .manage 
      display: flex;
      &>span 
        margin-top: 1rem;
        flex: 1;
        text-align: center;
        border-right: 0.1rem solid #ced1da;
        &:last-child 
          border-right: 0;
  .nowlearn 
    margin-top: 1rem;
    padding: 1rem;
    min-height: 100%;
    background-color: white;

    .head 
      .title 
        // display inline-block
        font-weight: bold;
      

      .seeall 
        position: relative;
        float: right;
        font-size: 0.8rem;
        margin-right: 1.3333rem;
        margin-top: 0.3333rem;

        &:after 
          border: solid 2px #c8c8cd;
          border-bottom-width: 0;
          border-left-width: 0;
          content: ' ';
          top: 55%;
          right: -1rem;
          position: absolute;
          width: 7px;
          height: 7px;
          -webkit-transform: translateY(-50%) rotate(45deg);
          transform: translateY(-50%) rotate(45deg);
    .allclass
      list-style-type none 
      margin 0
      margin-top 1rem
      padding 0
      .class
        height 6.66667rem
        border-bottom 1px solid black
        .class-description
          width 14rem
          display inline-block
          .title
            display block 
            height 2rem
            margin-top 0
            font-size 1.2rem;
          .progress
            display block 
            margin-top  1.3333rem
            font-size 0.8666rem;
            color green
        .class-img
          display inline-block
          width 7rem
          margin-top 1rem
          // margin-right .66667rem
</style>
