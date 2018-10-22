<template>
<div>
jl;lnkl,
</div>
</template>

<script>

export default {
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

  },
  created(){
    this.getData()
  }
}
</script>

<style scoped >

</style>
