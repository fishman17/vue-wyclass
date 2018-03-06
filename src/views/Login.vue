<template>
   <div class="wrapper">
      <div class="title">
          <span class="back" @click="back">&lt;</span>
          <span class="title">登录</span>
      </div>
      <div class="login">
          <div class="username">
              <label>账号:</label>
              <input type="text" v-model="username" placeholder="测试账号admin">
          </div>
          <div class="password">
              <label>密码:</label>
              <input v-model="password" type="password" placeholder="测试密码123456">
          </div>
          <!-- <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
          <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field> -->
          <button @click="login">登录</button>
      </div>
      <video src="http://v.youku.com/v_show/id_XMTk3Mzg4OTM2.html?spm=a2h0k.8191407.0.0&from=s1.8-1-1.2" controls="controls">
        您的浏览器不支持 video 标签。
      </video>
   </div>
</template>

<script>
import { requestLogin } from "../api/api";
import { mapActions } from "vuex";
import { Toast } from 'mint-ui';
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    back() {
      this.$router.go("-1");
    },

    ...mapActions(
      [
        'setUserData','setUserInfo'
      ]
    ),
    

    login() {
      if (!this.username || !this.password) {
        Toast({
                message: '请填写完整',
                iconClass: 'icon icon-error',
                position: 'top',
        });
        return;
      }
      let data = {
        username: this.username,
        password: this.password
      };
      this.$store.dispatch("setLoadingState", true);

      requestLogin(data).then(res => {
        if(res == "notFound"){
            Toast({
                message: '登陆失败',
                iconClass: 'icon icon-error'
                });
            this.$store.dispatch("setLoadingState", false);
        }else{
            this.setUserInfo(data);
            this.setUserData(res);
            this.$router.replace("/home");
        }
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.wrapper {
    background-color: white;

    .title {
        height: 1.2rem;
        background-color: #f7f9fc;
        line-height: 1.2rem;

        .back {
            font-size: 0.8rem;
            margin-left: 0.3rem;
        }

        .title {
            font-size: 0.6rem;
            position: absolute;
            left: 45%;
        }
    }

    .login {
        width: 8rem;
        margin: 0 auto;

        .username, .password {
            margin: 0.3rem;
            border-bottom: 1px solid #e6eaf2;
            height: 1.6667rem;
            line-height: 1.6667rem;
            color: #99a4bf;

            &>label {
                font-size: 0.45rem;
            }

            &>input {
                border: 0;
                background-color: white;
                width: 6.2rem;
                height: 0.7rem;
                outline: none;
                font-size: 0.45rem;
            }
        }

        // input
        // background-color white
        button {
            width: 7.4rem;
            height: 1rem;
            margin: 0.3rem;
            border-radius: 0.2rem;
            background-color: #2ab868;
            border: 0;
            outline: none;
            font-size: 0.45rem;
            color: white;
        }
    }
}
</style>
