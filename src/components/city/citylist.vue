<template>
  <div class="citylist" ref="citylist">
    <div>
      <div class="city">
        <p class="city-title">当前城市</p>
        <ul class="city-list">
          <li>{{this.$store.state.currentCity}}</li>
        </ul>
      </div>
      <div class="city">
        <p class="city-title">热门城市</p>
        <ul class="city-list">
          <li v-for="item of hotList" :key="item.id" @click="changeStoreCity(item.name)">{{item.name}}</li>
        </ul>
      </div>
      <div class="city">
        <div v-for="(item,key) of allList" :key="key" :ref="key">
          <p class="city-title">{{key}}</p>
          <ul class="city-list-all">
            <li v-for="(ytem) of item" :key="ytem.id" @click="changeStoreCity(ytem.name)">{{ytem.name}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  props: {
    cityList: Object,
    cityLetter: String
  },
  mounted() {
    const wrapper = this.$refs.citylist;
    // console.log(wrapper)
    this.scroll = new BScroll(wrapper);
  },
  methods:{
    changeStoreCity(value){
      this.$store.dispatch('changeCity',value);
      this.$router.push('/')
    }
  },
  computed: {
    hotList() {
      return this.cityList.hotCities;
    },
    allList() {
      return this.cityList.cities;
    }
  },
  watch :{
    cityLetter () {
      // console.log(this.$refs[this.cityLetter][0])
      this.scroll.scrollToElement(this.$refs[this.cityLetter][0])

    }
  }
};
</script>
<style lang="scss" scoped>
.citylist {
  background: #eee;
  position: absolute;
  top: 1.39rem;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}
.city {
  .city-title {
    height: 0.5rem;
    line-height: 0.5rem;
    padding-left: 0.2rem;
  }
  .city-list {
    background: white;
    padding: 0.2rem 0.1rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: start;
    li {
      display: inline-block;
      border: 0.04rem solid #777;
      border-radius: 0.1rem;
      padding: 0.05rem 0.4rem;
      margin: 0 0.1rem 0.1rem 0.1rem;
    }
  }
  .city-list-all {
    background: white;
    padding: 0 0.1rem;
    li {
      padding: 0.2rem 0.1rem;
      border-bottom: 0.02rem solid #cccccc;
    }
  }
}
</style>
