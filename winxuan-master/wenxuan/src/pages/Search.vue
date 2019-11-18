<template>
  <div>
    <el-container>
      <el-header style="height:44px;width:100%">
        <span style="color:#dd0505;font-size:40px;position:absolute;left:5%;">&lt;</span>
        <div>
          <button class="el-icon-search"></button>
          <input type="text" placeholder="请输入搜索关键词" />
          <span style="margin-left:65px">搜索</span>
        </div>
      </el-header>
    </el-container>
    <div>
      <div class="content">
        <i class="iconfont icon-shengxian_yazi"></i>
        <span class="span1">少儿</span>
        <div class="div1"></div>
      </div>
      <div class="div2" v-for="(item,index) in datas" :key="index">
        <div class="div3">{{item}}</div>
      </div>
    </div>
    <div>
      <div class="content">
        <i class="iconfont icon-xiangtuwenxue" style="color:orange"></i>
        <span class="span1">文学小说</span>
        <div class="div1"></div>
      </div>
      <div class="div2" v-for="(item,index) in datast" :key="index">
        <div class="div3">{{item}}</div>
      </div>
    </div>
    <div>
      <div class="content">
        <i class="iconfont icon-xuexi" style="color:#8890fb"></i>
        <span class="span1">学习考试</span>
        <div class="div1"></div>
      </div>
      <div class="div2" v-for="(item,index) in st" :key="index">
        <div class="div3">{{item}}</div>
      </div>
    </div>
    <div>
      <div class="content">
        <i class="iconfont icon-jingjiguanlixueyuan" style="color:#4ec8f1"></i>
        <span class="span1">经济管理</span>
        <div class="div1"></div>
      </div>
      <div class="div2" v-for="(item,index) in kk" :key="index">
        <div class="div3">{{item}}</div>
      </div>
    </div>
    <div>
      <div class="content">
        <i class="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-" style="color:#ff6328"></i>
        <span class="span1">励志与成功</span>
        <div class="div1"></div>
      </div>
      <div class="div2" v-for="(item,index) in lk" :key="index">
        <div class="div3">{{item}}</div>
      </div>
    </div>
    <div>
      <div class="content">
        <i class="iconfont icon-tushu" style="color:#fc75db"></i>
        <span class="span1">童书</span>
        <div class="div1"></div>
      </div>
      <div class="div2" v-for="(item,index) in rt" :key="index">
        <div class="div3">{{item}}</div>
      </div>
    </div>
    <div>
      <div class="content">
        <i class="iconfont icon-tubiaozhizuomobanyihuifu-" style="color:#ff9f24"></i>
        <span class="span1">生活</span>
        <div class="div1"></div>
      </div>
      <div class="div2" v-for="(item,index) in sh" :key="index">
        <div class="div3">{{item}}</div>
      </div>
    </div>
    <div>
      <div class="content">
        <i class="iconfont icon-keji" style="color:#4ec8f1"></i>
        <span class="span1">科技</span>
        <div class="div1"></div>
      </div>
      <div class="div2" v-for="(item,index) in kj" :key="index">
        <div class="div3">{{item}}</div>
      </div>
    </div>
    <div>
      <div class="content">
        <i class="iconfont icon-yishu" style="color:#4cd5bb"></i>
        <span class="span1">艺术与摄影</span>
        <div class="div1"></div>
      </div>
      <div class="div2" v-for="(item,index) in ys" :key="index">
        <div class="div3">{{item}}</div>
      </div>
    </div>
    <div>
      <div class="content">
        <i class="iconfont icon-mine" style="color:blue"></i>
        <span class="span1">人文社科</span>
        <div class="div1"></div>
      </div>
      <div class="div2" v-for="(item,index) in rw" :key="index">
        <div class="div3">{{item}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import "../../if/iconfont.css";
export default {
  data() {
    return {
      datas: ["0-2岁", "3-6岁", "7-10岁", "11-14岁", "家庭教育"],
      datast: ["当代小说", "世界名著", "传记", "青春与动漫"],
      st: ["教材教辅", "外国类", "医学类", "建筑类", "工具书"],
      kk: ["管理学", "经济与金融", "投资理财"],
      lk: ["成功学", "心理学", "心灵励志"],
      rt: ["儿童文学", "儿童故事", "必读名著", "儿童故事"],
      sh: ["家庭与育儿", "运动健身", "烹饪美食", "时尚美容"],
      kj: ["计算机", "科普读物", "工业技术", "科学", "医学", "建筑"],
      ys: ["摄影", "绘画", "书法与字帖"],
      rw: ["哲学与宗教", "历史", "政治", "法律", "军事"]
    };
  }
};
</script>
<style>
button {
  border: none;
  background: white;
}

input {
  border: none;
}

.div1 {
  width: 240px;
  height: 1px;
  margin-bottom: 15px;
  background: grey;
}

i {
  margin-right: 10px;
  margin-left: 15px;
  color: orangered;
  font-size: 18px;
}

.span1 {
  margin-right: 5px;
}

.content {
  padding-top: 20px;
  display: flex;
}

.div1 {
  margin-top: 10px;
}

.div2 {
  display: inline-block;
}

.div3 {
  width: 116px;
  height: 40px;
  background: white;
  border: 1px solid silver;
  border-top: none;
  border-left: none;
  border-bottom: none;
  text-align: center;
  line-height: 40px;
}
</style>