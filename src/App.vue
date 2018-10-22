<template>
  <div id="app">
    <!-- <top></top> -->
    <router-view/>
  </div>
</template>

<script>
  // import top from '@/components/header'
export default {
  // components:{
  //   top
  // },
  name: 'App'
}

</script>

<style>
*{
  margin: 0;
  padding: 0;
}
.clearfix::after{
   content:'';
   display: block;
   clear:both;
   width: 0;
   height: 0;
}
</style>
