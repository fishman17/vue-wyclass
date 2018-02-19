<template>
  <div class="wrapper">
    <search :isSearching="false" @click.native="changeToSearch"></search>
    <div class="classify">classify</div>
  </div>
</template>

<script>
import search from '@/components/search'
export default {
  data(){
    return{
      class:{
        '特别推荐': {},
        '办公效率': {
          '办公软件':['PPT','Excel','Word','Project','Keynote','Outlook','更多软件',],
          '工作效率': ['时间管理','思维导图'],
          '电脑基础': ['基础操作','常用工具'],
        },
        '职业发展': {},
        '编程开发': {},
        '产品和设计': {},
        '生活方式': {},
        '亲子教育': {},
        '语言学习': {},
      },
    }
  },
  components: {
    search,
  },
  methods:{
    changeToSearch(){
      this.$router.push({path:'home/search'});
      console.log(111);
    }
  }
};
</script>

<style lang="stylus" scoped>
.wrapper
  position fixed
  height 92%
  width 100%
  .mint-search
    height initial

</style>

