<template>
    <div class="homeIndex">
        <header-search></header-search>
        <banner-list></banner-list>
    </div>
</template>

<script>
    import HeaderSearch from '../components/HeaderSearch';
    import BannerList from '../components/BannerList';
    export default {
        data: function () {
            return {}
        },
        components:{
          HeaderSearch,
          BannerList,
        }
    }
</script>

<style scoped>

</style>
