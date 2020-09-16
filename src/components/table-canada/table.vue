<style scoped>
table {
  padding: 0.04rem 0;
  margin-top: 0.1rem;
  width: 100%;
  color: #111111;
}
table tr th {
  height: 0.35rem;
  background-color: #f8f8f8;
}
table tr td {
  padding: 0.1rem;
  border-bottom: 0.01rem solid #f8d8f8;
}
</style>
 
<template>
  <!-- 数据表格 -->
  <div class="table">
    <table>
      <tr>
        <th>省市</th>
        <th>累计确诊</th>
        <th>治愈</th>
        <th>死亡</th>
      </tr>
      <tr v-for="(item,index) in list" :key="index">
        <td v-html="item.area"></td>
        <td style="color:red;">
          <span>{{item.confirmed==''?'0':item.confirmed}}</span>
        </td>
        <td style="color:green;">
          <span>{{item.cured==''?'0':item.cured}}</span>
        </td>
        <td>
          <span>{{item.died==''?'0':item.died}}</span>
        </td>
      </tr>
    </table>
    
  </div>
</template>
 
<script>
export default {
  data() {
    return {
       list: {},
    };
  }, 
  created(){
    const thde =this;
     //获取表格数据
    this.$axios
      .get("/JSON/subList.json")
      .then((res) => {
        // console.log(res)
        thde.list = res.data.subList;
      })
      .catch(function (err) {
        console.log(err);
      });
  }
};
</script>