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
  data() {
    return {
      iconsList: [
        {
          id: "001",
          url:
            "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          detail: "景点门票"
        },
        {
          id: "002",
          url:
            "http://img1.qunarzz.com/piao/fusion/1811/f6/e54fad3ea337b02.gif",
          detail: "年终大促"
        },
        {
          id: "003",
          url:
            "http://img1.qunarzz.com/piao/fusion/1803/54/35899492b1302802.png",
          detail: "公园"
        },
        {
          id: "004",
          url:
            "http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
          detail: "一日游"
        },
        {
          id: "005",
          url:
            "http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
          detail: "无锡必游"
        },
        {
          id: "006",
          url: "http://img1.qunarzz.com/piao/fusion/1803/f5/a963333e1fa802.png",
          detail: "本地玩乐"
        },
        {
          id: "007",
          url:
            "http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png",
          detail: "亲子游"
        },
        {
          id: "008",
          url:
            "http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png",
          detail: "泡温泉"
        },
        {
          id: "009",
          url:
            "http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png",
          detail: "泡温泉"
        }
      ],
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
  // background: black;
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
