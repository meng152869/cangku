<template>
    <div class="chooseLoca">
        <div class="location">
          <p>定位城市<i class="el-icon-s-home"></i></p>
          <span>定位失败请选择城市</span>
        </div>
        <div v-for="(area, index) in areas" :key="'index' + index">
            <p v-if="area.prefix=='hotCities'">热门城市/区域</p>
            <p v-else>{{area.prefix.toUpperCase()}}</p>
            <ul :class="{tiao: index >0}">
              <li v-for="(city , ins) in area.cities" :key="'ins' + ins">
                <span @click="changeCity(city.name)">{{city.name}}</span>
              </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import bus from '../bus';
    import locations from '../assets/location';
    export default {
        data: function () {
            return {
              areas:[],
              tiao:true,
              isShow:false,

            }
        },
        mounted() {
            // console.log(location);
            this.areas=locations.data.areas;
        },
        methods:{
          changeCity(val){
            if(this.$route.path==='/location'){
              location.href='#/';
            }
            localStorage.setItem('city',val);
            bus.$emit('closeValue',val);



          }
        },
        // watch:{
        //   '$route':function(newValue,oldValue){
        //       if(oldValue==='/location'){
        //         this.isShow=true;
        //       }else{
        //         this.isShow=false;
        //       }
        //   }.bind(this)
        // }
    }
</script>

<style scoped>
  .chooseLoca div{
    display: block;
    margin-bottom: 5px;
  }
  .chooseLoca p{
    display: block;
    background-color: #f5f5f5;
    text-align: left;
    padding: 5px 10px 5px 20px;
    overflow: hidden;
  }
  .chooseLoca .location{
    overflow: hidden;
  }
  .chooseLoca .location p i{
    color:#777;
    float: right;
    font-size: 22px;
    margin-right: 5px;

  }
  .chooseLoca .location span{
    border: 1px solid #e7e7e7;
    display: inline-block;
    float: left;
    margin-left: 30px;
    border-radius: 5px;
    padding:10px  35px 10px 35px;
    margin-top: 10px;

  }
  .chooseLoca ul{
    list-style: none;
    overflow: hidden;
    padding-left: 20px;
  }
  .chooseLoca ul li{
    float: left;
    margin: 15px 0;
  }
  .chooseLoca ul li span{
    cursor: pointer;
    border: 1px solid #e7e7e7;
    border-radius: 5px;
    padding:10px  40px 10px 40px;
    margin: 0 10px;
  }

  .chooseLoca .tiao li {
    width:100%;
    margin: 10px ;

  }
  .chooseLoca .tiao li span{
    display: block;
    margin-left: 5px;
    border-right:transparent ;
    border-top: transparent;
    border-left: transparent;
    border-radius: 0;
    width: 100%;
    text-align: left;
    padding-left:5px;
  }
</style>
