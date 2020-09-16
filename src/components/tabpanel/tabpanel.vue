<style scoped>
#tabpanel {
  margin-top: 0.2rem;
}
h3 {
  text-align: left;
}
.left {
  width: 100%;
  text-align: left;
  color: #ffc602;
  position: relative;
  border-left: 1px solid #ffe380;
  overflow: hidden;
  padding: 0.1rem 0.1rem;
}
.left span {
  display: inline-block;
  margin-left: 0.1rem;
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
  left: -0.1rem;
  top: 0.1rem;
  z-index: 9;
}
.index-box {
  width: 100%;
  background-color: #f6f6f6;
  border-radius: 0.1rem;
  margin: 0.1rem 0.1rem;
}
p {
  padding: 0.05rem 0.1rem;
  color: #111;
}
</style>
 
<template>
  <!-- 病例 -->
  <div id="tabpanel">
    <h3>加拿大病例</h3>
    <div class="left" v-for="(item,key,index) in list" :key="index" v-show="isshow">
      <div class="box"></div>
      <span>{{key}}</span>
      <div class="index-box" v-for="(itme,key,index) in item" :key="index">
        <p>{{itme.provice}}</p>
        <p>{{itme.description}}</p>
      </div>
    </div>
    <button @click="show()" v-show="button">展开全部病例</button>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      list: {},
      isshow:false,
      button:true
    };
  },
  created() {
    const thad = this;
    this.$axios
      .get("/JSON/time_line.json")
      .then((res) => {
        //  console.log(res)
        thad.list = res.data;
      })
      .catch(function (err) {
        console.log(err);
      });
  },
  methods:{
    show(){
      this.isshow=true;
      this.button=false;
    }
  }
};
</script>
