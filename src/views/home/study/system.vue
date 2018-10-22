<template>
  <div>
    <top></top>
    <div class="box"  v-for="item in formData" :key="item.id" @click="handleClick(item.newsId)">
      <div class="lf-i">
        <img :src="item.pic" >
      </div>
      <div class="rig-ziti">
        <div class="ziti">
          <p>{{item.title}}</p>
        </div>
        <div class="boot">
          <span class="s-l">{{item.currentTime}}</span>
          <span class="s-r"><img src="../../../assets/眼睛 (1).png" > {{item.count}}</span>
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
      this.$axios.get(`news/newsList.do?page=1&rows=10&type=4`).then(res=>{
        this.formData = res.rows
      })

    },
    handleClick(newsId){
      this.$router.push(`/newsDetail/${newsId}`)
    }

  },
  created(){
    this.getData()
  }
}
</script>

<style scoped lang="scss">
.box{
  text-decoration: none;
  width: 7.5rem;
  height: 2.02rem;
  display: flex;
  border-bottom: 1px solid #bbb;
  .lf-i{
    width: 1.6rem;
    height: 1.6rem;
    margin: 10px 20px;
    img{
      width: 1.6rem;
      height: 1.6rem;
    }
  }
  .rig-ziti{
    display: flex;
    flex-direction: column;
    width: 4.2rem;
    height: 1.6rem;
    .ziti{
      width: 4.2rem;
      height: 0.96rem;
      font-size: 14px;
      color: #000;
      margin-top: 10px;
    }
    .boot{
      width: 5.3rem;
      height: 0.26rem;
      font-size: 12px;
      color: #000;
      margin-top: 25px;

      .s-l{
        margin-right: 90px;
      }.s-r{
        img{
          display: inline-block;
          margin-bottom: -2px;
        }
      }
    }

  }
}

</style>
