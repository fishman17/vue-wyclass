<template>
<div>
  <div>回跳选项和标题 ， 查找</div>
  <ul>
    <li v-for="item in classdetail" :key="item.id">
        {{item}}
    </li>
  </ul>
  <router-view></router-view>
</div>
</template>

<script>
export default {
    data(){
        return{
            classdetail: [1,2,3]
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>
