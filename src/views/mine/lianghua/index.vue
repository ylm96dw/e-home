<template>
<div>
  <top></top>
  <div class="img">
    <img src="../../../assets/jifen.png" alt="">
    <span>{{formData.totalScore}}</span>
  </div>
  <div class="jifen" @click="$router.push('/mingxi')">
    <img src="../../../assets/lxjf.png" alt="">
    <span >积分明细</span>
    <img class="img-r" src="../../../assets/right.png" alt="">
  </div>
  <div class="rule">
    <span>积分规则</span>
    <img src="../../../assets/wenhao.png" alt="">
  </div>
  <div class="wrap">
    <div class="wrap-row">
      <span class="wrap-l">登录APP</span>
      <span class="wrap-r">5</span>
    </div>
    <div class="wrap-row">
      <span class="wrap-l">完善个人信息</span>
      <span class="wrap-r">2</span>
    </div>
    <div class="wrap-row">
      <span class="wrap-l">查看积分</span>
      <span class="wrap-r">1</span>
    </div>
    <div class="wrap-row">
      <span class="wrap-l">按时缴纳党费</span>
      <span class="wrap-r">10</span>
    </div>
    <div class="wrap-row">
      <span class="wrap-l">查看通知</span>
      <span class="wrap-r">2</span>
    </div>
    <div class="wrap-row">
      <span class="wrap-l">了解学院工作动态</span>
      <span class="wrap-r">5</span>
    </div>
    <div class="wrap-row">
      <span class="wrap-l">上交思想汇报经审核通过</span>
      <span class="wrap-r">5</span>
    </div>
    <div class="wrap-row">
      <span class="wrap-l">主动学习相关文件</span>
      <span class="wrap-r">10</span>
    </div>
    <div class="wrap-row">
      <span class="wrap-l">认真撰写新的总结并上交,经审核通过</span>
      <span class="wrap-r">5</span>
    </div>
    <div class="wrap-row">
      <span class="wrap-l">提交个人总结,并参与评议</span>
      <span class="wrap-r">2</span>
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
      this.$axios.get('/user/userInfo.do').then(res=>{
        this.formData = res.data
      })
    }
  },
  created(){
    this.getData()
  }
}
</script>

<style scoped lang="scss">
.img{
  height: 2.88rem;
  text-align: center;
  font-size: 20px;
  img{
    width: 7.5rem;
  }
  span{
    display: block;
    margin-top: -82px;
    color: #fff;
  }
}
.jifen{
  font-size: 20px;
  display: flex;
  height: 1.08rem;
  img{
    width: 0.6rem;
    height: 0.6rem;
    margin-top:10px;
  }
  span{
    display: block;
    margin-left: 10px;
    margin-top:10px;
  }
  .img-r{
    display: block;
    margin-top: 15px;
    margin-left: 220px;
    width: 0.3rem;
    height: 0.3rem;

  }
}
.rule{
  width: 7.5rem;
  height: 0.68rem;
  font-size: 20px;
  background: #bbb;
  display:flex;
  span{
    display: block;
    height: 0.64rem;
    margin-top: 5px;
    margin-left: 10px;
  }
  img{
    display: block;
    width: 0.36rem;
    height: 0.36rem;
    margin-left: 260px;
    margin-top: 10px;
  }
}
.wrap{
  width: 7.5rem;
  font-size: 18px;
  .wrap-row{
    width: 7.5rem;
    height: 0.68rem;
    border-bottom: 1px solid #bbb;
    margin-top: 10px;
    .wrap-l{
      margin-left: 10px;
    }
    .wrap-r{
      float: right;
      margin-right: 10px;
      color: #f00;
    }
  }
}
</style>
