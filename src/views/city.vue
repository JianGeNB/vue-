<template>
    <div>
        <city-header></city-header>
        <city-list></city-list>
        <right-list></right-list>
    </div>
</template>
<script>
import CityHeader from "../components/city/cityheader"
import CityList from '../components/city/citylist'
import RightList from "../components/city/rightlist";
export default {
    components:{
        CityHeader,CityList,RightList
    }
}
</script>
<style lang="scss" scoped>

</style>
