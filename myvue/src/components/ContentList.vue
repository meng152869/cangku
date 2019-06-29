<template>
    <div class="contentlist">
        <h2>更多演出</h2>
        <ul class="list">
          <li class="active">
            <span @click="open" >全部分类<i class="el-icon-caret-top" v-if="isShow"></i> <i class="el-icon-caret-bottom" v-else></i></span>
          </li>
          <li>
            <span>全部时间</span>
          </li>
          <li>
            <span>推荐排序</span>
          </li>
          <li>
            <span>距离最近</span>
          </li>
        </ul>
        <cate-list v-if="isShow" class="cateList"></cate-list>
        <div class="content">
            <section v-for="(ticket , ins) in tickets" :key="'ins'+ins" @click="detail">
              <img :src="ticket.verticalPic" alt="">
              <div class="con-Right">
                <h1>{{ticket.name}}</h1>
                <p>{{ticket.cityName}}/{{ticket.showTime}}/{{ticket.venueName}}</p>
                <span>￥{{ticket.formattedPriceStr}}</span>
              </div>
            </section>
        </div>
    </div>
</template>

<script>
    import CateList from './CateList';
    import MenPiaos from '../assets/MenPiaos';
    import bus from '../bus';
    export default {
        data: function () {
            return {
                  isShow:false,
                  tickets:[],
                  cate:'',
                  lisTop:'',
            }
        },
        mounted() {
            var that = this;
            this.tickets=MenPiaos.data.projectInfo;
            var lisTop=$('.list').offset().top;
            that.lisTop=lisTop;
            that.scorll(lisTop,MenPiaos.data.projectInfo);

            bus.$on('cateVal',function(val){
              that.cate=val;
              that.isShow=false;
              $(document.body).css({
                "overflow-x":"scroll",
                "overflow-y":"scroll"
              });
              if(that.cate==='全部分类'){
                that.scorll(that.lisTop,MenPiaos.data.projectInfo);
              }else{
                var arr = [];
                MenPiaos.data.projectInfo.forEach(function(item,index){
                  if(item.categoryName === that.cate){
                    arr.push(item);
                  }
                })
                that.tickets=arr;
                that.scorll(that.lisTop,arr);
              }
            })
        },
        components:{
          CateList,
        },
        methods:{
          open(){
            this.isShow = ! this.isShow;
            document.documentElement.scrollTop=$('.list').offset().top;
            if(this.isShow === true){
              $(document.body).css({
                "overflow-x":"hidden",
                "overflow-y":"hidden"
              });
            }else{
              $(document.body).css({
                "overflow-x":"scroll",
                "overflow-y":"scroll"
              });
            }

          },
          scorll(listop,val){
            window.onscroll=function(event){
              if(event.pageY >= listop){
                $('.list').addClass('scoll');
              }else{
                $('.list').removeClass('scoll');
              }
              var height = window.innerHeight;
              let scrHeight = event.pageY;
              let conHeight = document.body.scrollHeight;
              if( scrHeight + height > conHeight - 20){
                // console.log('aaa');
                this.tickets=this.tickets.concat(val);
              }
              // console.log(this.tickets);
            }.bind(this)
          },
          detail(){
            location.href='#/detail';
          }


        }
    }
</script>

<style scoped>
  .contentlist{
    margin-top: 10px;
    padding:0 20px;
    position: relative;
  }
  .contentlist .cateList{
    position: fixed;
    top:50px;
  }
  .contentlist h2{
    text-align: left;
    font-size: 18px;
  }
  .contentlist > ul{
    list-style: none;
    overflow: hidden;
    padding: 15px 0;
    background-color: white;
    width: 100%;

  }
  .contentlist > ul.scoll{
    position: fixed;
    top:0;
    z-index: 30;
  }
  .contentlist > ul li{
    float: left;
    cursor: pointer;
  }
  .contentlist > ul li.active span{
    color:#ff1268;
  }
  .contentlist > ul li span{
    color:#999;
    margin-right: 28px;
  }
  .contentlist .content{
    padding-bottom: 30px;
  }
  .contentlist .content section{
    overflow: hidden;
    margin-top: 20px;
  }
  .contentlist .content section img{
    float: left;
    width: 130px;
    margin-right: 20px;
  }
  .contentlist .content section .con-Right{
    float: left;
    width: 60%;
  }
  .contentlist .content section .con-Right h1{
    font-size: 18px;
    text-align: left;
    margin-bottom: 10px;
  }
  .contentlist .content section .con-Right p{
    color: #888;
    font-size: 15px;
    height: 20px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom: 70px;
  }
  .contentlist .content section .con-Right span{
    color:#ff1268;
    display: block;
    text-align: left;
    font-size: 18px;
  }
</style>
