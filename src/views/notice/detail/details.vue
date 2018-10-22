<template>
  <div>
   <div class="ding">
      <div class="top" >

        <div class="icon">
          <img src="../../../assets/back (1).png" @click="back" >
        </div>
        <div class="ft">
          <div class="ziti" v-text="title"  >{{title}}</div>
        </div>
      </div>
  </div>
    <div >
      <div class="wrap-header" v-html="formData.title">
        {{formData.title}}
      </div>
      <div class="wrap-content" v-html="formData.content">
        {{formData.content}}
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
      title:'',
      type:''
    }
  },
  methods: {
    getData(){
      let id = this.$route.params.id
      this.$axios.get(`/news/newsContent.do?newsId=${id}`).then(res=>{
        if(res.code == 1){
          console.log(res.data.type);
          this.type = res.data.type;
          this.formData = res.data;
          this.getType()
        }



    //     if(res.code == 1){
    //       console.log(res.data)
    //       this.type = res.data.type;
    //       this.formData = res.data;
    //       this.getType()
    //     }
      })
    },

      getType(){
        switch(this.type){
          case 0:
          this.title = '信工新闻眼'
          break;
          case 1:
          this.title = '特色活动'
          break;
          case 2:
          this.title = '通知早知道'
          break;
          break;
          case 3:
          this.title = '党建一点通'
          break;
          case 4:
          this.title = '制度建设'
          break;
          case 5:
          this.title = '党员亮身份'
          break;
          case 6:
          this.title = '随时随地学'
          break;
          case 7:
          this.title = '随时随地拍'
          break;
          case 8:
          this.title = '政治学习'
          break;
          default:
          this.title = ''
          break;
        }
      },

      back(){
      this.$router.go(-1)
    }
  },
  created(){
    this.getData()
  }
}
</script>



<style scoped lang='scss'>
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



/deep/.wrap-header{
  font-size: 24px;
}
/deep/.wrap-content{
  img{
    display:block;
    width: 7.1rem;
    margin-left: 10px;
    margin-bottom: 20px;
  }
  /deep/p{
  line-height: 2;
  font-size: 14px;;
}
}
/deep/p{
  line-height: 2;
  font-size: 12px;
}
</style>
