<template>
  <div style="width:400px">
    <div class="head-banner">
      <div class="img">
        <img src="//static.winxuancdn.com/goods/def_comment.png" alt />
      </div>
      <div class="name">
        您好,来自于文轩网的
        <b>(wx_ihtjaib0ty)</b>
      </div>
      <div class="info">
        <a>
          <span>
            <b>0</b>
            <s>我的收藏</s>
          </span>
        </a>
        <a>
          <span>
            <b>0</b>
            <s>我的足迹</s>
          </span>
        </a>
      </div>
      <div class="set">
        <a href="//m.winxuan.com/usercenter/myaccount">
          <i class="el-icon-setting"></i>
        </a>
      </div>
    </div>
    <div class="select-box">
      <a class="myorder">
        <span>
          <s class="el-icon-s-order"></s>我的订单
        </span>
        <b>
          查看全部订单
          <i class="el-icon-arrow-right"></i>
        </b>
      </a>
      <div class="cont">
        <div class="info">
          <a>
            <i class="el-icon-truck"></i>
            <span>待付款</span>
          </a>
          <a>
            <i class="el-icon-truck"></i>
            <span>待收货</span>
          </a>
          <a>
            <i class="el-icon-truck"></i>
            <span>退款/售后</span>
          </a>
        </div>
      </div>
    </div>
    <div class="select-box">
      <a href="//m.winxuan.com/order" class="myorder">
        <span>
          <s class="el-icon-s-order"></s>我的钱包
        </span>
        <b>
          礼卷/购物卡等
          <i class="el-icon-arrow-right"></i>
        </b>
      </a>
      <div class="cont">
        <div class="info">
          <a>
            <p class="r">￥0.00</p>
            <span>暂存款</span>
          </a>
          <a>
            <p class="r">0</p>
            <span>购书卡</span>
          </a>
          <a>
            <p class="r">0</p>
            <span>礼卷</span>
          </a>
        </div>
      </div>
    </div>
    <div class="select-box">
      <a href="//m.winxuan.com/order" class="myorder">
        <span>
          <s class="el-icon-s-order"></s>联系客服
        </span>
        <b>
          点击联系在线客服
          <i class="el-icon-arrow-right"></i>
        </b>
      </a>
    </div>
    <div class="select-box">
      <a href="//m.winxuan.com/order" class="myorder">
        <span>
          <s class="el-icon-s-order"></s>帮助中心
        </span>
        <b>
          客服电话及常见问题
          <i class="el-icon-arrow-right"></i>
        </b>
      </a>
    </div>
    <div class="select-box">
      <a href="//m.winxuan.com/order" class="myorder">
        <span>
          <s class="el-icon-s-order"></s>猜你喜欢
        </span>
      </a>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
*{margin: 0;padding: 0}
main{margin: 0;}
.head-banner{height: 12.9rem;position: relative;overflow: hidden;margin-bottom: .2rem;background: url(../img/backgr.jpg) center top no-repeat;background-size: cover;}
.head-banner img {display: block;width: 5rem;height: 5rem;padding: .1rem;margin: 1.5rem auto 1rem auto;border: .036rem solid #fff;border-radius: 100%;}
.head-banner .name{line-height: 0;text-align: center;font-size: 14px;color: #fff;}
.head-banner .info{position: absolute;width: 100%;left: 0;bottom: 0;}
.head-banner .info a{display: inline-block;width: 50%;height: 3.4rem;}
.head-banner .info a span{display: block;margin-right: .05rem;height: 3.4rem;background-color: rgba(0,0,0,0.1);text-align: center;color: #fff;}
.head-banner .info a span b{display: block;font-size: 14px;padding-top: .24rem;height: 1rem;}
.head-banner .info a span s{display: block;font-size: 14px;text-decoration: none;height: 1rem;}
.head-banner .set{ position: absolute;top: 0;right: 0;}
.head-banner .set a{display: block;width: 2.2rem;height: 2.2rem;text-align: center;}
.head-banner .set i{font-size: 24px;display: block;line-height: 2.5rem;color: rgba(255,255,255,0.3);}
.select-box{background-color: #fff;margin-bottom: .19rem;}
.select-box a{display: block;height: 2.6rem;line-height: 1.22rem;position: relative;}
.select-box a span{display: block;margin-left: .28rem;font-size: 14px;color: #262626;line-height: 2.6rem}
.select-box a span s {margin-right: .28rem;text-decoration: none;font-size: 18px;color: #c28bfa;vertical-align: middle;}
.select-box a b {position: absolute;display: block;height: .46rem;line-height: .46rem;top: 50%;right: .28rem;margin-top: -0.23rem;font-size: 12px;color: #888;font-weight: normal;}
.select-box a b i {font-size: .4rem;vertical-align: middle;}
.cont .info{height: 4rem;border-top: .036rem solid #eee;overflow: hidden;display: flex;flex-direction: row;justify-content: space-around;background: #fff;}
.cont .info a{height: 4rem;border-top: .036rem solid #eee;overflow: hidden;display: flex;flex-direction: column;align-items: center;}
.cont .info i{display: block;width: 1.62rem; height: 1.62rem;margin: .36rem auto .56rem auto;text-align: center;position: relative;font-size: 26px;color: #888;}
.cont .info span{display: block;line-height: .36rem;color: #262626;font-size: 12px;}
.cont .info .r{display: block;width: 5rem; height: 1.62rem;margin: .36rem auto .56rem auto;text-align: center;position: relative;font-size: 26px;color: #f41e33;}

</style>