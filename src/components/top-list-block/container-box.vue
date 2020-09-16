<style scoped>
#container-box {
  width: 100%;
  margin-top: 0.2rem;
  overflow: hidden;
  padding: 0 0.08rem;
}
#container-box .spa {
  float: left;
}
#container-box .a {
  width: 0.8rem;
  height: 0.2rem;
  background-color: #ffc602;
  float: right;
  border-radius: 0.2rem;
  color: #fff;
}
ul,
li {
  list-style: none;
}
ul li {
  border-radius: 0.05rem;
  margin: 0.1rem 0;
  overflow: hidden;
  box-shadow: 0 0 0.1rem rgba(0, 0, 0, 0.3);
}

.slide-box {
  margin-top: 0.1rem;
  display: -webkit-box;
  overflow-x: auto;
  /*适应苹果*/
  -webkit-overflow-scrolling: touch;
}

.slide-item {
  width: 3rem;
  margin-right: 30px;
}

/*隐藏掉滚动条*/
.slide-box::-webkit-scrollbar {
  display: none;
}
.slide-item .img {
  width: 100%;
  height: 1.21rem;
  background-color: #ffc602;
  background-image: url("../../../public/img/fakenews-bg2.707c0fa.jpg");
  background-size: cover;
  background-position: 0 -35px;
  position: relative;
  display: flex;
  align-items: center;
}
.slide-item .img span {
  width: 90%;
  font-size: 0.2rem;
  color: #fff;
}
.slide-item .img img {
  width: 0.7rem;
  position: absolute;
  top: 0.1rem;
  right: 0.1rem;
}
.slide-item p {
  height: 2.7rem;
  margin: 0.16rem;
  text-align: left;
  font-size: 0.14rem;
}
.slide-item a {
  display: inline-block;
  padding: 0.1rem 0.1rem;
  color: #fff;
  background: #000;
  border-radius: 0.05rem;
  margin-bottom: 0.15rem;
}
.rectangle ul {
  margin-left: 35%;
}
.rectangle ul li {
  float: left;
  width: 0.15rem;
  height: 0.15rem;
  background: #ddd;
  border-radius: 25rem;
  margin-left: 0.1rem;
}
.rectangle ul .aitave {
  background: #4da1f7;
}
</style>
 
<template>
  <div id="container-box">
    <div class="clearfix">
      <span class="spa">最新辟谣</span>
      <p class="a">举报谣言</p>
    </div>
    <ul class="slide-box">
      <li ref="box" class="slide-item" v-for="(item, index) in data" :key="index">
        <div class="img">
          <span>{{item.title}}</span>
          <img src="../../../public/img/yao-red.2318cd9.svg" alt="加载中" />
        </div>
        <p>{{item.excerpt}}</p>
        <a href>分享给朋友</a>
      </li>
    </ul>
    <!-- <div class="rectangle">
      <ul>
        <li class="aitave"></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div> -->
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      data:{}
    }
  },
      created() {
        const thde = this;
        this.$axios
          .get("/JSON/search.json")
          .then((res) => {
            // console.log(res);
            thde.data = res.data;
          })
          .catch(function (err) {
            console.log(err);
          });
      },
};
</script>
