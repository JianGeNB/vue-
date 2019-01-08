<template>
  <div>
    <home-header></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <icons></icons>
    <hot></hot>
    <week-go></week-go>
  </div>
</template>
<script>
import HomeHeader from "../components/home/homeheader";
import HomeSwiper from "../components/home/homeswiper";
import Icons from "../components/home/icons";
import Hot from "../components/home/hot";
import WeekGo from "../components/home/weekgo";
export default {
  components: {
    HomeHeader,
    HomeSwiper,
    Icons,
    Hot,
    WeekGo
  },
  data() {
    return {
      swiperList: [
        {
          id: "001",
          url:
            "http://img1.qunarzz.com/piao/fusion/1811/7c/8e5c4ab8ee8b7402.jpg_750x200_dd7a38dd.jpg"
        },
        {
          id: "002",
          url:
            "http://img1.qunarzz.com/piao/fusion/1812/d6/daa880b254940402.jpg_750x200_b114308a.jpg"
        },
        {
          id: "003",
          url:
            "http://img1.qunarzz.com/piao/fusion/1901/84/5ee692cb657702.jpg_750x200_a5f6cc90.jpg"
        }
      ]
    };
  }
};
</script>
<style lang="sass">

</style>

