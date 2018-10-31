<template>
<div>
  <top></top>

  <div class="edit" @click="editing">编辑</div>


  <div class="wrap">
    <div class="wrap-type">
      <span class="title-l">头像</span>
      <img :src="formData.header" alt="">
    </div>
    <div class="wrap-type">
      <span class="title-l">姓名</span>
      <span class="title-r">{{formData.username}}</span>
    </div>
    <div class="wrap-type">
      <span class="title-l">身份证</span>
      <span class="title-r">{{formData.idCard}}</span>
    </div>
    <div class="wrap-type">
      <span class="title-l">家庭地址</span>
      <span class="title-r">{{formData.hometown}}</span>
    </div>
    <div class="wrap-type">
      <span class="title-l">工作地址</span>
      <span class="title-r">{{formData.address}}</span>
    </div>
    <div class="wrap-type">
      <span class="title-l">民族</span>
      <span class="title-r">{{formData.nation}}</span>
    </div>
    <div class="wrap-type">
      <span class="title-l">微信号</span>
      <span class="title-r">{{formData.wxNum}}</span>
    </div>
    <div class="wrap-type">
      <span class="title-l">QQ号</span>
      <span class="title-r">{{formData.qqNum}}</span>
    </div>
    <div class="wrap-type">
      <span class="title-l">性别</span>
      <span class="title-r">{{formData.sex}}</span>
    </div>
    <div class="wrap-type">
      <span class="title-l">最高学历</span>
      <span class="title-r">{{formData.education}}</span>
    </div>
    <div class="wrap-type">
      <span class="title-l">职称</span>
      <span class="title-r">{{formData.jobRank}}</span>
    </div>
    <div class="wrap-type">
      <span class="title-l">薪资水平</span>
      <span class="title-r">{{formData.salary}}</span>
    </div>
    <div class="wrap-type">
      <span class="title-l">入党时间</span>
      <span class="title-r">{{formData.joinPartyTime}}</span>
    </div>
    <div class="wrap-type">
      <span class="title-l">党费最后缴纳时间</span>
      <span class="title-r">{{formData.lastPayTime}}</span>
    </div>
    <div class="wrap-type">
      <span class="title-l">当前身份</span>
      <span class="title-r">{{formData.partyIdentity}}</span>
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
    return({
      formData:{}
    })
  },
  methods:{
    getData(){
      this.$axios.get('/user/userInfo.do').then(res=>{
        if(res.code == 1){
          this.formData = res.data
        }
      })
    },
    editing(){
      this.$router.push('/edit')
    }
  },
  created(){
    this.getData()
  }
}
</script>

<style scoped  lang="scss">
.wrap{
  width: 7.5rem;
  font-size: 15px;
  text-align: right;
  .wrap-type{
    width: 7.5rem;
    height: 1rem;
    border-bottom: 1px solid #bbb;
    display: flex;
    text-align: right;
    .title-l{
      display: block;
      width: 7.5rem;
      margin-top: 15px;
      margin-left: 10px;
      text-align: left;
    }
    .title-r{
      display: block;
      width: 3.5rem;
      margin-top:15px;
      margin-right: 10px;
    }
    img{
      display: block;
      width: 0.42rem;
      height: 0.42rem;
      margin-top: 15px;
      // margin-left: 280px;
      margin-right: 10px;
    }
  }
}
.edit{
  display: block;
  width:0.8rem ;
  height: 0.8rem;
  position: absolute;
  top: 15px;
  right: 10px;
  // right: 20px;
  z-index: 10005;
  font-size: 15px;
  color: #fff
}
</style>
