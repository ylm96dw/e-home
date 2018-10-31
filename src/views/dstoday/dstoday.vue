<template>
  <div>
    <top></top>
    <div class="ft" v-html="content">

    </div>
  </div>
</template>

<script>
import axios from 'axios'
import getToday from '../../utils/getToday.js'
import cheerio from 'cheerio'
import top from '@/components/header'
export default {
  components:{
    top
  },
  data(){
    return {
      content:''
    }
  },
  methods:{
    getData(){
      let url = `http://211.67.177.56:8080/hhdj/proxy/proxy.do`
      let day = new Date().getDate()
      let month = new Date().getMonth() + 1

      day = day>=10?day + "":"0" + day
      month = month>=10?month + "":"0"+month
      axios.get(url,{params:{url:getToday(month,day)}}).then(res=>{
        console.log(res.data)
        const $ = cheerio.load(res.data)
        this.content = $('.p1_02').html()
      })
    }
  },
  created(){
    this.getData()
  }
}
</script>

<style scoped lang="scss">
.ft{
  margin: 0 10px;

}
/deep/ h1{
  font-size: 20px;
  margin: 10px auto;
  font-weight: 500;

}
/deep/ h2{
  font-size: 18px;
  margin: 10px auto;
  font-weight: 500;
}
/deep/ p{
  font-size: 15px;
  margin: 10px auto;
  font-weight: 300;
  line-height: 25px;
}
</style>
