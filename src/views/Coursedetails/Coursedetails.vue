<template>
  <div class="wrapper">
    <div class="title">
        <span class="back" @click="back">&lt;</span>
        <span class="head">课程界面</span>
    </div>
    <img :src="course.imgSrc" alt="" class="main-image" v-if="!userData.name || !userIsHave">
    <video controls="controls" v-if="userData.name && userIsHave">
      <source :src="course.mp4Src" type="video/mp4">     
    </video>
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
        <div class="addtostudy" @click="addUserCourse(course)">
            <i class="icon iconfont icon-jia"></i>
            <span>加入学习</span>
        </div>
    </div>
  </div>
</template>

<script>
import catalog from "@/views/Coursedetails/catalog";              
import comment from "@/views/Coursedetails/comment";
import introduce from "@/views/Coursedetails/introduce";
import { findCourseById } from "@/api/api";
import { mapActions, mapGetters } from "vuex";
import { MessageBox } from "mint-ui";
export default {
  components: {
    catalog,
    comment,
    introduce
  },
  data() {
    return {
      course: {},
      selected: "1",
      isWantLearn: true //想学icon红心是否点亮，依赖于用户我的收藏中是否存在当前课程
    };
  },
  computed: {
    ...mapGetters({
      userData: "getUserData"
    }),
    userIsHave(){             //当前用户是否拥有此门课程的播放权限
      for(let item of this.userData.nowLearnClass){
        if(item.id == this.course.id){
          return true;
        }
      }
      return false;
    }
  },
  methods: {
    back() {
      this.$router.go("-1");
      console.log(111)
    },
    wantLearn() {            //点亮红心操作
      if (this.userData.name) {
         this.isWantLearn = !this.isWantLearn;
      }else{
        MessageBox("提示", "请先登录");
        this.$router.push('/account/login');
      }
    },
    ...mapActions(["addUserClass"]),   //通过vuex给用户添加课程
    addUserCourse(course) {           //添加课程操作
      if (this.userData.name) {
        if (!this.checkIsExist(course)) {
          //如果我的课程尚未存在
          this.addUserClass({ id: course.id, progress: 0 });
          MessageBox("提示", "添加学习成功！");
        } else {
          MessageBox("提示", "课程已经存在！");
        }
      }else{
        MessageBox("提示", "请先登录");
        this.$router.push('/account/login');
      }
    },
    checkIsExist(course) {
      for (let item of this.userData.nowLearnClass) {
        if (item.id == course.id) return true;
      }
      return false;
    }
  },
  mounted() {
    findCourseById({ id: this.$route.query.id }).then(res => {
      this.course = res;
    });
   
  }
};
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
    z-index 2
    .back
      font-size 0.8rem
      margin-left 0.3rem
    .head
      font-size 0.6rem
      position absolute
      left 38%
  video
    margin-top 1.2rem
    width 10rem
    height 5.8rem
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
