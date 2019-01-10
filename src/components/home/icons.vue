<template>
  <swiper class="icons" :options="swiperOption">
    <swiper-slide v-for="(item,index) of iconLiew" :key="index">
      <div v-for="(item,yndex) of item" class="icons-box" :key="item.id">
        <div class="icons-content">
          <img class="icons-img" :src="item.url" alt>
        </div>
        <p>{{item.detail}}</p>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
export default {
  name: "Icons",
  props:{
    iconsList:Array
  },
  data() {
    return {
      swiperOption: {
          pagination: ".swiper-pagination",
      }
    };
  },
  computed: {
      iconLiew() {
          let arr =[];
          this.iconsList.forEach((item,index)=>{
              const page = Math.floor(index/8)
              if(!arr[page]){
                  arr[page]=[];
              }
              arr[page].push(item)
          })
          return arr;
      }
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/styles/common.scss";
.icons {
  width: 100%;
  height: 0;
  padding-bottom: 50%;
  background: #ffffff;
  .icons-box {
    position: relative;
    float: left;
    height: 0;
    width: 25%;
    padding-bottom: 25%;
    // background: red;
    .icons-content {
      position: absolute;
      top: 0.2rem;
      left: 0;
      right: 0;
      bottom: 0.44rem;
      height: 0;
      padding-bottom: 20%;
      .icons-img {
        display: block;
        margin: 0 auto;
        width: 60%;
      }
    }
    p {
      position: absolute;
      width: 100%;
      bottom: 0.2rem;
      text-align: center;
      @include textOverFlow;
    }
  }
}
</style>
