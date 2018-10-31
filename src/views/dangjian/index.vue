<template>
    <div>

      <top></top>
        <!-- <scroll-flip-page v-model="formData" >
          <div v-for="item in formData" :key="item.id" slot="pulldowm"></div>
        </scroll-flip-page> -->
        <div class="box" href="" v-for="item in formData" :key="item.id" @click="handleClick(item.newsId)">
          <div class="lf-i">
            <img :src="item.pic" alt="">
          </div>

          <div class="rig-ziti">
            <div class="ziti">
              <p>{{item.title}}</p>
            </div>
            <div class="boot">
              <span class="s-l">{{item.currentTime}}</span>
              <span class="s-r"><img src="../../assets/眼睛 (1).png" > {{item.count}}</span>
            </div>
          </div>
        </div>
      <ul
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10">
        <!-- <li v-for="item in list" :key="item">{{ item }}</li> -->
      </ul>
    </div>


</template>


<script>

import top from '@/components/header'
export default {
  components:{
    top,

  },
  data(){
    return{
      formData:[],
       page:1,
      //  dataList:[]


    }

  },
  methods:{
    loadMore() {
  this.loading = true;
  setTimeout(() => {
    // let last = this.list[this.list.length - 1];
    // for (let i = 1; i <= 10; i++) {
    //   this.list.push(last + i);
    // }
    this.page = this.page + 1
    this.getData()
    this.loading = false;
  }, 2500);
},
    getData(){
      this.$axios.get(`/news/newsList.do?page=1&rows=10&type=3`).then(res=>{
        this.formData = res.rows
        // console.log(page)
      })

    },
    handleClick(id){
      this.$router.push(`/newsDetail/${id}`)
    }
  },
  created(){
    this.getData()
  }
}

</script>

<style scoped lang="scss">

.box{
  text-decoration: none;
  width: 7.5rem;
  height: 2.02rem;
  display: flex;
  border-bottom: 1px solid #bbb;
  .lf-i{
    width: 1.6rem;
    height: 1.6rem;
    margin: 10px 20px;
    img{
      width: 1.6rem;
      height: 1.6rem;
    }
  }
  .rig-ziti{
    display: flex;
    flex-direction: column;
    width: 4.2rem;
    height: 1.6rem;
    .ziti{
      width: 4.2rem;
      height: 0.96rem;
      font-size: 14px;
      color: #000;
      margin-top: 10px;
    }
    .boot{
      width: 5.3rem;
      height: 0.26rem;
      font-size: 12px;
      color: #000;
      margin-top: 25px;

      .s-l{
        margin-right: 90px;
      }.s-r{
        img{
          display: inline-block;
          margin-bottom: -2px;
        }
      }
    }

  }
}

</style>
