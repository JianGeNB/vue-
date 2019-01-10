<template>
  <div class="rightlist">
    <ul>
      <li v-for="item of rightList" @click="handleClick">{{item}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      rightList: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('handleChange',e.target.innerText)
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/styles/common.scss";
.rightlist {
  position: absolute;
  top: 1.5rem;
  bottom: 0;
  right: 0;
  height: 100%;
  display: flex;
      flex-direction: column;
      justify-content: center;
  ul{
      li{
          color: $bgColor;
          margin:0.05rem 0;
          text-align: center
      }
  }
}
</style>
