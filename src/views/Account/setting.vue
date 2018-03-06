<template>
  <div class="wrapper">
      <div class="title">
          <span class="back" @click="back">&lt;</span>
          <span class="head">设置</span>
      </div>
      <ul class="settings">
          <li class="setting">
              <div class="head">视频下载清晰度</div>
              <div class="tail" >
                  <span :class="isFruent?'active':''" @click="changeFruent">流畅</span>   |   
                  <span :class="isFruent?'':'active'" @click="changeFruent">高清</span>
              </div>
          </li>
          <li class="setting">
              <div class="head">视频自动连续播放</div>
              <div class="tail"><mt-switch v-model="isContinuity"></mt-switch></div>
          </li>
          <li class="setting">
              <div class="head">允许3G/4G网络播放视频、音频</div>
              <div class="tail"><mt-switch v-model="couldPlay"></mt-switch></div>
          </li>
          <li class="setting">
              <div class="head">允许3G/4G网络下载视频、音频</div>
              <div class="tail"><mt-switch v-model="couldDown"></mt-switch></div>
          </li>
          <li class="setting">
              <div class="head">清除缓存</div>
              <div class="tail">38m</div>
          </li>
          <li class="setting">
              <div class="head">报告问题</div>
              <div class="tail">&gt;</div>
          </li>
          <li class="setting">
              <div class="head">关于</div>
              <div class="tail">&gt;</div>
          </li>
          <li class="setting">
              <button @click="signOut">点此退出登录</button>
          </li>
      </ul>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      isFruent: true,
      isContinuity: false,
      couldPlay: true,
      couldDown: false
    };
  },
  methods: {
    back() {
      this.$router.go("-1");
    },
    changeFruent() {
      this.isFruent = !this.isFruent;
    },
    ...mapActions({
      userOut: "setSignOut"
    }),
    signOut(){
      this.userOut();
      this.$router.push('/account');
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixin';

.wrapper 
    .title 
        height: 1.2rem
        background-color: #f7f9fc
        line-height: 1.2rem
        .back
            font-size: 0.8rem
            margin-left: 0.3rem
        .head
            font-size: 0.6rem
            position: absolute
            left: 45%
    .settings 
        margin: 0
        padding: 0
        .setting
            list-style-type: none
            width: 9.7rem
            height: 1.4rem
            margin-left: 0.3rem
            text-align: left
            line-height: 1.4rem
            color: #666666
            border-1px(rgba(7, 17, 27, 0.1))
            .head
                font-size: 0.4rem
                display: inline-block
            .tail
                float: right
                height: 0.8rem
                display: inline-block
                margin-top: 0.2rem
                margin-right: 0.3rem
                line-height: 1rem
                font-size: 0.35rem
                text-align: right
                // background-color red
                .mint-switch 
                    display: inline-block
                    margin-right: -0.3rem
                    .mint-switch-core
                        border-color: #2cc17b;
                        background-color: #2cc17b
                .active
                    color: #26a2ff
            button 
              width 6.7rem
              margin-left 1.5rem
</style>
