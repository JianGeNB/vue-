<template>
    <div class="weekgo">
        <div class="weekgo-title">周末去哪</div>
        <div class="weekgo-content" v-for="item of weekList" :key="item.id">
            <div class="weekgo-img">
                <img :src="item.url" alt="">
            </div>
            <p>无锡打卡</p>
            <p style="color:#ccc">到无锡,一水,一山</p>
        </div>
    </div>
</template>
<script>
export default {
    name:'WeekGo',
    props:{
        weekList:Array
    },
    data() {
        return {
        }
    }
}
</script>
<style lang="scss" scoped>
    .weekgo{
        margin-top: 0.2rem;
        background: white;
        .weekgo-title{
            font-size: 0.3rem;
            color:black;
            padding-left:0.2rem;
            line-height: 0.6rem;
            height: 0.6rem;
        }
        .weekgo-content{
            position: relative;
            height: 0;
            padding-bottom: 50%;
            // background: red;
            .weekgo-img{
                height: 0;
                padding-bottom: 37%;
                // background: black;
                img{
                    width: 100%
                }
            }
            p{padding-left: 0.2rem;margin-top:0.1rem}
        }
    }
</style>
