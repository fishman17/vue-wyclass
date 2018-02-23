<template>
<div>
  <p @click="back">返回</p>
  界面待开发
  <!-- <ul>
    <li v-for="item in classdetail" :key="item.id">
        {{item}}
    </li>
  </ul> -->
  <router-view></router-view>
</div>
</template>

<script>
export default {
    data(){
        // return{
        //     classdeta3]il: [1,2,
        // }
        return{
            
        }
    },
    methods:{
        back(){
            this.$router.go('-1');
        }
    },
}
</script>

<style lang="stylus" scoped>

</style>
