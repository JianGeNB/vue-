<template>
    <div class="header">
        <div class="header-back">
            <span class="iconfont">&#xe624;</span>
        </div>
        <p>城市选择</p>
        <div class="header-search">
            <input type="text" placeholder="请输入城市名或拼音"/>
        </div>
    </div>
</template>
<script>
export default {
    name:"cityheader"
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/common.scss';
    .header{
        background: $bgColor;
        color:white;
        padding-bottom: 0.1rem;
        .header-back{
            position: absolute;
            left: 0.2rem;
            line-height: .86rem;
            height: 0.86rem;
        }
        P{
            line-height: .86rem;
            height: 0.86rem;
            font-size: 0.32rem;
            text-align: center;
        }
        .header-search{
            input{
                box-sizing: border-box;
                display: block;
                margin: auto;
                width: calc(100% - 0.2rem);
                height: 0.5rem;
                border-radius: 0.1rem;
                text-align: center;
                color:#ccc;
                font-size: 0.2rem;
                padding: 0 0.1rem
            }
        }
    }
</style>
