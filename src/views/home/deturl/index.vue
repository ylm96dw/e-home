<template>
  <div>
    <top></top>
    <div class="wrap">
      <div class="wrap-title">
        {{formData.title}}
      </div>

      <div class="content" v-html="formData.content">

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
      formData:[]
    }
  },
  methods:{
    getData(){
      this.$axios.get(`/news/newsContent.do?newsId=${this.$route.params.url}`).then(res=>{
        this.formData = res.data

      })
    }
  },
  created(){
    this.getData()
  }

}
</script>

<style scoped lang="scss">
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
