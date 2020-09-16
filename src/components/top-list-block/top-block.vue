/* <style scoped>
.left {
  width: 100%;
  text-align: left;
  color: #ffc602;
  position: relative;
}

.left span {
  display: inline-block;
  color: #555;
  font-size: 0.12rem;
  margin-left: 0.5rem;
}

/* 球 */
.box {
  width: 0.175rem;
  height: 0.175rem;
  border-radius: 100%;
  display: block;
  background: #ffc602;
  border: 3px solid #ffe380;
  position: absolute;
  left: .2rem;
  top: 0rem;
  z-index: 9;
}

.index-box {
  height: 0.4rem;
  width:95%;
  line-height: 20px;
  overflow: hidden;
  font-size: 16px;
  margin: 0.1rem 0.1rem;
  text-indent: 0.23rem;
}

p {
  width: 100%;
  padding: 0.05rem 0.1rem;
  color: #111;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
 
<template>
  <div id="app">
    <div class="left" v-for="(item,index) in data" :key="index">
      <div class="box"></div>
      <span v-html="item.date+' 本网综合'"></span>
      <div class="index-box cutFont">
        <p v-html="item.excerpt"></p>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      data: {},
    };
  },
  created() {
    const thad = this;
    this.$axios
      .get("./JSON/info_canada.json")
      .then((res) => {
        // console.log(res);
        thad.data = res.data;
      })
      .catch(function (err) {
        console.log(err);
      });
  },
};
</script>