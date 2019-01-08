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
    data() {
        return {
            weekList:[
                {id:'001',url:'http://img1.qunarzz.com/sight/source/1505/24/4b609109dba139.jpg_r_640x214_b28f6052.jpg'},
                {id:'002',url:'http://img1.qunarzz.com/sight/source/1811/ed/bf2bc72af591d5.jpg_r_640x214_f9f1bfcc.jpg'},
                {id:'003',url:'http://img1.qunarzz.com/sight/source/1511/47/8989497ae9bd3f.jpg_r_640x214_18c6d947.jpg'}
            ]
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
