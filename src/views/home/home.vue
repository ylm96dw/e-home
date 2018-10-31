<template>
  <div class="body ">
    <!-- 顶部 -->

    <div class="ding">
      <div class="top  ">
      <div class="img">
        <img src="../../assets/logo.png" alt="">
      </div>
      <router-link to="/login" class="login">
        登录
      </router-link>
    </div>
    </div>

    <!-- 轮播图 -->
    <div class="lunbo">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in formData" :key="item.id" >
          <img class="lbimg" :src="item.imgUrl" alt="" @click="handleClick(item.url)">
          <div class="content">{{item.title}}</div>
        </mt-swipe-item>

      </mt-swipe>



    </div>
    <!-- 小标签 -->

      <div class="icon">
        <a href="/#/newseye">
          <img  class="icimg" src="../../assets/icon_01.png" >
          <div class="icon-ti">信息新闻眼</div>
        </a>
        <a href="/#/lift">
          <img  class="icimg" src="../../assets/icon_02.png" >
          <div class="icon-ti">掌上组织生活</div>
        </a>
        <router-link :to="!token ?'/login' : '/yunhudong'" >
          <img  class="icimg" src="../../assets/icon_01.png" >
          <div class="icon-ti">党员云互动</div>
        </router-link>

        <a href="/#/dangjian">
          <img  class="icimg" src="../../assets/icon_01.png" >
          <div class="icon-ti">党建一点通</div>
        </a>
        <a href="/#/showdy">
          <img class="icimg"  src="../../assets/icon_01.png" >
          <div class="icon-ti">党员亮身份</div>
        </a>
        <a href="/#/dsToday">
          <img  class="icimg"  src="../../assets/icon_01.png" >
          <div class="icon-ti">党史上的今天</div>
        </a>
      </div>
     <!-- 图片 -->
    <div>
        <img class="aimg" src="../../assets/banner1.png" alt="">
    </div>

    <div class="foot-menu">
            <div class="cell-left"></div>
            <div class="cell-right">
                <div class="cell-row">
                    <router-link to="/anytimestudy"></router-link>
                    <router-link to="/anytimephoto"></router-link>
                </div>
                <div class="cell-row">
                    <router-link to="/System"></router-link>
                    <router-link to="/activity"></router-link>
                </div>
            </div>
        </div>

    <!-- 底部 -->

      <foot></foot>


  </div>

</template>

<script>

// import Header from '@/components/header'

import foot from '@/components/footer'
import { mapState } from 'vuex';

export default{
  components:{
    // Header,
    foot
  },
  data(){
    return{
      formData:[]
    }
  },
  methods:{
    getData(){
      this.$axios.get('/carousel/carouselList.do').then(res=>{
        this.formData = res.rows
      })
    },
    handleClick(url){
      this.$router.push(`/newsDetail1/${url}`)
    },

  },
  created(){
    this.getData()
  },
  computed: {
    ...mapState(['token'])
  }
}



</script>

<style scoped lang="scss">

.ding{
  width: 7.5rem;
  height: 0.88rem;
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
    .img{
      width: 2.92rem;
      height: 0.88rem;
    }
    img{
      display: block;
      width: 2.8rem;
      height: 0.72rem;
      margin:0.1rem auto 0;
      font-size: 0.1rem;
    }
    .login{
      position: relative;
      top: 0.16rem;
      left: 3.6rem;
      text-decoration: none;
      color: #fff;
      font-size: 0.4rem;
    }

  }


.lunbo{
    width: 7.5rem;
    height: 3.75rem;

    .lbimg{
      height:3.75rem;
      width: 7.5rem;

    }
    .content{
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      color: #fff;
      background-color: #aaa;
      font-size: 13px;
      font-weight: 400;
    }


}
.icon{
  display: flex;
  flex-wrap: wrap;
  height: 3.95rem;
  background-image: url('../../assets/bt_bg.png');
  a{
    width: 2.2rem;
    margin-left: 0.02rem;
    text-align: center;
    margin-top: 0.2rem;
    color: #666
  }
  .icimg{
    width: 1rem;
    height: 1rem;
  }
  .icon-ti{
    font-size: 0.2rem;
  }
}
.aimg{
  width: 7.5rem;
  height: 1.8rem;
}
.ximg{
  width: 7.5rem;
  height: 3.3rem;
}
.foot-menu {
    display: flex;
    background: url("../../assets/1.png") no-repeat;
    height: 3.296rem;
    width: 100%;
    background-size: 100%;
    padding-bottom: 1rem;

    .cell-left {
        flex: 1;
        height: 100%;
    }

    .cell-right {
        flex: 2;

        .cell-row {
            height: 50%;
            display: flex;

            a {
                flex: 2;
            }
        }
    }
}


</style>
