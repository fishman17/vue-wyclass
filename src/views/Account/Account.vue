<template>
  <div class="wrapper">
    <div class="user">
      <div v-if="user.name">
        <img :src="user.src" alt="" class="avatar"/>
        <div class="description">
          <p class="title">{{user.name}}</p>
          <span class="ways">{{user.ways}}</span>
        </div>
      </div>
      <div class="login" v-if="!user.name">
        <div class="wrap">
          <div class="button" @click="changeToLogin">登录</div>
        </div>
      </div>
      
      <ul class="nav">
      <li class="nav-item">
        <mt-cell title="学习兴趣"   is-link>
          <i slot="icon" class="icon iconfont icon-iconxuexisel" ></i>
        </mt-cell>
      </li>
      </ul>
    </div>

    <ul class="nav">
      <li class="nav-item">
         <mt-cell title="消息中心" icon="more"  is-link>
            <i slot="icon" class="icon iconfont icon-xiaoxi" ></i>
         </mt-cell>
      </li>
    </ul>
    <ul class="nav">
      <li class="nav-item">
         <mt-cell title="我的余额" icon="more"  is-link>
            <i slot="icon" class="icon iconfont icon-yuesel" ></i>
         </mt-cell>
      </li>
      <!-- <li class="nav-item">
         <mt-cell title="我的订单" icon="more"  is-link>
           <i slot="icon" class="icon iconfont icon-dingdan" ></i>
         </mt-cell>

      </li> -->
      <li class="nav-item">
          <mt-cell title="我的优惠券" icon="more"  is-link>
             <i slot="icon" class="icon iconfont icon-youhuiquan" ></i>
          </mt-cell>
      </li>
      <li class="nav-item">
         <mt-cell title="在线学习流量" icon="more"  is-link>
            <i slot="icon" class="icon iconfont icon-mianliuliangfuwu" ></i>
         </mt-cell>
      </li>
    </ul>
    <ul class="nav">
      <li class="nav-item">
         <mt-cell title="手机账号绑定" icon="more" value="安全升级" is-link>
            <i slot="icon" class="icon iconfont icon-weibiaoti2fuzhi11" ></i>
         </mt-cell>
      </li>
      <li class="nav-item" @click="changeToSetting">
         <mt-cell title="设置" icon="more" is-link>
           <i slot="icon" class="icon iconfont icon-shezhi" ></i>
           <mt-badge size="small" v-if="user.setting">{{user.setting.badge}}</mt-badge>
          
         </mt-cell>
        
      </li>
    </ul>
    <ul class="nav">
      <li class="nav-item">
         <mt-cell title="帮助与反馈"   is-link>
           <i slot="icon" class="icon iconfont icon-icon_help" ></i>
         </mt-cell>
      </li>
      <li class="nav-item">
         <mt-cell title="给我们建议"   is-link>
            <i slot="icon" class="icon iconfont icon-haoping" ></i> 
         </mt-cell>
      </li>
      <li class="nav-item">
         <mt-cell title="给我们建议"   is-link>
            <i slot="icon" class="icon iconfont icon-haoping" ></i> 
         </mt-cell>
      </li>
    </ul>
  
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data(){
    return{
      // user: {
        // src: 'http://img1.imgtn.bdimg.com/it/u=3198762613,766144830&fm=27&gp=0.jpg',
        // username: 'dmy123456789',
        // ways: '通过qq登录',
        // setting: {
        //   badge: 2,
        // }
      // }
    }
  },
  methods:{
    changeToSetting(){            //跳转到设置界面
      if(this.user.name){
        this.$router.push('/account/setting');
      }else{
        this.$router.push('/account/login');
      }
    },
    changeToLogin(){            //跳转到登录界面
      this.$router.push('/account/login');
    }
  },
  computed:{
    ...mapGetters({       
      user: 'getUserData'
    })
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  background-color  #f2f4f7
  width 100%
  height 92%
  position fixed
  overflow scroll
  .user
    background-color white
    border-bottom 0.022666rem solid #ced1da
    .nav
      margin-top 8px
      margin-bottom 0
    .avatar
      width: 1.50664rem
      height 1.50664rem
      border-radius 1.70664rem
      border 0.14222rem solid #ced1da
      display inline-block
      margin-left 0.21333rem
      margin-top 0.21333rem
    .description
      display inline-block
      vertical-align top
      .title
        font-size 0.42666rem
        font-weight 600
      .ways
        font-size 0.34133rem
    .login
      height 4rem
      width 10rem
      background-color white
      text-align center
      display: flex;
      align-items: center;
      justify-content: center;
      .wrap
        width 2.2rem
        height 2.2rem
        border-radius 50%
        border 1px solid #2cc17b
        .button
          width 2rem
          height 2rem
          border-radius 50%
          background-color #2cc17b
          line-height 2rem
          margin 0.1rem
          color white
          font-size 0.5rem
          &:active
            background-color #f2f4f7
  .nav
    padding 0
    list-style-type none
    .nav-item
      .mint-cell
        background-position initial 
        .mint-cell-wrapper
          .mint-cell-title
            color red
            .icon 
              vertical-align: text-top 
              font-size 23px
              color #99a4bf
            .mint-cell-text
              color red
              display block
              vertical-align: text-top 

</style>
