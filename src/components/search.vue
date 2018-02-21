<template>
      <div class="search">
        <div class="searchbar">
          <i class="mintui mintui-search"></i>
          <input
          ref="input"
          @click="visible = true"
          type="search"
          v-model="currentValue"
          :placeholder="placeholder"
          class="input">
        </div>
        <a class="back" @click="back" v-show="isSearching">取消</a>
      </div>
</template>

<script>
export default {
  props:{
    isSearching: {
      type: Boolean,
      default: true
    },
  },
  data(){
    return{
      currentValue: null,
      visible: false,
      placeholder: '搜索我感兴趣的内容'
    }
  },
  computed:{
    result: function(){
      return [{
        title: '111',
        value: '18001',
        id: '18001',
      },
      {
        title: '222',
        value: '18002',
        id: '18002',
      },
      {
        title: '333',
        value: '18003',
        id: '18003',
      }]
    },
  },
  methods:{
    back(){
      this.$router.go('-1')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .search
    height 1.28rem
    width 100%
    margin 0 auto
    display flex
    align-items center
    justify-content center
    background-color white
    .searchbar
      background-color #f2f4f7
      flex 9
      margin .28444rem 
      border-radius .42666rem  
      .mintui-search
        line-height .71111rem
        margin-left .28444rem
      .input
        background-color #f2f4f7
        width 85%
        height .83222rem
        border 0
        outline none 
    .back
      text-align center
      flex 1
</style>
