<template>
  <div>
    <top></top>
    <div class="img-wrap">
      <img src="../../assets/timg.jpg" alt="">
    </div>

    <div class="wrap">
      <router-link to="/study" class="fen">
        <div class="he">
          <img src="../../assets/icon1.png" alt="">
          <div class="ziti">政治学习</div>
        </div>
      </router-link>
      <router-link to="/auditStatus" class="fen">
        <div class="he">
          <img src="../../assets/icon2.png" alt="">
          <div class="ziti">思想汇报</div>
        </div>
      </router-link>
      <router-link to="/auditStatus" class="fen">
        <div class="he">
          <img src="../../assets/icon3.png" alt="">
          <div class="ziti">心得总结</div>
        </div>
      </router-link>
      <router-link to="/liftChoice" class="fen">
        <div class="he">
          <img src="../../assets/icon4.png" alt="">
          <div class="ziti">民主评议</div>
        </div>
      </router-link>
      <router-link to="/finddorg" class="fen">
        <div class="he">
          <img src="../../assets/icon5.png" alt="">
          <div class="ziti">流动党员找组织</div>
        </div>
      </router-link>
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
.img-wrap{
  img{
    display: block;
    width: 7.5rem;
  }
}
.wrap{
    display: flex;
    flex-wrap: wrap;
    width: 7.5rem;
    height: 6.2rem;

    .fen{
      margin-top: 10px;
        width: 2.5rem;
        text-decoration: none;
        .he{
          margin-left: 20px;
          img {
            display: block;
            width: 1.7rem;
            height: 1.7rem;

            }
            .ziti {
              width: 1.7rem;
              font-size: 15px;
              margin-top: 10px;

              text-align: center;
            }
        }



  }

  }

</style>
