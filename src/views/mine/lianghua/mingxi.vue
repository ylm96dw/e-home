<template>
  <div>
    <top></top>
    <div class="wrap" v-for="item in formData" :key="item.id">
      <div class="wrap-one">
        <div class="wrap-left">
          <div class="item">{{item.typeName}}</div>
          <div class="time">{{item.timeFormat}}</div>
        </div>
        <div class="wrap-right">
          +{{item.singleDesc}}
        </div>
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
      formData:{}
    }
  },
  methods:{
    getData(){
      this.$axios.get('/integral/integralList.do?page=1&rows=10').then(res=>{
        this.formData = res.rows
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
  font-size: 18px;
  .wrap-one{
    width: 7.5rem;
    height: 1.58rem;
    border-bottom: 1px solid #bbb;
    display: flex;
    .wrap-left{
      margin-top: 15px;
      margin-left: 10px
    }
    .wrap-right{
      margin-top: 15px;
      color: #f00;
      margin-left: 130px;
    }
  }

}
</style>
