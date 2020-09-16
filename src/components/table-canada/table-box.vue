<style scoped>
#table-box{
    overflow: hidden;
}
h4{
float: left;
}
a{
    width: 0.8rem;
    height: 0.2rem;
    background: #000;
    float: right;
    border-radius: 25rem;
    color: #fff;
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
table {
  padding: 0.04rem 0;
  margin-top: 0.1rem;
  width: 100%;
  color: #111111;
  text-align: center;
}
table tr th {
  height: 0.35rem;
  background-color: #f8f8f8;
}
table tr td {
  width: 0.2rem;
  padding: 0.1rem;
  border-bottom: 0.01rem solid #f8d8f8;
}
</style>
 
<template>
  <div id="table-box">
       <h4>海外其他地区病例</h4>
       <a href="">详细数据</a>
      <div class="data">
      <div>
        <h1 style="color: red;" v-html="setlist.summaryDataOut.confirmed">-</h1>
        <p>确诊病例</p>
      </div>
      <div>
        <h1 style="color: green;" v-html="setlist.summaryDataOut.cured">-</h1>
        <p>治愈人数</p>
      </div>
      <div>
        <h1 v-html="setlist.summaryDataOut.died">-</h1>
        <p>死亡人数</p>
      </div>
    </div>
    <table>
      <tr>
        <th>国家</th>
        <th>累计确诊</th>
        <th>治愈</th>
        <th>死亡</th>
      </tr>
      <tr v-for="(item,index) in setlist.caseOutsideList" :key="index">
        <td  v-html="item.area"></td>
        <td style="color:red;">
          <span>{{item.confirmed==''?'0':item.confirmed}}</span>
        </td>
        <td style="color:green;">
          <span>{{item.crued==''?'0':item.crued}}</span>
        </td>
        <td>
          <span>{{item.died==''?'0':item.died}}</span>
        </td>
      </tr>
      <tr><td align="center" colspan="4">数据更新至 {{setlist.mapLastUpdatedTime}} (北京时间)</td></tr>
    </table>
  </div>
</template>
 
<script>
export default {
    props:{
        setlist:Object
    },
  data() {
    return {};
  },
  activated() {},
};
</script>
