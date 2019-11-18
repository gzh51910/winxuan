<template>
  <div>
    <!-- <header style="margin-left:8px">
      <a href class="logo">文轩网</a>
      <div class="demo-input-suffix">
        <el-input placeholder="请输入内容" suffix-icon="el-icon-search" size="small"></el-input>
      </div>
      <a href="#" class="user" @click="goto">登陆</a>
    </header>-->
    <main>
      <router-view />
    </main>
    <footer>
      <div v-for="item in menu" :key="item.name" @click="goto(item.path)">
        <i :class="item.icon"></i>
        <span>{{item.text}}</span>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      input2: "",
      menu: [
        {
          name: "home",
          path: "/home",
          text: "首页",
          icon: "el-icon-s-home"
        },
        {
          name: "search",
          path: "/search",
          text: "分类搜索",
          icon: "el-icon-search"
        },
        {
          name: "cart",
          path: "/cart",
          text: "购物车",
          icon: "el-icon-shopping-cart-2"
        },
        {
          name: "mine",
          path: "/mine",
          text: "我的文轩",
          icon: "el-icon-user-solid"
        }
      ]
    };
  },
  methods: {
    goto(path) {
      this.$router.push(path);
    }
  }
};
</script>

<style>
a {
  list-style: none;
  text-decoration: none;
}
body {
  display: flex;
  flex-direction: column;
}
header {
  z-index: 1002;
  position: fixed;
  left: 0;
  top: 0;
  height: 39.6px;
  padding: 0px 58.8px 0px 85.2px;
  background-color: #f41e33;
}
.logo {
  text-indent: -9999rem;
  display: block;
  width: 81.6px;
  height: 39.6px;
  position: absolute;
  left: 0;
  top: 0;
  background: url(./img/1.png) no-repeat center;
  background-size: 70%;
}
.user {
  width: 57.6px;
  height: 39.6px;
  line-height: 39.6px;
  font-size: 14.4px;
  color: #ffffff;
  position: absolute;
  right: 0;
  top: 0;
  text-align: center;
}
.el-input__inner {
  margin-top: 3px;
}
footer {
  height: 42.65px;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  z-index: 1002;
  background: #fff;
}
footer div {
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
footer i {
  font-size: 24px;
}
footer span {
  font-size: 12px;
}
</style>