<template>
  <div>
    <top></top>

    <div class="wrap" v-for="item in formData" :key="item.id">
      <div class="wrap-header">
        <div class="wrap-img"><img :src="item.header" ></div>
        <div class="wrap-main">
          <div class="wrap-user">{{item.username}}</div>
          <div class="wrap-time">
            <img src="" alt="">
            <span>{{item.currentTime}}</span>
            <img src="" alt="">
            <span>公开</span>
          </div>

        </div>
        <div class="wrap-ding">
            党员互动
        </div>
      </div>
      <div class="wrap-content">
        {{item.content}}
      </div>
      <div class="wrap-footer">
        <div class="wrap-right">
          <img src="" alt="">
          <span>回复</span>
        </div>
      </div>
    </div>

    <div class="but" >
      <img src="../../assets/发布btn.png" alt="" @click="submit" >
    </div>
    <!-- class="zhao " -->
    <div isShow? class="zhao" : style="display : none">
      <div class="area" >
        <textarea v-model="sub.content" name="" id="" cols="50" rows="8"></textarea>
      </div>
      <div class="btn ">
        <button class="btn-left" @click="fabu">发布</button>
        <button class="btn-right" >取消</button>
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
    return{
      formData:[],
      isShow:false,
      sub:{
        content:'',
      }
    }
  },
  methods:{
    getData(){
      this.$axios.get('/forum/forumList.do?page=1&rows=10&type=0&cates=0').then(res=>{
        this.formData = res.rows
      })
    },
    submit(){
      this.isShow = !isShow
    },
    fabu(){
      this.$axios.post('/forum/saveForum.do',this.sub).then(res=>{
        if(res.code == 1){
          console.log(res.data.content)
          // this.content = res.data.content
          this.getData()

        }

      })

    }
  },
  created(){
    this.getData()
  }
}
</script>

<style scoped lang="scss">
.wrap{
  width: 7.5rem;

  font-size: 15px;
  border-bottom: 15px solid #bbb;
  .wrap-header{
    width: 6.86rem;
    height: 0.92rem;
    display: flex;
    margin-left: 20px;
    margin-top: 10px;
    .wrap-img{
      width: 0.57rem;
      height: 0.57rem;
      img{
        display: block;
        width: 0.57rem;
        height: 0.57rem;
        border-radius: 50% 50%;
      }
    }
    .wrap-main{
      width: 3.44rem;
      height: 0.82rem;
      .wrap-user{
        width: 3.44rem;
        height: 0.4rem;
        margin-left: 10px;
      }
      .wrap-time{
        width: 3.44rem;
        height: 0.42rem;
        font-size: 13px;
      }
    }
    .wrap-ding{
      width: 1.32rem;
      height: 0.52rem;
      border:1px solid #c50206;
      border-radius: 10px;
      margin-top: 5px;
      margin-left: 20px;
      font-size: 15px;
      text-align:center;

    }
  }
  .wrap-content{
    width: 5.76rem;
    margin-left: 20px;
  }
  .wrap-footer{
    width: 5.76rem;
    height: 0.42rem;
    margin-top:10px;
    margin-bottom: 15px;

    .wrap-right{
      margin-left: 240px;
    }
  }
}
.but{
  position: fixed;
  right: 5px;
  bottom:20px;
}
.zhao{
  position: fixed;
  bottom:0;
  left: 0;
  right: 0;
  z-index: 10;
  background: #bbb;
  .area{
    margin:0 10px;
  }
  .btn{
    margin-top: -45px;
    .btn-right{
      margin-left: 280px;
    }
    .btn-left{
      margin-left: 10px;
      background: #f00;
      color: #fff;
    }


  }
}
</style>
