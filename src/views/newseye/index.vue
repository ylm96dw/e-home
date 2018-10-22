<template>
  <div>
    <top></top>
    <news></news>
  </div>
</template>


<script>

import news from '../../components/newseye'

export default {
  components:{
    top,
    news,

  }

}
</script>

<style>
.ding{
  height: 0.86rem;
}
.mint-header-button{
  height: 0.86rem;
}
.mint-header{
    background: #C50206;
    display: flex;
    width: 7.50rem;
    height: 0.88rem;
    position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 998;
  }
</style>
