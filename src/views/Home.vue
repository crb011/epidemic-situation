<template>
  <div class="home">
    <!-- 顶部top -->
    <div class="top1">
      <div class="top">
        <img src="../../public/img/logo.png" alt="加载中" />
      </div>
    </div>
    <!-- 疫情背景 -->
    <div class="nbannerbox">
      <!-- 病例地图  实时播报  疫情自查   防护手册 -->
      <menuinbox class="topa"></menuinbox>
      <!-- 加拿大最新疫情消息表格 -->
    </div>
    <!-- table-canada数据页面 -->
    <div class="table-canada">
      <div class="data-table-box">
        <div class="h5">
          <h5>加拿大最新疫情消息</h5>
          <a>详细数据</a>
        </div>

        <!-- 确诊病例   治愈人数   死亡人数数据组件 -->
        <definite :data="data"></definite>

        <!-- 数据表格 -->
        <table1 :list="list"></table1>

        <!-- 现有确诊和其他 -->
        <div class="del-text">
          <strong>"现有确诊"</strong> = 累计确诊 - 治愈 - 死亡
          <br />
          <strong>"其他"</strong> 包括：军事基地隔离点
        </div>
        <p class="a"></p>
      </div>

      <!-- 累计确诊人数 -->
      <div class="container">
        <a href>累计确诊</a>
        <a href>累计确诊</a>
        <!-- 柱形图 -->
        <canvasa class="ca" :list="list"></canvasa>
      </div>
      <div class="container">
        <!-- 中国地图 -->
        <h2>中国地区</h2>
        <containerInbox class="ca" :list="list"></containerInbox>
      </div>
      <!-- 病例 -->
      <tabpanel></tabpanel>
      <!--  抗疫联盟 -->
      <container></container>
      <div class="container">
        <!-- 疫情头条 -->
        <topListBlock></topListBlock>
        <!-- 本网综合 -->
        <topBlock></topBlock>
        <!-- 最新辟谣 -->
        <containerBox ></containerBox>
      </div>
      <div class="container1">
        <span>防护手册</span>
        <div style="clear: none; text-align: left;">
          <router-link to="/Home/inspection" exact tag="p" active-class="on">自检</router-link>
          <router-link to="/Home/Return" tag="p">返加</router-link>
          <router-link to="/Home/intimate" tag="p">密切接触</router-link>
          <router-link to="/Home/make" tag="p">确诊</router-link>
        </div>
        <br />
        <router-view></router-view>
      </div>
    </div>
    <div class="data">
      <span>权威指南</span>
      <button>美国疫病控制中心(CDC)预防指南</button>
      <button>《新型冠状病毒感染防护》手册</button>
    </div>
    <h1 style="margin-top:0.2rem">中国及海外疫情数据实时播报</h1>
    <p style="margin-top:0.1rem">数据来自官方通报，数据可能存在延迟差异</p>
    <div class="table-canada">
      <div class="container">
        <dataTable :getlist="getlist"></dataTable>
      </div>
      <div class="container">
        <tableBox :setlist="setlist"></tableBox>
      </div>
    </div>
    <div class="myfooter">
      <p>
        <span>Copyright © 2020 Playheads Ltd. All Rights Reserved.</span>
        <br >
         design by 
      </p>
    </div>
  </div>
</template>

<script>
// 导入其他组件
import menuinbox from "../components/menuinbox"; //病例地图  实时播报  疫情自查   防护手册
import definite from "@/components/table-canada/definite"; //确诊病例   治愈人数   死亡人数数据组件
import table1 from "@/components/table-canada/table"; //省数据
import canvasa from "@/components/container/canvasa.vue"; //柱形图
import containerInbox from "@/components/container/container-inbox"; //地图
import tabpanel from "@/components/tabpanel/tabpanel"; //加拿大病例
import container from "@/components/container/container"; //抗疫联盟
import topListBlock from "@/components/top-list-block/top-list-block"; //疫情头条
import topBlock from "@/components/top-list-block/top-block"; //本网综合
import containerBox from "@/components/top-list-block/container-box"; //最新辟谣
import dataTable from "@/components/table-canada/data-table"; //中国数据
import tableBox from "@/components/table-canada/table-box"; //全国数据
export default {
  name: "Home",
  components: {
    menuinbox,
    definite,
    table1,
    canvasa,
    containerInbox,
    tabpanel,
    container,
    topListBlock,
    topBlock,
    containerBox,
    dataTable,
    tableBox,
  },
  data() {
    return {
      data: {},
      list: [],
      getlist: {},
      setlist: {},
    };
  },
  created() {
    //  获取数据
    var thde = this;
    this.$axios
      .get("/JSON/subList.json")
      .then((res) => {
        thde.data = res.data;
      })
      .catch(function (err) {
        console.log(err);
      });
    //中国数据
    this.$axios
      .get("/JSON/list.json")
      .then((res) => {
        thde.getlist = res.data.summaryDataIn;
        thde.setlist = res.data;
      })
      .catch(function (err) {
        console.log(err);
      });
  }
};
</script>


<style scoped>
/* 顶部top */
.top1 {
  width: 100%;
  height: 0.4rem;
}
.top {
  width: 100%;
  background-color: #000;
  padding: 0.04rem 0.1rem;
  text-align: left;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 0 0.125rem 0.125rem rgba(0, 0, 0, 0.1);
  z-index: 99;
}
.top img {
  width: 0.8rem;
  height: 0.31rem;
}
.nbannerbox {
  box-sizing: border-box;
  width: 100%;
  height: 2.23rem;
  background-image: url("../../public/img/topmainbanner.19bce86.jpg");
  background-repeat: no-repeat;
  background-size: 6.4rem 3.5rem;
  padding: 0.16rem 0 0.26rem;
}
.table-canada {
  margin-top: 0.8rem;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.data-table-box {
  box-sizing: border-box;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 0 0.375rem rgba(0, 0, 0, 0.1);
  border-radius: 0.05rem;
  padding: 0.16rem 0;
}
.data-table-box .h5 {
  overflow: hidden;
}
.data-table-box h5 {
  font-size: 0.16rem;
  float: left;
  margin: 0 0 0 0.08rem;
}
.data-table-box a {
  width: 0.6rem;
  height: 0.2rem;
  color: #fff;
  background-color: #000;
  border-radius: 0.25rem;
  font-size: 0.12rem;
  float: right;
  margin-right: 0.1rem;
}

.del-text {
  margin-top: 0.1rem;
  padding: 0.1rem 0.16rem 0;
  text-align: left;
}

/* 背景 */
.a {
  margin-top: 0.1rem;
  width: 100%;
  height: 1.6rem;
  background-image: url("../../public/img/1.467ea93.png");
  background-size: cover;
  overflow: hidden;
}
/* 累计确诊人数 */
.container {
  box-sizing: border-box;
  width: 100%;
  box-shadow: 0 0 0.375rem rgba(0, 0, 0, 0.1);
  border-radius: 0.05rem;
  padding: 0.16rem;
  margin-top: 0.2rem;
}
.topa {
  margin-top: 1.6rem;
}
.container a {
  display: inline-block;
  width: 2.4rem;
  height: 0.5rem;
  background-color: #000;
  border-radius: 50rem;
  margin-left: 0.3rem;
  line-height: 0.5rem;
  text-align: center;
  overflow: hidden;
}
.container a:nth-child(1) {
  color: #fff;
}
.container a:nth-child(2) {
  color: #333;
  background-color: #e6e6e6;
}
.ca {
  padding-top: 0.2rem;
}
.container1 {
  margin-top: 0.2rem;
  text-align: left;
  box-sizing: border-box;
  width: 100%;
  box-shadow: 0 0 0.375rem rgba(0, 0, 0, 0.1);
  border-radius: 0.05rem;
  padding: 0.16rem;
  margin-top: 0.2rem;
}
.container1 p {
  margin-top: 0.2rem;
  display: inline-block;
  text-align: center;
  width: 0.9rem;
  height: 0.3rem;
  background-color: #d9d9d9;
  border-radius: 0.25rem;
  color: #ffffff;
  margin-left: 0.2rem;
  line-height: 0.3rem;
}
.container1 .on {
  background-color: #000;
}
.data {
  padding: 0.16rem;
  margin-top: 0.2rem;
  text-align: left;
}
.data button {
  font-size: 0.18rem;
  height: 0.625rem;
  color: #fff;
  background: #ffc602;
}
.myfooter {
  background: #121213;
  color: #fff;
  padding: 0.5rem 0 0.5rem;
}
</style>
