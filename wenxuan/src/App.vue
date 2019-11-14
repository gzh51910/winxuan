<template>
  <div id="app">
    <!-- <el-menu-item :index="item.name" v-for="item in menu" :key="item.name">{{item.text}}</el-menu-item> -->
    <ul>
      <li v-for="item in menu" :key="item.name">{{item.text}}</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'app',
  data(){
    return {
      menu:[{
        name:"home",
        path:"/home",
        text:"首页"
      },{
        name:"search",
        path:"/search",
        text:"分类搜索"
      },{
        name:"cart",
        path:"/cart",
        text:"购物车"
      },{
        name:"mine",
        path:"/mine",
        text:"我的文轩"
      }]
    }
  },
}
</script>

<style>
</style>
