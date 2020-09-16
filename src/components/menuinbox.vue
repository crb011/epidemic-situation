<style scoped>
.container {
  width: 100%;
  height: 1rem;
  margin-top: 0.1rem;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  box-shadow: 0 0 0 #000;
}
.container .menuinbox {
  display: flex;
  height: 0.55rem;
  background-color: #000;
  border-radius: 0.05rem;
  justify-items: center;
  align-items: center;
}
.container .menuinbox a {
  flex: 1;
  color: #fff;
}
.container .menuinbox a .t1 {
  font-size: 0.14rem;
}
.container .menuinbox a .t2 {
  font-size: 0.12rem;
}
.container .menuinbox2 {
  display: flex;
  height: 0.45rem;
  justify-items: center;
  align-items: center;
  box-sizing: border-box;
}
.container .menuinbox2 a {
  display: flex;
  flex: 1;
  color: #000;
  height: 0.3rem;
  background-color: orange;
  margin-left: 0.05rem;
  border-radius: 0.05rem;
  padding: 0.04rem 0;
  overflow: hidden;
  align-items: center;
  justify-content: center;
}
.container .menuinbox2 a .t1 {
  font-size: 0.16rem;
  margin-left: 0.05rem;
}
</style>
 
<template>
  <!-- 病例地图  实时播报  疫情自查   防护手册-->
  <div class="container">
    <div class="menuinbox">
      <a href="#">
        <span class="t1">病例地图</span>
        <br />
        <span class="t2">case Map</span>
      </a>
      <a href="#">
        <span class="t1">实时播报</span>
        <br />
        <span class="t2">Real-time</span>
      </a>
      <a href="#">
        <span class="t1">疫情自查</span>
        <br />
        <span class="t2">Latest Rumors</span>
      </a>
      <a href="#">
        <span class="t1">防护手册</span>
        <br />
        <span class="t2">Manual</span>
      </a>
    </div>
    <div class="menuinbox2">
      <a href="#">
        <span class="iconfont">&#xe673;</span>
        <span class="t1">关于我们</span>
      </a>
      <a href="#">
        <span class="iconfont">&#xe6be;</span>
        <span class="t1">抗疫联盟</span>
      </a>
      <a href="#">
        <span class="iconfont">&#xe635;</span>
        <span class="t1">停课详情</span>
      </a>
      <a href="#">
        <span class="iconfont">&#xe603;</span>
        <span class="t1">抗疫用品</span>
      </a>
    </div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {};
  },
};
</script>
