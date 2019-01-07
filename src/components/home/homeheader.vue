<template>
    <div class="header">
        <div class="header-back">
            <span class="iconfont">&#xe624;</span>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            搜索
        </div>
        <div class="header-city">
            定位
            <span class="iconfont">&#xe62d;</span>
        </div>
    </div>
</template>
<script>
export default {
    name:""
}
</script>
<style lang="scss" scoped>
    @import '~@/assets/styles/common.scss';
    .header {
        display: flex;
        line-height:0.86rem;
        background: $bgColor;
        color: #ffffff;
        .header-back{
            width:0.64rem;
            text-align: center;
            float: left;
        }
        .header-input{
            flex: 1;
            background: #ffffff;
            border-radius: 0.1rem;
            height: 0.64rem;
            line-height: 0.64rem;
            margin: 0.12rem;
            color: #cccccc
        }
        .header-city{
            float: right;
            width: 1rem  
        }
    }
</style>