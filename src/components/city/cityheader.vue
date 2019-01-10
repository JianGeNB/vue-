<template>
  <div class="header">
    <router-link to="/" style="color:white">
      <div class="header-back">
        <span class="iconfont">&#xe624;</span>
      </div>
    </router-link>
    <p>城市选择</p>
    <div class="header-search">
      <input type="text" v-model="searchKey" placeholder="请输入城市名或拼音">
    </div>
    <div class="searchResult" v-show="searchKey" ref="search">
      <ul class="city-list-all">
        <li v-for="item of searchList" :key="item.id" @click="changeStoreCity(item.name)">{{item.name}}</li>
        <li v-if="!searchList.length">未找到匹配项</li>
      </ul>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  name: "cityheader",
  props: {
    cityList: Object
  },
  data() {
    return {
      searchKey: "",
      timer: null,
      searchList: []
    };
  },
  methods:{
      changeStoreCity(value){
      this.$store.dispatch('changeCity',value);
      this.$router.push('/')
    }
  },
  computed: {
    allList() {
      return this.cityList.cities;
    }
  },
  mounted(){
      const wrapper = this.$refs.search;
    this.scroll = new BScroll(wrapper);
  },
  watch: {
    searchKey() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (this.searchKey !== "") {
        this.searchList = [];
        this.timer = setTimeout(() => {
          for (let item in this.allList)
            this.allList[item].forEach(element => {
              if (element.spell.indexOf(this.searchKey) > -1) {
                this.searchList.push(element);
              }
            });
        }, 100);
      } else {
        this.searchList = [];
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~@/assets/styles/common.scss";
.header {
  background: $bgColor;
  color: white;
  padding-bottom: 0.1rem;
  .header-back {
    position: absolute;
    left: 0.2rem;
    line-height: 0.86rem;
    height: 0.86rem;
  }
  p {
    line-height: 0.86rem;
    height: 0.86rem;
    font-size: 0.32rem;
    text-align: center;
  }
  .header-search {
    input {
      box-sizing: border-box;
      display: block;
      margin: auto;
      width: calc(100% - 0.2rem);
      height: 0.5rem;
      border-radius: 0.1rem;
      text-align: center;
      color: #ccc;
      font-size: 0.2rem;
      padding: 0 0.1rem;
    }
  }
  .searchResult {
    z-index: 1;
    // background: red;
    position: absolute;
    top: 1.39rem;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    background: #eeeeee;
    .city-list-all {
      padding: 0 0.1rem;
      background: white;
      li {
        padding: 0.2rem 0.1rem;
        border-bottom: 0.02rem solid #cccccc;
        color: #777;
      }
    }
  }
}
</style>
