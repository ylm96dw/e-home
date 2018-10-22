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

<style>

</style>
