<template>
    <div class="hot">
        <div class="hot-head">
            <p class="hot-title">本周热门榜单</p>
            <p class="hot-more">全部榜单</p>
        </div>
        <div class="hot-body">
            <div class="hot-content" v-for="item of hotList" :key="item.id">
                <div class="hot-img">
                    <img :src="item.url" alt="">
                </div>
                <p>{{item.title}}</p>
                <p><span style="color:orange">{{item.cost}}</span>元</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"Hot",
    props:{
        hotList:Array
    },
    data() {
        return {
            
        }
    }
}
</script>
<style lang="scss" scoped>
    .hot{
        position: relative;
        width: 100%;
        height: 0;
        margin-top: 0.2rem;
        background:#ffffff;
        padding-bottom: 50%;
        // padding-bottom: 60%;
        .hot-head{
            position: absolute;
            top:0.2rem;
            width: 100%;
            .hot-title{
                float: left;
                font-size: 0.32rem;
                color: black;
                margin-left:0.2rem 
            }
            .hot-more{
                float: right;
                margin-right: 0.2rem
            }
        }
        .hot-body{
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 0;
            padding-bottom: 40%;
            // background: red;
            // overflow-x: auto;
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-around;
            .hot-content{
                width: 30%;
                margin-top:0.1rem;
                float: left;
                .hot-img{
                    width: 90%;
                    margin: 0 auto;
                    img{
                        width: 100%;
                    }
                }
                p{width: 100%;text-align: center;margin: 0.1rem 0}
            }
        }
    }
</style>
