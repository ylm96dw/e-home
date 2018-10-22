<template>
  <div class="bot">
    <router-link class="ac shouye1" to="/">
      <img src="../assets/党_grey.png" alt="">
      <div>首页</div>
    </router-link>
    <router-link class="ac tongzhi" to="/notice">
      <img src="../assets/消息_grey.png" alt="">
      <div>通知早知道</div>
    </router-link>
    <router-link class="ac wode" to="/mine">
      <img src="../assets/会员_grey.png" alt="">
      <div>我的党建</div>
    </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.bot{
  width: 7.5rem;
  height: 0.92rem;
  background-image: url('../assets/底部bg.png');
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  .ac{
    width: 2.5rem;
    height: 0.92rem;
    text-align: center;
    text-decoration: none;


    img{
      display: block;
      margin:0 auto;
      width: 0.42rem;
      height: 0.54rem;

    }
    div{
      font-size: 0.2rem;
      color: #999;

    }
  }
  .shouye1:active{
    div{
      color: #f00
    }
  }
  .tongzhi:hover{
    div{
      color: #f00
    }
  }
  .wode:hover{
    div{
      color: #f00
    }
  }



}

</style>
