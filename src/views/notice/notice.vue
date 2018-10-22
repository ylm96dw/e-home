<template>
  <div>
    <!-- 头部 -->
    <div class="ding3">
      <div class="top3">
      <p class="ft3">
        通知早知道
      </p>
    </div>
    </div>
    <!-- 内容 -->
    <div  class="wrap">
      <div class="wrap-content" @click="handleClick(item.newsId)" v-for="item in formData" :key="item.id">
        <div class="left">
        <img class="l-img"
        src="../../assets/iconfont_gonggaotongzhi.png" alt="">
        </div>
        <div class="right">
          <p>{{item.title}}</p>
          <div class="time">
          {{item.currentTime}}
          </div>
        </div>
      </div>

      <div class="line">没有数据了</div>

    </div>

    <foot></foot>

  </div>

</template>

<script>
import foot from '@/components/footer'
export default {
  components:{
    foot
  },
  data(){
    return {
      formData:[]
    }
  },
  methods: {
    getData(){
      this.$axios.get(`/news/newsList.do?page=1&rows=10&type=2`).then(res=>{
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
.ding3{
  height: 0.88rem;;
   width: 7.5rem;
}
.top3{
  background: #C50206;
  display: flex;
    width: 7.50rem;
    height: 0.88rem;
    position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 998;

  .ft3{
    position:relative;
    top: 0.14rem;
    left: 0.3rem;
    margin: 0 auto;
    font-size: 0.4rem;
    color: #fff;
  }
}

.wrap-content{

  width: 7.5rem;
  height: 1.88rem;
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.4rem;
  border-bottom: 0.04rem solid #eee;
  .left{
    width: 1.42rem;
    height: 1.64rem;
    margin-top: 0.1rem;
    margin-left: 0.4rem;
    margin-right: -0.3rem;
    .l-img{
      width: 0.8rem;

    }
  }
  .right{
    width: 5.7rem;
    height: 1.52rem;
    padding-top: 0.2rem;
    p{

      width: 5.48rem;
      height: 0.8rem;
      font-size: 0.3rem;
      color:#CCC;
    }
    .time{
      padding-top: 0.2rem;
      width: 5.48rem;
      height: 0.4rem;
      color: #aaa;
      font-size: 0.2rem;
    }
  }
}


.line{
  margin-top: 0.4rem;
  text-align: center;
  font-size: 0.4rem;
  color: #aaa
}

</style>
