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
    props:['swiperList'],
    data() {
      return {
        swiperOption: {
          pagination: ".swiper-pagination",
          loop:true,
          autoplay:3000,
          speed:1000
        }
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

