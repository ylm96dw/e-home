<template>
  <div>
    <top></top>
   <div class="wrap" >
      <div class="wrap-con" v-for="item in formData" :key="item.id">
        <div class="img">
          <img :src="item.pic" alt="">
            <div class="huji">{{item.title}}</div>
          </div>
      </div>

   </div>

  </div>
</template>

<script>
import top from '@/components/header'
export default {

  components:{
    top
  },
  data(){
    return{
      formData:[]
    }
  },
  methods:{
    getData(){
      this.$axios.get(`/news/newsList.do?page=1&rows=10&type=7`).then(res=>{
        this.formData = res.rows
      })
    }
  },
  created(){
    this.getData()
  }
};
</script>

<style scoped lang="scss">
.wrap {
  width: 7.5rem;
  display: flex;
  flex-wrap: wrap;

  .wrap-con{
    width: 50%;
    .img {

        height: 3.79rem;
        margin:15px 15px  0;
      img {
        display: block;
        width: 3.11rem;
        height: 2.32rem;
      }
        .huji {
          width: 3.11rem;
          font-size: 13px;
        }


  }

  }
}
</style>
