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
            url:"//img.alicdn.com/tfs/TB1qicwzSzqK1RjSZFLXXcn2XXa-520-280.jpg_q90_.webp"
          },{
            id:"002",
            url:"https://img.alicdn.com/simba/img/TB1nFqzjVYqK1RjSZLeSuvXppXa.jpg"
          },{
            id:"003",
            url:"https://aecpm.alicdn.com/tfscom/TB1voUKygHqK1RjSZFPXXcwapXa.jpg"
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
      padding-bottom:52%;
    .swiper-img {
      width: 100%
    }
  }
</style>
<style>
  .swiper-pagination-bullet-active{background: #ffffff}
</style>

