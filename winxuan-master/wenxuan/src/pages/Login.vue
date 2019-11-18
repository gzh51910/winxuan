<template>
  <div style="100%">
    <el-container>
      <el-header style="height:44px;width:100%">
        <span style="color:#dd0505;font-size:40px;position:absolute;left:5%" @click="goback">&lt;</span>文轩登录
      </el-header>
    </el-container>
    <el-form :rules="rules" :model="news" ref="news" style="margin-top:60px">
      <el-form-item prop="username">
        <el-input v-model="news.username" placeholder="用户名/邮箱/手机号" style="height:38px"></el-input>
      </el-form-item>
      <p></p>
      <el-form-item prop="password" style="margin-bottom:30px">
        <el-input v-model="news.password" placeholder="密码" style="height:38px"></el-input>
        <el-switch
          style="position:absolute;right:15px;top:10px"
          v-model="value"
          active-color="#ff4949"
          inactive-color="#dddddd"
        ></el-switch>
      </el-form-item>
    </el-form>
    <el-row>
      <el-button
        type="danger"
        @click="submitForm"
        style="width:90%;margin-left:5%;background:#f41e33"
      >登录</el-button>
    </el-row>
    <p></p>
    <span style="margin-left:5%;font-size:14px;" @click="gotoReg">立即注册</span>
    <span style="margin-left:57%;font-size:14px">忘记密码</span>
    <p
      style="text-align:center;font-size:13px;color:#c9c9c9;margin-top:60px"
    >----------------其它方式---------------</p>
    <span class="imag"></span>
    <span class="spa"></span>
    <p style="margin-bottom:40px"></p>
    <p>
      <span style="margin-left:5%;">
        <img src="../img/image1.png" alt />
      </span>
      <span style="margin-left:5%;">
        <img src="../img/image2.png" alt />
      </span>
      <span style="margin-left:5%;">
        <img src="../img/image3.png" alt />
      </span>
    </p>
  </div>
</template>
<script>
const axios = require("axios");
export default {
  data() {
    var usernameF = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      }
      if (!/^[a-z][\w-]+$/i.test(value)) {
        alert("用户名必须以字母开头，只能有数字字母下划线组成");
      } else {
        callback();
      }
    };
    var passwordF = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      value: false,
      news: {
        username: "",
        password: ""
      },
      rules: {
        username: [{ validator: usernameF, trigger: "blur" }],
        password: [{ validator: passwordF, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm() {
      this.$refs.news.validate(async valid => {
        if (valid) {
          let { username, password } = this.news;
          let result = await axios.get("http://localhost:1910/login", {
            params: {
              username,
              password
            }
          });
          // window.console.log(result);
          if (result.data.status == 1) {
            this.$router.replace("/home");
          } else {
            alert("用户名或密码错误");
          }
        } else {
          window.console.log("error submit!!");
          return false;
        }
      });
    },
    goback() {
      this.$router.push("/home");
    },
    gotoReg() {
      this.$router.push("/reg");
    }
  }
};
</script>
<style>
body {
  background-color: #eee;
}
.loginHeader {
  text-align: center;
  height: 30px;
  line-height: 30px;
  background-color: #ccc;
}
.el-header {
  background-color: #fafafa;
  color: #333;
  text-align: center;
  line-height: 44px;
}
.imag {
  display: inline-block;
  width: 43px;
  height: 43px;
  background: url("https://static.winxuancdn.com/topic/subject/201702/xl.png");
  background-size: 43px 43px;
  margin-left: 28%;
}
.spa {
  display: inline-block;
  width: 43px;
  height: 43px;
  background: url(//static.winxuancdn.com/topic/subject/201702/qq.png);
  background-size: 43px 43px;
  margin-left: 8%;
}
</style>