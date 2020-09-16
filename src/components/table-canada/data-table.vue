<style scoped>
#data-table{
    margin-top: -0.5rem;
}
.definite {
  box-sizing: border-box;
  height: 1rem;
}
.data {
  margin-top: 0.1rem;
  width: 100%;
  height: 1rem;
  display: flex;
  justify-items: center;
  align-items: center;
}
.data div {
  flex: 1;
}
</style>
 
<template>
  <div id="data-table">
      <h4>中国最新疫情数据</h4>
      <div class="data">
      <div>
        <h1 style="color: red;" v-html="getlist.curConfirm">-</h1>
        <p>
          较昨日
          <span style="color: red;" v-html="getlist.curConfirmRelative">-</span>
        </p>
        <p>现有确诊</p>
      </div>
      <div>
        <h1 style="color: green;" v-html="getlist.icu">-</h1>
        <p>
          较昨日
          <span style="color: green;" v-html="getlist.diedRelative">--</span>
        </p>
        <p>现有疑似</p>
      </div>
      <div>
        <h1 v-html="getlist.icuDisable">-</h1>
        <p>
          较昨日
          <span v-html="getlist.icuRelative">--</span>
        </p>
        <p>现有重症</p>
      </div>
    </div>
     <div class="data">
      <div>
        <h1 style="color: red;" v-html="getlist.confirmed">-</h1>
        <p>
          较昨日
          <span style="color: red;" v-html="'+'+getlist.confirmedRelative">-</span>
        </p>
        <p>累计确诊</p>
      </div>
      <div>
        <h1 style="color: green;" v-html="getlist.cured">-</h1>
        <p>
          较昨日
          <span style="color: green;" v-html="'+'+getlist.curedRelative">--</span>
        </p>
        <p>累计治愈</p>
      </div>
      <div>
        <h1 v-html="getlist.died">-</h1>
        <p>
          较昨日
          <span v-html="getlist.diedRelative">--</span>
        </p>
        <p>累计死亡</p>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
    props:{
        getlist:Object
    },
  data() {
    return {};
  },
  activated() {},
};
</script>
