<style scoped>
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
  <!-- 确诊病例   治愈人数   死亡人数 -->
  <div clas="definite">
    <div class="data">
      <div>
        <h1 style="color: red;" v-html="data.confirmed">-</h1>
        <p>
          较昨日
          <span style="color: red;" v-html="'+'+data.confirmedRelative">-</span>
        </p>
        <p>确诊病例</p>
      </div>
      <div>
        <h1 style="color: green;" v-html="data.cured">-</h1>
        <p>
          较昨日
          <span style="color: green;" v-html="'+'+data.curedRelative">--</span>
        </p>
        <p>治愈人数</p>
      </div>
      <div>
        <h1 v-html="data.died">-</h1>
        <p>
          较昨日
          <span  v-html="'+'+data.diedRelative">--</span>
        </p>
        <p>死亡人数</p>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  props: {
      data:Object
  },
  data() {
    return {};
  },
};
</script>
