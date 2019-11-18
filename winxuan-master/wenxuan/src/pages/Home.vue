<template>
  <div id="box">
    <div class="block">
      <span class="demonstration"></span>
      <el-carousel height="152px">
        <el-carousel-item v-for="(item,index) in imgurl" :key="index">
          <img class="small" :src="item" style="width:100%;height:100%" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="img_box">
      <div class="title-img">
        <img src="../img/2.png" alt style class="img2" />
        <div>
          <b>积分兑换</b>先兑换礼券，再下单，优惠
        </div>
      </div>
    </div>
    <div>
      <img src="../img/640-90-1.jpg" alt style="width:100%;height:45px;margin-top:5px" />
      <img src="../img/640-90.jpg" alt style="width:100%;height:45px" />
    </div>
    <div class="module">
      <div class="kill_more">
        <b class="line"></b>
        <div class="killTime">
          <i class="el-icon-time"></i>
          <span>秒杀·00点场</span>
        </div>
        <b class="line2"></b>
        <div class="more">
          <a style="color:#666">更多</a>
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
    </div>
    <div class="productItem">
      <a v-for="item in datalist" :key="item._id">
        <div class="img"><img :src="item.img" alt=""></div>
        <span class="tag">{{item.price1}}<br>特卖</span>
        <div class="price">
          <p class="price-n">{{item.price1}}</p>
          <p class="price-o">{{item.price2}}</p>
        </div>
      </a>
    </div>
    <div class="module">
      <img src="../img/640-90-4.jpg" alt="">
      <img src="../img/640-90-1 (1).jpg" alt="">
      <img src="../img/wxjj_4.jpg" alt="">
    </div>
    <div class="module1">
      <ul class="list1">
        <li v-for="ele in datalist1" :key="ele._id">
          <div class="item">
              <img :src="ele.img" >
            <h3 class="name">{{ele.name}}</h3>
            <div class="promotion"></div>
            <div class="author">{{ele.author}}</div>
            <div class="price">
              <span class="price-n">{{ele.price1}}</span>
              <span class="price-o">{{ele.price2}}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="module">
      <img src="../img/0.jpg" alt="">
    </div>
    <div class="module2" style="height:1391px">
      <ul>
        <li v-for="ele in f1" :key="ele._id">
          <div class="item-5">
            <h3 class="name">{{ele.name}}</h3>                                      
            <div class="price">
            <span class="price-n">{{ele.price1}}</span></div>     
            <div class="img">
              <img :src="ele.img">
            </div>                               
          </div>          
        </li>
      </ul>
    </div>
    <div class="module">
      <img src="../img/1.jpg" alt="">
    </div>
    <div class="module3">
      <ul>
        <li v-for="item in datalist3" :key="item._id">
          <div class="name">
            <span class="s1" style="">{{item.title}}</span>
            <br>
          </div>
          <div class="img">
            <img :src="item.img" alt="">
          </div>
        </li>
      </ul>
    </div>
    <div class="module">
      <img src="../img/2.jpg" alt="">
      <img src="../img/3.jpg" alt="">
    </div>
    <div class="module">
      <img src="../img/4.jpg" alt="">
    </div>
    <div class="module2" style="height:355px">
      <ul>
        <li v-for="ele in f2" :key="ele._id">
          <div class="item-5">
            <h3 class="name">{{ele.name}}</h3>                                      
            <div class="price">
            <span class="price-n">{{ele.price1}}</span></div>     
            <div class="img">
              <img :src="ele.img">
            </div>                               
          </div>          
        </li>
      </ul>
    </div>
    <div class="module">
      <img src="../img/5.jpg" alt="">
    </div>
    <div class="module2" style="height:355px">
      <ul>
        <li v-for="ele in f3" :key="ele._id">
          <div class="item-5">
            <h3 class="name">{{ele.name}}</h3>                                      
            <div class="price">
            <span class="price-n">{{ele.price1}}</span></div>     
            <div class="img">
              <img :src="ele.img">
            </div>                               
          </div>          
        </li>
      </ul>
    </div>
    <div class="module">
      <img src="../img/6.jpg" alt="">
    </div>
    <div class="module2" style="height:355px">
      <ul>
        <li v-for="ele in f4" :key="ele._id">
          <div class="item-5">
            <h3 class="name">{{ele.name}}</h3>                                      
            <div class="price">
            <span class="price-n">{{ele.price1}}</span></div>     
            <div class="img">
              <img :src="ele.img">
            </div>                               
          </div>          
        </li>
      </ul>
    </div>
    <div class="module">
      <img src="../img/7.jpg" alt="">
    </div>
    <div class="module2" style="height:355px">
      <ul>
        <li v-for="ele in f5" :key="ele._id">
          <div class="item-5">
            <h3 class="name">{{ele.name}}</h3>                                      
            <div class="price">
            <span class="price-n">{{ele.price1}}</span></div>     
            <div class="img">
              <img :src="ele.img">
            </div>                               
          </div>          
        </li>
      </ul>
    </div>
    <div class="module">
      <img src="../img/8.jpg" alt="">
    </div>
    <div class="module2" style="height:355px">
      <ul>
        <li v-for="ele in f6" :key="ele._id">
          <div class="item-5">
            <h3 class="name">{{ele.name}}</h3>                                      
            <div class="price">
            <span class="price-n">{{ele.price1}}</span></div>     
            <div class="img">
              <img :src="ele.img">
            </div>                               
          </div>          
        </li>
      </ul>
    </div>
    <div class="module">
      <img src="../img/9.jpg" alt="">
    </div>
    <div class="module2" style="height:355px">
      <ul>
        <li v-for="ele in f7" :key="ele._id">
          <div class="item-5">
            <h3 class="name">{{ele.name}}</h3>                                      
            <div class="price">
            <span class="price-n">{{ele.price1}}</span></div>     
            <div class="img">
              <img :src="ele.img">
            </div>                               
          </div>          
        </li>
      </ul>
    </div>
    <div class="module">
      <img src="../img/10.jpg" alt="">
    </div>
    <div class="module2" style="height:355px">
      <ul>
        <li v-for="ele in f8" :key="ele._id">
          <div class="item-5">
            <h3 class="name">{{ele.name}}</h3>                                      
            <div class="price">
            <span class="price-n">{{ele.price1}}</span></div>     
            <div class="img">
              <img :src="ele.img">
            </div>                               
          </div>          
        </li>
      </ul>
    </div>
    <div class="module">
      <img src="../img/11.jpg" alt="">
    </div>
    <div class="module2" style="height:355px">
      <ul>
        <li v-for="ele in f9" :key="ele._id">
          <div class="item-5">
            <h3 class="name">{{ele.name}}</h3>                                      
            <div class="price">
            <span class="price-n">{{ele.price1}}</span></div>     
            <div class="img">
              <img :src="ele.img">
            </div>                               
          </div>          
        </li>
      </ul>
    </div>
    <div class="module">
      <img src="../img/gywx.png" alt="">
    </div>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      datalist:[],
      datalist1:[],
      datalist2:[],
      datalist3:[],
      f1:[],f2:[],f3:[],f4:[],f5:[],f6:[],f7:[],f8:[],f9:[],
      imgurl: [
        "http://static.winxuancdn.com/topic/subject/201908/md/640-304-2.jpg?201911121657",
        "http://static.winxuancdn.com/topic/subject/201911/db11/640-304-3.jpg?201911121657",
        "http://static.winxuancdn.com/topic/subject/201806/185/640-304.jpg?201911121657",
        "http://static.winxuancdn.com/topic/subject/201910/nbe/640-304-1.jpg?201911121657",
        "http://static.winxuancdn.com/topic/subject/201910/101/640-304-1.jpg?201911121657",
        "http://static.winxuancdn.com/topic/subject/201910/101/600-304.jpg?201911121657"
      ]
    };
  },
  async created() {
    let {data} = await this.$axios.get("http://localhost:1910/user");
    let {data:data1}=await this.$axios.get("http://localhost:1911/user");
    let {data:data2}=await this.$axios.get("http://localhost:1912/user");
    let {data:data3}=await this.$axios.get('http://localhost:1913/user')
    this.datalist=data;
    this.datalist1=data1;
    this.datalist2=data2.slice(0,106);
    this.datalist3=data3;
    this.f1=this.datalist2.slice(0,34);
    this.f2=this.datalist2.slice(34,43);
    this.f3=this.datalist2.slice(43,52);
    this.f4=this.datalist2.slice(52,61);
    this.f5=this.datalist2.slice(61,70);
    this.f6=this.datalist2.slice(70,79);
    this.f7=this.datalist2.slice(79,88);
    this.f8=this.datalist2.slice(88,97);
    this.f9=this.datalist2.slice(97,106);
  }
};
</script>
<style>
/* body{height: 10000px;} */
.el-carousel__indicators .el-carousel__button {width: 7.6px;height: 7.6px;border-radius: 3.8px;}
main {margin-top: 32px;overflow: auto;}
.img_box {margin: 0 8.7px;}
.title-img {margin: 3.6px 1px 0 0;}
.title-img b {display: inline-block;padding: 0 4.8px;margin-right: 3.6px;height: 17.65px;line-height: 17.65px;border: #eee solid 1.075px;border-color: #ce1d38;color: #ce1d38;font-size: 12px;border-radius: 8px;vertical-align: baseline;font-weight: bold;}
.title-img div {line-height: 100%;display: inline;font-size: 12.6px;color: #333;}
.img2 {margin-right: 5px;width: 66px;height: 29px;}
.module {position: relative;}
.module .line {font-weight: 700;height: 1.8px;width: 90px;background-color: #dedede;display: block;position: absolute;left: 13.5px;top: 24px;}
.module .line2 {font-weight: 700;height: 1.8px;width: 13%;background-color: #dedede;display: block;position: absolute;left: 72%;top: 24px;}
.module .killTime {float: left;margin-left: 35%;margin-top: 12px;font-size: 13.5px;color: #f92438;line-height: 2.4px;}
.module .killTime span {font-size: 15.6px;}
.more{font-size: 12px;display: inline;margin-left:60px}
.productItem {overflow: hidden;margin-top: 20px;}
.productItem>a {position: relative;color: #f92438;width: 25%;float: left;}
.productItem>a .img {width: 100%;height: 90px;line-height: 81px;}
.productItem>a img {width: 80px;height: 80px;}
.productItem>a span {width: 36px;height: 36px;line-height: 14.4px;border-radius: 50%;background-color: #fa8533;color: #fff;position: absolute;right: 0;top: 40%;z-index: 10;font-size: 11.4px;display: flex;align-items: center;-webkit-box-align: center;justify-content: center;text-align: center;}
.productItem>a .price {text-align: center;line-height: 24px;}
.productItem>a .price .price-n {font-size: 18px;color: #f41e33;vertical-align: middle;}
.productItem>a .price .price-o {font-size: 12px;color: #a9a9a9;vertical-align: middle;text-decoration: line-through;}
.module img{width: 100%;height: 100%;}
ul li{list-style: none;}
.list1{padding-left:0 ;}.item{position: relative;};
.module1 .item{display: block; position: absolute;left: 2.4px;top: 2.4px;}
.module1 .item  img{max-width: 100%;max-height: 100%;font-size: 4.2px;float: left;height: 91.6px;margin-right: 10px}
.module1 .item .name{height: 30px;line-height: 16px;font-size: 12px;color: #666;margin: 8.4px 0;}
.module1 .item .author{height: 12.6px;line-height: 12.6px;font-size: 10.8px;color: #a9a9a9;margin-top: 9px;margin-bottom: 9px}
.module1 .item .price{height: 30px;line-height: 19.2px;border-bottom: #eee solid 1px}
.module1 .item .price-n{display: inline-block;width: 90px;overflow: hidden;font-size: 18px;color: #f41e33;vertical-align: middle}
.module1 .item .price-o{font-size: 12px;color: #a9a9a9;vertical-align: middle;text-decoration: line-through}
.module2 .item-5{position: relative;margin: 0 1px 1px 0}
.module3 ul{padding-left: 0px}
.module2 ul{padding-left: 0px}
.module2 ul>li{float: left;width: 33.333%;}
.module2 .item-5 .img img{max-width: 100%;max-height: 100%;font-size: 4.2px;width: 80px;height: 80px;}
.module2 .item-5 .name{overflow: hidden;margin: 0 12.6px 3.6px 12.6px ;height: 15.6px; font-size: 12.6px;color: #262626;position: absolute;top: 0px;left: 0px;}
.module2 .item-5 .price{width: 100%;padding: 9px;height: 15px;line-height: 30px;overflow: hidden}
.module2 .item-5 .price-n{display: inline-block;width: 50%;font-size: 12.6px;color: #f41e33; vertical-align: top}
.module3 ul>li{width:25%;float: left;}
.module3 ul>li .name{margin: 5.4px 7.2px;line-height: 12px;height: 26.4px; margin-bottom: 7.8px;overflow: hidden;;font-size: 9px;color: #262626}
.module3 ul>li .img img{width: 61px;height: 61px;}
.module3 ul>li .name .s1{width: 28px;height: 12px;overflow: hidden;display: block}
</style>