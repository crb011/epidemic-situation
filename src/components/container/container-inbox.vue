<style scoped>
</style>
 
<template>
  <ve-map :data="chartData"></ve-map>
</template>

<script>
export default {
  data() {
    return {
      chartData: {
        columns: ["area","confirmed", "crued", "died"],
        rows: [
        ],
      },
    };
  },
  methods:{
        findCount(){
          var _this = this;
         this.$axios.get('/JSON/list.json').then(function (response) {
            _this.user = response.data.caseList;
            // console.log(_this.user);
            _this.chartData.rows = _this.user;    //给rows传值
          }).catch(function (err) {
            console.log(err);
          });
        }
      },
      //生命周期函数
      created(){
        this.findCount();
      },
};
</script>