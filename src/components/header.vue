<template>


  <div class="ding">
      <div class="top" >

        <div class="icon">
          <img src="../assets/back (1).png" @click="back" >
        </div>
        <div class="ft">
          <div class="ziti" v-text="title"  >{{title}}</div>
        </div>


  </div>
  </div>


</template>

<script>
export default {
  methods:{
    back(){
      this.$router.go(-1)
    },
  },
  computed:{
    title(){
      return this.$route.meta.title
    }
  }

}
</script>

<style scoped lang="scss">

  .ding{
  width: 7.5rem;
  height: 0.88rem;
  position: relative;
}
.top{
    background: #C50206;
    display: flex;
    width: 7.50rem;
    height: 0.88rem;
    position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 998;
    font-size: 20px;
    .icon{
      width: 0.72rem;
      height: 0.88rem;
      margin-top: 10px;
      margin-left: 10px;

    }
    .ft{
      font-size: 20px;
      color: #fff;
      margin: 0 auto;
      .ziti{
        margin-top: 10px;
      }
    }
  }
</style>
