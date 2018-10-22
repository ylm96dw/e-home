<template>
  <div>
    <!-- 头部 -->
      <div class="ding">
        <div class="top2">
          <div class="ft2">
            我的党建
          </div>
        </div>
      </div>

      <div  v-if="!userInfo.username">
         <!-- 图片框 -->
      <div class="banner" >
        <div class="ban-top img">
          <img class="tupian" src="../../assets/yuan.png">
        </div>
        <div class="ban-bot">
          <router-link class="ban-span" to="/login">你还没有登录，请登陆</router-link>
        </div>
      </div>
      <!-- 信息栏 -->
      <div  class="jump">
        <a href="/#/login" class="list">
          <img class="tu" src="../../assets/person.png" alt=""><span class="ziti">个人信息</span>
          <img class="zhixiang"
          src="../../assets/right.png" alt="">
        </a>
        <a href="" class="list">
          <img class="tu" src="../../assets//lxjf.png" alt=""><span class="ziti">个人量化积分</span>
          <img class="zhixiang"
          src="../../assets/right.png" alt="">
        </a>
        <a href="" class="list">
          <img class="tu" src="../../assets/xgmm.png" alt=""><span class="ziti">修改密码</span>
          <img class="zhixiang"
          src="../../assets/right.png" alt="">
        </a>
        <a href="" class="list">
          <img class="tu" src="../../assets/icon3.png" alt=""><span class="ziti">党费缴纳</span>
          <img class="zhixiang"
          src="../../assets/right.png" alt="">
        </a>
      </div>
      </div>

      <div v-else>
         <!-- 图片框 -->
      <div class="banner" >
        <div class="ban-top img">
          <img class="tupian" :src="userInfo.header">
        </div>
        <div class="ban-bot">
          <a class="ban-span" href="/#/login" v-text="userInfo.username"></a>
        </div>
      </div>
      <!-- 信息栏 -->
      <div  class="jump">
        <a href="/#/xinxi" class="list">
          <img class="tu" src="../../assets/person.png" alt=""><span class="ziti">个人信息</span>
          <img class="zhixiang"
          src="../../assets/right.png" alt="">
        </a>
        <a href="" class="list">
          <img class="tu" src="../../assets//lxjf.png" alt=""><span class="ziti">个人量化积分</span>
          <img class="zhixiang"
          src="../../assets/right.png" alt="">
        </a>
        <a href="" class="list">
          <img class="tu" src="../../assets/xgmm.png" alt=""><span class="ziti">修改密码</span>
          <img class="zhixiang"
          src="../../assets/right.png" alt="">
        </a>
        <a href="" class="list">
          <img class="tu" src="../../assets/icon3.png" alt=""><span class="ziti">党费缴纳</span>
          <img class="zhixiang"
          src="../../assets/right.png" alt="">
        </a>
        <div class="xia" @click="logout">
            <div class="out" >
              退出登录
            </div>
        </div>

      </div>
      </div>
    <foot></foot>
  </div>


</template>

<script>
import {mapState} from 'vuex'
import {mapMutations} from 'vuex'
import foot from '@/components/footer'
export default {
  components:{
    foot
  },


  methods:{
    ...mapMutations(['setToken']),
    logout(){
        this.setToken('')
        this.$router.push('/login')

    }
  },
  computed:{
    ...mapState(['userInfo','token'])
  },
  // created(){
  //   this.getData()
  // }
}
</script>

<style scoped lang="scss">
.ding{
  height: 0.88rem;;
   width: 7.5rem;
}
.top2{
  background: #C50206;
  display: flex;
    width: 7.50rem;
    height: 0.88rem;
    position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 998;

  .ft2{
   position: relative;
      top: 0.16rem;
      left: 3.0rem;

      color: #fff;
      font-size: 0.4rem;
  }
}

.banner{
  width: 7.5rem;
  height: 2.82rem;
  background: #C50206;
  .ban-top{
    width: 7.5rem;
    height: 2.07rem;
    padding-top: 40px;
    box-sizing: border-box;
    .tupian{
      display: block;
      width: 1.25rem;
      height: 1.25rem;
      margin: 0 auto;
      border-radius: 50% 50%;
    }
  }
  .ban-bot{
    width: 7.5rem;
    height: 0.36rem;
    .ban-span{
      display: block;
      font-size: 10px;
      text-align: center;
      color: #fff;
      margin-top: 5px;
      text-decoration: none;
    }
  }
}
.jump{

  font-size: 0.4rem;


  .list{
    display: block;
    text-decoration: none;
    color: #bbb;
    width: 7.5rem;
    height: 1.08rem;
    border-bottom: 1px solid #bbb;

    .zhixiang{

      float: right;
      margin-top: -23px;
    }
    .tu{
      float: left;
      width: 0.64rem;
      height: 0.64rem;
      padding:5px 10px;;
    }
    .ziti{
      display: block;
      padding-top: 10px;
    }

  }
}
.xia{

  height: 0.92rem;
    border: 1px solid #EF473A;
    background: #EF473A;
    margin: 10px 10px;
    color: #fff;
  .out{
    margin-top: 10px;
    text-align: center;

  }
}




</style>
