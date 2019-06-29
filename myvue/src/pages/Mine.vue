<template>
    <div class="mine">
        <div class="mine-top">
          <img src="../assets/avtor.png" alt="">
          <p v-if="name !== ''">{{name}}<span @click="exit">退出</span></p>
          <p v-else><a href="#/login">登录/注册</a></p>
        </div>
        <div class="mine-content">
            <ul>
              <li>
                <span><i class="el-icon-tickets"></i>我的订单</span><i class="el-icon-arrow-right"></i>
              </li>
              <li>
                <span><i class="fa fa-flag-checkered"></i>优惠券</span><i class="el-icon-arrow-right"></i>
              </li>
              <li>
                <span><i class="fa fa-ticket"></i>我的票</span><i class="el-icon-arrow-right"></i>
              </li>
              <li>
                <span><i class="fa fa-heart-o"></i>我的关注</span><i class="el-icon-arrow-right"></i>
              </li>
              <li>
                <span><i class="el-icon-location-outline"></i>收货地址</span><i class="el-icon-arrow-right"></i>
              </li>
              <li>
                <span><i class="fa fa-user-circle-o"></i>常用购票人</span><i class="el-icon-arrow-right"></i>
              </li>
              <li>
                <span><i class="fa fa-check-square-o"></i>实名认证</span><i class="el-icon-arrow-right"></i>
              </li>
              <li>
                <span><i class="fa fa-pencil-square-o"></i>意见反馈</span><i class="el-icon-arrow-right"></i>
              </li>
              <li>
                <span><i class="fa fa-volume-control-phone"></i>客服电话</span><i>1010-3712</i>
              </li>

            </ul>
        </div>
        <div class="mine-btm">
          <p>关于大麦｜联系我们</p>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data: function () {
            return {
              name:'',
            }
        },
        mounted() {
          axios.get('/api/getUser').then((val)=>{
            // console.log(val);
            if(val.data.user){
              this.name=val.data.user.username;
              location.href='#/user';
            }
          }).catch((err)=>{
            console.log(err);
          })
        },


        methods:{
          exit(){
            axios.get('/api/exit').then((val)=>{
              // console.log(val);
              alert(val.data.msg);
              location.href='/';
            }).catch((error)=>{
              console.log(error);
            })
          }
        }
    }
</script>

<style scoped>
    .mine{
      background-color: #f2f3f4;
    }
    .mine .mine-top{
      background-color: #ff1268;
      width:100%;
      display: flex;
      top:0;
      position:fixed;
    }
    .mine .mine-top img{
      border-radius: 50%;
      height: 80px;
      margin: 0 20px;
    }
    .mine .mine-top p{
      margin: 25px 0;
      font-size: 20px;

    }
    .mine .mine-top p{
      color:#fff;
    }
    .mine .mine-top p span{
      margin-left: 150px;
      font-size: 16px;
      background-color: white;
      padding: 5px;
      color: #ff1268;
      border-radius: 10px;
      cursor: pointer;
    }
    .mine .mine-top p a{
      color:#fff;
    }
    .mine .mine-content{
      margin-top: 80px;
    }
    .mine .mine-content ul{
      list-style: none;
      margin-top: 20px;
    }
    .mine .mine-content ul li{
      width: 100%;
      background-color: #fff;
      text-align: left;
      overflow: hidden;
      border-bottom:solid 1px #f2f3f4 ;
      padding:20px 0 20px 20px ;
      font-size: 18px;
      color:#9a9a9a;
    }
    .mine .mine-content ul li:nth-child(4){
      margin: 20px 0;
    }
    .mine .mine-content ul li span{
      float: left;
    }
    .mine .mine-content ul li span i{
      color:#ff1268;
      margin-right: 10px;
      font-size: 20px;
    }

    .mine .mine-content ul li > i{
      float: right;
      margin-right: 10px;
      font-style: normal;
      font-size: 16px;
    }
   .mine .mine-btm{
     padding: 30px 0;
     color: #999;
   }


</style>
