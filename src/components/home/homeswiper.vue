<template>
  <div class="swiper">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="(item,key) of swiperList" :key="key">
        <img class="swiper-img" :src="item.url" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
    name:'HomeSwiper',
    data() {
      return {
        swiperOption: {
          pagination: ".swiper-pagination",
          loop:true,
          autoplay:3000,
          speed:1000
        },
        swiperList: [
          {
            id:"001",
            url:"http://img1.qunarzz.com/piao/fusion/1811/7c/8e5c4ab8ee8b7402.jpg_750x200_dd7a38dd.jpg"
          },{
            id:"002",
            url:"http://img1.qunarzz.com/piao/fusion/1812/d6/daa880b254940402.jpg_750x200_b114308a.jpg"
          },{
            id:"003",
            url:"http://img1.qunarzz.com/piao/fusion/1901/84/5ee692cb657702.jpg_750x200_a5f6cc90.jpg"
          }
        ]
      }
    }
};
</script>
<style lang="scss" scoped>
  .swiper{
    overflow: hidden;
      width: 100%;
      height: 0;
      padding-bottom:26.5%;
    .swiper-img {
      width: 100%
    }
  }
</style>
<style>
  .swiper-pagination-bullet-active{background: #ffffff}
</style>

