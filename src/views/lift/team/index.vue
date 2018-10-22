<template>
<div>
  <top></top>
  <div class="bamap-wrap" id="bmap-container"></div>
</div>
</template>

<script>
 import top from '@/components/header'
export default {

  components:{
    top
  },
  methods: {
    getData(){
      this.initMap()
    },
    //初始化地图
    initMap(){
      const BMap = window.BMap
      this.map = new BMap.Map("bmap-container")
      this.addControl()
    },
    //添加控件
    addControl(){
      map.addControl(new BMap.NavigationControl({
        anchor:window.BMAP_ANCHOR_TOP_LEFT
      }));
      map.addControl(new BMap.ScaleControl({
        anchor:window.BMAP_ANCHOR_TOP_LEFT
      }));
    }

  }

}
</script>

<style scoped lang="scss">

</style>
