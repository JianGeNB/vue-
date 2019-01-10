<template>
    <div>
        <city-header :cityList="cityList"></city-header>
        <city-list :cityList="cityList" :cityLetter="cityLetter"></city-list>
        <right-list @handleChange="handleChange"></right-list>
    </div>
</template>
<script>
import CityHeader from "../components/city/cityheader"
import CityList from '../components/city/citylist'
import RightList from "../components/city/rightlist"
import axios from "axios";
export default {
    components:{
        CityHeader,CityList,RightList
    },
    data(){
        return {
            cityList: {},
            cityLetter: ''
        }
    },
    mounted() {
        axios.get("https://www.easy-mock.com/mock/5c346687fad511025643eeb7/shop/city").then((rdata) => {
            this.cityList = rdata.data.data;
        })
    },
    methods: {
        handleChange (res) {
            this.cityLetter = res;
        }
    }
}
</script>
<style lang="scss" scoped>

</style>
