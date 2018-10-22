<template>
  <div class="body">
      <top></top>
      <div class="wrap">
        <div>
          <img src="../../assets/logo.png" alt="">
        </div>
        <form action="" class="fm">
          <input class="put" type="text" placeholder="身份证号" v-model="formData.id_card">
          <input class="put" type="password" placeholder="密码" v-model="formData.password">
          <input class="denglu" type="button" value="登录" @click="handleClick" >
        </form>

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
      formData:{
        id_card:'1001',
        password:'123456'
      }
    }
  },
  methods:{

    handleClick(){
      this.$axios.post('/user/userLogin.do',this.formData).then(res=>{
        if(res.code == 1){
          console.log(res.code)
          this.$router.push('/mine')
          // this.$message.success(res.msg)
          this.$store.commit('CHANGE_Loading',res.token)
          this.$store.commit('CHANGE_userInfo',res.data)

        }
      })
    }
  }





}
</script>

<style scoped lang='scss'>
::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color:    #fff;
}

.body{
  height: 100vh;
  background: #C50206;
}
.ding{
  height: 0.88rem;;
   width: 7.5rem;
}
.top1{
  background: #C50206;
  display: flex;
    width: 7.50rem;
    height: 0.88rem;

    // position: fixed;
    //   top: 0;
    //   left: 0;
    //   right: 0;
    //   z-index: 998;
  .ft1{
    width: 2.0rem;
    height:0.86rem ;
    margin: 0 auto;
    font-size: 0.4rem;
    color: #fff;
    position:relative;
    top: 0.14rem;
    left: 0.3rem

  }
}
.wrap{

  background: #C50206;
  img{
    width: 4.06rem;
    height: 0.96rem;
    display: block;
    margin: 20px auto;


  }
}
.fm{
  width: 6rem;
  height: 3.1rem;


  .put{
    background: #C50206;
    position: relative;
    left: 40px;
    width: 6rem;
    height: 0.8rem;
    line-height: 0.8rem;
    border:1px solid #ff0;
    border-radius: 5px;
    margin-bottom: 10px;

    box-sizing: border-box;
    display: block;

    font-size: 20px;
    line-height: 16px;


  }
  .denglu{
    display: block;
    height: 0.82rem;
    width: 100%;
    background: #E3574F;
    border: 1px solid #E3574F;
    color: #fff;
    position: relative;
    left: 40px;

  }
}

</style>
