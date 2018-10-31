<template>
  <div>
    <top></top>
    <div class="wrap">
      <div class="wrap-title">
        <form action="" enctype="multipart/form-data">
          旧密码：
          <input class="input" type="password" v-model="password.oldPwd"  >
          新密码:
          <input class="input" type="password" v-model="password.newPwd1"  >
          确认密码：
          <input class="input" type="password" v-model="password.newPwd2" >
          <input class="btn" type="button" @click="submit" value="确定">
        </form>
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
  data(){
    return {
      password:{
        oldPwd:'',
        newPwd1:'',
        newPwd2:''
      }
    }
  },
  methods:{
    submit(){
      if(this.password.newPwd1 == this.password.newPwd2){
        let password = new FormData()
        password.append('oldPwd',this.password.oldPwd)
        password.append('newPwd',this.password.newPwd1)
        this.$axios.get(`/user/updatePwd.do?newPwd=${this.password.newPwd1}&oldPwd=${this.password.oldPwd}`).then(res=>{
          if(res.code == 1){
            this.$router.push('/mine')
          }
        })
      }
    }
  }
}
</script>

<style scoped lang="scss">
.wrap{
  width: 7.5rem;
  .wrap-title{
    width: 6rem;
    height: 6.02rem;
    margin-left: 30px;
    font-size: 20px;
    margin-top: 60px;
  }
}
.input{
  margin: 10px 0;
  width: 6rem;
  height: 0.82rem;
  border: 1px solid #bbb;
  border-radius: 5px;
}
.btn{
  width: 6rem;
  height: 0.94rem;
  background-color: #EF473A;
  border: 1px solid #EF473A;
  color: #fff;
  font-size: 20px;
}
</style>
