<template>
  <div>
    <el-container>
      <el-header style="height:44px;width:100%">
        <span style="color:#dd0505;font-size:40px;position:absolute;left:5%;">&lt;</span>免费注册
        <span style="position:absolute;right:20px;">
          <el-row class="block-col-2">
            <el-col :span="12">
              <el-dropdown trigger="click" :hide-on-click="false">
                <span class="el-dropdown-link" style="font-size:18px;color:#999999">•••</span>
                <el-dropdown-menu slot="dropdown" style="background-color:rgba(0,0,0,0.8)">
                  <el-dropdown-item icon="el-icon-plus" style="color:#ffffff">首页</el-dropdown-item>
                  <el-dropdown-item icon="el-icon-plus" style="color:#ffffff">分页搜索</el-dropdown-item>
                  <el-dropdown-item icon="el-icon-plus" style="color:#ffffff">我的文轩</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
          </el-row>
        </span>
      </el-header>
    </el-container>
    <input
      type="text"
      ref="username"
      style="width:100%;height:36px;border:0px;border-bottom:1px solid #ccc;margin-top:30px;padding-left:20px;box-sizing:border-box"
      placeholder="请输入6-12位由数字字母下划线组成的用户名"
      maxlength="12"
    />
    <input
      ref="numberphone"
      @blur="goOut"
      type="text"
      style="width:100%;height:33px;border:0px;border-bottom:1px solid #ccc;padding-left:20px;box-sizing:border-box"
      placeholder="请输入您的手机号"
      maxlength="12"
    />
    <input
      ref="imgyzm"
      type="text"
      style="width:100%;height:33px;border:0px;border-bottom:1px solid #ccc;padding-left:20px;box-sizing:border-box"
      placeholder="请输入图片验证码 点击图片刷新"
    />
    <input
      ref="yzm"
      type="text"
      style="width:100%;height:33px;border:0px;border-bottom:1px solid #ccc;padding-left:20px;box-sizing:border-box"
      placeholder="请输入验证码"
    />
    <input
      @blur="pdmm"
      ref="password"
      type="text"
      style="width:100%;height:33px;border:0px;border-bottom:1px solid #ccc;padding-left:20px;box-sizing:border-box"
      placeholder="请输入6-12位登录密码"
    />
    <el-switch
      style="position:absolute;right:20px;top:31.5%"
      v-model="value"
      active-color="#ff4949"
      inactive-color="#dddddd"
    ></el-switch>
    <template>
      <el-checkbox v-model="checked" style="margin:20px 0 0 20px">我已同意条款</el-checkbox>
    </template>
    <el-row>
      <el-button
        type="danger"
        style="width:90%;margin:20px 0 0 5%;background:#f41e33;"
        @click="goto"
      >注册</el-button>
      <p style="text-align:right;font-size:13px;height:30px;border-bottom:2px solid #ccc">已有账号，去登录></p>
    </el-row>
  </div>
</template>
<script>
const axios = require("axios");
export default {
  data() {
    return {
      value: true,
      checked: true
    };
  },
  methods: {
    async goto() {
      let username = this.$refs.username.value;
      let result2 = this.goOut();
      let result3 = this.$refs.imgyzm.value;
      let result4 = this.$refs.yzm.value;
      let result5 = this.pdmm();
      let password = this.$refs.password.value;
      if (
        username != "" &&
        result2 &&
        result3 != "" &&
        result4 != "" &&
        result5
      ) {
        let result = await axios.get("http://localhost:1910/login", {
          params: {
            username,
            password
          }
        });
        if (result.data.status != 1) {
          let goBack = await axios.post("http://localhost:1910/reg", {
            username,
            password
          });
          if (goBack.data.status == 1) {
            alert("注册成功");
            this.$router.replace("/login");
          } else {
            window.console.log("请求发送失败");
          }
        } else {
          alert("用户名已经存在，请重新填写");
        }
      } else {
        alert("注册信息有错");
      }
    },
    goOut() {
      let number = Number(this.$refs.numberphone.value);
      // test:检查字符串中是否含有某个字符
      if (/^[1][3-9]\d{9}$/.test(number)) {
        return true;
      } else {
        this.$refs.numberphone.value = "请输入正确的手机号码";
        // 自动获得焦点
        this.$refs.numberphone.focus();
        return false;
      }
    },
    pdmm() {
      let number = this.$refs.password.value;
      if (number.length > 5 && number.length < 12) {
        return true;
      } else {
        this.$refs.password.value = "密码长度必须是6-12位";
        this.$refs.password.focus();
        return false;
      }
    }
  }
};
</script>
<style>
input {
  font-size: 12px;
}
</style>