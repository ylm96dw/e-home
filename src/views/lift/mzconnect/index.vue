<template>
<div>
  <top></top>
  <div class="wrap">
    <!-- <router-link to="" > -->
      <div class="wrap-title">
        <div class="ziti">个人总结</div>
      </div>

    <!-- </router-link> -->
    <!-- <router-link to="" > -->
      <div class="wrap-title" >
        <div class="ziti">民主评议</div>
      </div>

    <!-- </router-link> -->
  </div>
</div>
</template>

<script>
 import top from '@/components/header'
export default {

  components:{
    top
  },

}
</script>

<style scoped lang="scss">
.wrap{
  width: 7.5rem;
  height: 3.08rem;
  margin-top: 200px;
  .wrap-title{
    width: 3.95rem;
    height: 1.14rem;
    border:1px solid #C50206;
    background: #C50206;
    font-size: 20px;
    text-align: center;
    margin: 20px auto;
    color: #fff
  }

  .ziti{
    margin-top: 15px;


  }
}
</style>
