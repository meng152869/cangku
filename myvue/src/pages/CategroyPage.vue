<template>
    <div class="catePage">
        <div class="cateTop">
          <ul>
            <li v-for="(cate,ins) in catelist" :class="{active:cate===cates}">
              <span @click="cateChoose(cate)">{{cate}}</span>
            </li>
          </ul>
        </div>
        <div class="cityBox">
          <ul>
            <li class="active">
              <span @click="nation">{{state}}<i class="el-icon-caret-top" v-if="isShow"></i> <i class="el-icon-caret-bottom" v-else></i></span>
            </li>
            <li>
              <span>全部时间</span>
            </li>
            <li>
              <span>默认排序</span>
            </li>
            <li>
              <span>距离最近</span>
            </li>
          </ul>
        </div>
        <transition>
          <choose-location class="location" v-if="isShow"></choose-location>
        </transition>
        <div class="cateBtm">
          <section v-for="(category , ins) in categorys" :key="'ins'+ins">
              <img :src="category.verticalPic" alt="">
            <div class="cateBtm-rig">
              <h1>{{category.name}}</h1>
              <p>{{category.cityName}}/{{category.showTime}}/{{category.venueName}}</p>
              <span>￥{{category.formattedPriceStr}}</span>
            </div>
          </section>
        </div>
    </div>
</template>

<script>
    import bus from '../bus'
    import feiLei from '../assets/feiLei'
    import ChooseLocation from './ChooseLocation'
    export default {
        data: function () {
            return {
              catelist:['全部','演唱会','话剧歌剧','音乐会','曲苑杂坛','体育','亲子','展览休闲'],
              cates:'',
              categorys:[],
              isShow:false,
              state:'全国'

            }
        },
        mounted() {
          this.cates=localStorage.cate;
          this.categorys=this.chooseCate(feiLei.data.projectInfo,this.cates);
          bus.$on('closeValue',function(val){
            this.isShow=false;
            this.state=val;
          }.bind(this))
          window.onscroll=function(event){
            var height = window.innerHeight;
            let scrHeight = event.pageY;
            let conHeight = document.body.scrollHeight;
            if( scrHeight + height > conHeight - 20){
              if(this.cates==='全部'){
                this.categorys=this.categorys.concat(feiLei.data.projectInfo)
              }else{
                this.categorys=this.categorys.concat(this.chooseCate(feiLei.data.projectInfo,this.cates))
              }
            }
          }.bind(this)
        },
        methods:{
          chooseCate(val,cate){
            this.cates=cate;
            var arr=[];
            val.forEach(function(item,index){
              if(item.categoryName===cate){
                arr.push(item);
              }
            }.bind(this))
            return arr;
          },
          cateChoose(val){
            if(val==='全部'){
              this.cates=val;
              this.categorys=feiLei.data.projectInfo;
            }else{
              this.categorys = this.chooseCate(feiLei.data.projectInfo,val);
            }

          },
          nation(){
            console.log(this.isShow);
            this.isShow=!this.isShow;
          }
        },
        components:{
          ChooseLocation,
        }
    }
</script>

<style scoped>

   .catePage{
    position: relative;
   }
   .catePage .location{
     top:-12px;
     position: absolute;
     z-index: 5;
     background-color: #fff;
   }
  .catePage .cateTop{
    width: 100%;
    overflow: scroll;
    padding: 10px 0;
    top: 0;
    position: fixed;
    z-index: 6;
    background-color: #fff;
    /*border-bottom:solid 1px #f0f0f0 ;*/
  }
   .catePage .cateTop ul{
     list-style: none;
     overflow: hidden;
     width: 650px;
     padding: 2px 0;

   }
   .catePage .cateTop ul li{
     float: left;
   }
   .catePage .cateTop ul li.active span{
     color:#ff1268;
     border-bottom: solid 2px #ff1268;
   }

   .catePage .cateTop ul li span{
     font-size: 18px;
     margin: 0 10px;
     border-bottom: solid 2px transparent;
     cursor: pointer;
   }

   .catePage .cityBox{
     width: 100%;
     top: 47px;
     padding:  10px 20px;
     background-color: #f5f5f5;
     position: fixed;
     z-index: 6;
   }
   .catePage .cityBox ul{
     list-style: none;
     overflow: hidden;
   }
   .catePage .cityBox ul li{
     float: left;
   }
   .catePage .cityBox ul li span{
     padding: 0 20px;
     cursor: pointer;
   }
   .catePage .cityBox ul li.active span{
     color:#ff1268;
   }



   .catePage .cateBtm{
     margin-top: 100px;
     padding: 0 20px 30px 20px;
   }
   .catePage .cateBtm section{
     overflow: hidden;
     margin-top: 20px;
   }
   .catePage .cateBtm section img{
     float: left;
     width: 130px;
     margin-right: 20px;
   }
   .catePage .cateBtm section .cateBtm-rig{
     float: left;
     width: 60%;
   }
   .catePage .cateBtm section .cateBtm-rig h1{
     font-size: 18px;
     text-align: left;
     margin-bottom: 10px;
   }
   .catePage .cateBtm section .cateBtm-rig p{
     color: #888;
     font-size: 15px;
     height: 20px;
     overflow: hidden;
     white-space: nowrap;
     text-overflow: ellipsis;
     margin-bottom: 70px;
   }
   .catePage .cateBtm section .cateBtm-rig span{
     color:#ff1268;
     display: block;
     text-align: left;
     font-size: 18px;
   }
</style>
