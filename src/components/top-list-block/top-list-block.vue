<style scoped>
#top-list-block{
    padding: 0.1rem;
    text-align: left;
}
span{
    width: 100%;
    height: 0.5rem;
    display: inline-block;
    font-size: 0.16rem;
    border-bottom: 1px 1px solid #f2f2f2;
}
.top-list{
    width: 100%;
    border-bottom: 1px solid #d9d9d9;
}
.top-list h3,p,span{
    box-sizing: border-box;
    padding:0.1rem 0.1rem;
}
</style>
 
<template>
  <div id="top-list-block">
      <span>疫情头条</span>
        <div class="top-list" v-for="(item, index) in data" :key="index">
            <h3 v-html="item.title"></h3>
            <p v-html="item.excerpt"></p>
            <span v-html="item.date"></span>
        </div>

        <button>提供新闻线索/举报谣言</button>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
        data:{}
    };
  },
  created(){
      const thad = this;
      this.$axios.get("./JSON/action_search.json").then(res=>{
        //   console.log(res)
        thad.data=res.data
      }).catch(function(err){
          console.log(err);
      })
  }
};
</script>
