<style scoped>
</style>
 
<template>
  <div>
    <ve-histogram :data="chartData" ></ve-histogram>
  </div>
</template>

<script>
export default {
  props: {
    list: Array,
  },
  data() {
    return {
      chartData: {
        columns: ["日期","安省","BC省","魁省","萨省"],
        rows: [
          { 日期: "9月9日", 安省: 43536, BC省: 6591, 魁省: 1587, 萨省: 1527 },
          { 日期: "9月10日", 安省: 63876, BC省: 2441, 魁省: 63876, 萨省: 1311 },
          { 日期: "9月11日", 安省: 1669, BC省: 3212, 魁省: 63876, 萨省: 2321 },
          { 日期: "9月12日", 安省: 35411, BC省: 32113, 魁省: 34234, 萨省: 421 },
          { 日期: "9月13日", 安省: 20111, BC省: 1321, 魁省: 21321, 萨省: 1231 },
          { 日期: "9月14日", 安省: 50746, BC省: 2311, 魁省: 3212, 萨省: 123 },
          { 日期: "9月15日", 安省: 43536, BC省: 2321, 魁省: 1321, 萨省: 2133 },
          { 日期: "9月16日", 安省: 42455, BC省: 1231, 魁省: 132312, 萨省: 1321 },
        ],
      },
    };
  },
  // methods: {
  //   findCount() {
  //     var _this = this;
  //     this.$axios
  //       .get("/JSON/data.json")
  //       .then(function (response) {
  //         for (var key in response.data) {
  //             _this.user = response.data[key].subList;
  //         }
  //         var arr = [];
  //         var arrsd=[];
  //         // 获取名字
  //         for (let i in _this.user) {
  //           arr.push(_this.user[i].area); //属性
  //           arrsd.push(_this.user[i]);
  //         }
         
        
  //         //  console.log(arrlet)

  //         _this.chartData.columns=arr; //给rows传值
  //          _this.chartData.rows.area=arrsd; //给rows传值
  //          console.log(_this.chartData.rows)
  //       })
  //       .catch(function (err) {
  //         console.log(err);
  //       });
  //   },
  // },
  // //生命周期函数
  // created() {
  //   this.findCount();
  // },
};
</script>