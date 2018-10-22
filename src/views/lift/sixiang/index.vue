<template>
  <div>
    <top></top>
    <div class="wrap">
      <div class="img">
      <img src="../../../assets/reviewing.png" alt="">
      </div>
      <div class="shenhe">
        正在审核中
      </div>
      <div class="close" @click="back">
        <div class="ziti">关闭</div>
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
  methods:{
    back(){
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped lang="scss">
.wrap{
  width: 7.5rem;

    .img{
      width: 7.5rem;
      height: 1.92rem;
      margin-top: 50px;
        img{
          display: block;
          width: 1.84rem;
          height: 1.84rem;
          margin:0 auto;
        }
      }
    .shenhe{
      width: 7.5rem;
      height: 0.4rem;
      text-align: center;
      font-size: 15px;
    }
    .close{

      width: 60%;
      height: 0.8rem;
      font-size: 20px;
      border: 1px solid #C50206;
      border-radius: 10px;
      text-align: center;
      background: #C50206;
      color: #fff;
      margin: 80px auto;
      .ziti{
        margin-top: 10px;
      }
    }
}

</style>
