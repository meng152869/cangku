<template>
    <div class="banner-list">
      <el-carousel indicator-position="outside" height="160px">
        <el-carousel-item v-for="(item , index) in banner" :key="'index'+index">
          <img :src="item.pic"/>
        </el-carousel-item>
      </el-carousel>
      <div class="navList">
          <ul>
            <li v-for="(nav , ins) in navList" :key="'ins' + ins" @click="cate(nav.title)">
              <img :src="nav.pic" alt="">
              <span>{{nav.title}}</span>
            </li>
          </ul>
      </div>
      <div class="imgBox">
        <img src="../assets/TB1lp6wbvWG3KVjSZFPXXXaiXXa-750-240.png" alt="">
      </div>
      <div class="bossIn">
          <div class="bossIn-top">
              <h2>大咖在大麦</h2>
              <span>查看更多<i class="el-icon-arrow-right"></i></span>
          </div>
        <div class="bossIn-btm">
            <ul ref="ulBtm">
              <li v-for="(boss,ins) in bosses" :key="'ins' + ins" ref="ins">
                <div>
                  <img :src="boss.artPic" alt="">
                  <h1>{{boss.artistName}}<small>{{boss.artFans | fanCalc}}  粉丝</small></h1>
                  <span>+关注</span>
                </div>
                <span>最近{{boss.performanceTotal}}场演出<i class="el-icon-arrow-right"></i></span>
              </li>
            </ul>
        </div>
      </div>
      <content-list></content-list>

    </div>
</template>

<script>
    import bannerList from '../assets/list'
    import BossIn from '../assets/BossIn'
    import ContentList from './ContentList'
    export default {
        data: function () {
            return {
              banner:[],
              navList:[],
              imgSrc:'',
              bosses:[],
              isFollow:false
            }
        },
        updated(){

        },
        mounted(){
          this.banner=bannerList.data.focusPicList;
          this.navList=bannerList.data.navigationList;
          this.imgSrc=bannerList.data.bannerList;
          this.bosses=BossIn.data.artistProjectList;

        },
        components:{
          ContentList,
        },
        methods:{
          cate(val){
            // console.log(val);
            location.href='#/category';
            localStorage.setItem('cate',val);
          }
        }
    }
</script>

<style scoped>
  .banner-list img{
    width: 100%;
  }
  .banner-list >>> .el-carousel{
    height: 160px;
  }

  .banner-list >>> .el-carousel__indicators--outside{
    position: absolute;
    bottom:0;
    left:45%;
  }
  .banner-list >>> .el-carousel__button{
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: rgba(255,255,255,1);
  }
  .banner-list .navList{
    height: 190px;
  }
  .banner-list .navList ul{
    width: 100%;
    padding: 10px 0;
  }
  .banner-list .navList ul li{
    display: inline-block;
    width:25%;
    margin-top: 20px;
    cursor: pointer;
  }
  .banner-list .navList ul li img{
    width: 30%;

  }
  .banner-list .navList ul li span{
    display: block;
    font-size: 14px;
  }
  .banner-list .imgBox{
    height: 160px;
  }
  .bossIn{
    padding: 0 20px;
    height: 200px;

  }
  .bossIn .bossIn-top{
    display: flex;
    margin-bottom: 10px;

  }
  .bossIn .bossIn-top h2{
    text-align: left;
    font-size: 18px;
    margin-right: 220px;
  }
  .bossIn .bossIn-top span{
      font-size: 15px;
      color:#999;
  }
  .bossIn .bossIn-btm{
    width: 100%;
    overflow: hidden;
    padding-bottom: 20px;
    overflow-x: scroll;
    position: relative;
    height: 160px;
  }


  .bossIn .bossIn-btm ul{
      position: absolute;
      overflow: hidden;
      width: 1200px;
      list-style: none;
      cursor: default;
  }
  .bossIn .bossIn-btm ul li{
      width:290px;
      float: left;
      border: 1px solid #eee;
      box-shadow: 0 8px 4px 0 rgba(0,0,0,.05);
      border-radius: 5px;
      padding:0 15px;
      margin-right: 10px;

  }
  .bossIn .bossIn-btm ul li div{
    display: flex;
    padding: 20px 0;
  }
  .bossIn .bossIn-btm ul li div img{
    width: 25%;
    border-radius: 50%;
  }
  .bossIn .bossIn-btm ul li div h1{
    font-size: 19px;
    font-weight: normal;
    margin: 15px 0 0 15px;

  }
  .bossIn .bossIn-btm ul li div h1 small{
    display: block;
    font-size: 12px;
    width: 90px;
    color: #999;
  }
  .bossIn .bossIn-btm ul li div span{
    margin-top: 15px;
    margin-left: 25px;
    padding: 7px 10px 0 10px;
    border: solid 1px #ff1268;
    height: 35px;
    border-radius: 20px;
    color:#ff1268;
    font-size: 13px;
    cursor: pointer;
  }
  .bossIn .bossIn-btm ul li > span{
    display: block;
    border-top: solid 1px #eee;
    padding: 10px 0;
    text-align: left;
    font-size: 15px;

  }
  .bossIn .bossIn-btm ul li > span i{
    margin-left: 60%;
  }

</style>
