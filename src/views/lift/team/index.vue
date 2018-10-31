<template>
  <div>
    <top></top>
    <div>
      <div style="height:100vh" id="bmap-container"></div>
    </div>

  </div>
</template>

<script>
import top from '@/components/header'

export default {
  components:{
    top,

  },
  methods:{
    getData(){
      this.initMap()

    }
    ,
    initMap(){
      var map = new BMap.Map("bmap-container");          // 创建地图实例
      var point = new BMap.Point(12691791.4644, 3873756.16219);  // 创建点坐标
      map.centerAndZoom('驻马店', 5);                 // 初始化地图，设置中心点坐标和地图级别


      map.addControl(new BMap.NavigationControl({
        anchor:window.BMAP_ANCHOR_TOP_LEFT
      }));



      var point = new BMap.Point(116.404, 39.915);
      // map.centerAndZoom(point, 15);
      var marker = new BMap.Marker(point);        // 创建标注
      map.addOverlay(marker);


      var point1 = new BMap.Point(114.02,32.98);
      // map.centerAndZoom(point, 15);
      var marker1 = new BMap.Marker(point1);        // 创建标注
      map.addOverlay(marker1);

    },



  },
  mounted () {
    this.getData()
  }
}
</script>

<style>

</style>
