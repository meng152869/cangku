
<template>
    <div class="header">
         <div class="headerTop">
           <a href="#/location" class="location"><i class="el-icon-location"></i>{{location}}</a>
           <p><span class="el-icon-search"></span>搜索明星、演出比赛、场馆</p>
           <a href="#/user" class="user"><span class="el-icon-s-custom"></span></a>
         </div>

    </div>
</template>

<script>
    export default {
        data: function () {
            return {
              location:'全国',
            }
        },
        mounted() {
          this.location=localStorage.city;

        },
        methods:{

        }
    }
</script>

<style scoped>
  .header{
    background-color: #f5f5f5;
    padding: 15px 0 10px 0;
    height: 56px;
  }
  .header .headerTop{
    overflow: hidden;
  }
  .header .headerTop a{
    float: left;
  }
  .header .headerTop  p{
    float: left;
    border-radius: 15px;
    background-color: white;
    padding:5px 20px 5px 20px;
  }
  .header .headerTop  p span{
    font-size: 18px;
    margin-right: 5px;
  }

  .header .headerTop .location{
    margin: 0 20px;
    font-size: 18px;
  }
  .header .headerTop .location i{
    font-size: 22px;
    padding: 0 3px;
  }
  .header .headerTop .user{
    float: right;
    margin-right: 25px;
    font-size: 25px;
  }


</style>
