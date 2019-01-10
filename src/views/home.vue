<template>
  <div>
    <home-header></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <icons :iconsList="iconsList"></icons>
    <hot :hotList="hotList"></hot>
    <week-go :weekList="weekList"></week-go>
  </div>
</template>
<script>
import HomeHeader from '../components/home/homeheader'
import HomeSwiper from '../components/home/homeswiper'
import Icons from '../components/home/icons'
import Hot from '../components/home/hot'
import WeekGo from '../components/home/weekgo'
import axios from 'axios'
export default {
  components: {
    HomeHeader,
    HomeSwiper,
    Icons,
    Hot,
    WeekGo
  },
  data () {
    return {
      lastCity:'',
      swiperList: [],
      hotList: [],
      iconsList: [],
      weekList: []
    }
  },
  methods: {
    getAxios () {
      axios.get('https://www.easy-mock.com/mock/5c346687fad511025643eeb7/shop/home').then((rdata) => {
      if (rdata.data.code === 0) {
        this.swiperList = rdata.data.data.swiperList
        this.hotList = rdata.data.data.hotList
        this.iconsList = rdata.data.data.iconsList
        this.weekList = rdata.data.data.weekList
      }
    })
    }
  },
  mounted () {
    this.getAxios()
    this.lastCity = this.$store.state.currentCity
  },
  activated () {
    if(this.lastCity !== this.$store.state.currentCity){
      this.lastCity = this.$store.state.currentCity;
      this.getAxios()
    }
  }
}
</script>
