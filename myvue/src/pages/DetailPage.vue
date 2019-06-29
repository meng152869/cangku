<template>
  <div class="detail">
    <div class="zhao" v-if="isShow">
    </div>
    <div class="zhao" v-if="isTrue">
    </div>
    <transition>
      <purchase-com v-if="isTrue" @chuan="shou"></purchase-com>
    </transition>
    <transition>
      <notice-what v-if="isShow" :str="msg"></notice-what>
    </transition>
    <div class="detail-top">
    </div>
    <div class="top">
      <div class="top-img">
        <div class="img">
          <span>总票代</span>
        </div>
        <div class="description">
          <h1>【郑州】李荣浩 【年少有为】世界巡回演唱会-郑州站</h1>
          <span>￥380-￥1280</span>
        </div>
      </div>
      <p>本商品为预售商品，正式开票后将第一时间为您配送</p>
    </div>
    <div class="top-next">
        <p><span><i class="fa fa-times-circle-o"></i>不支持选座</span><span><i class="fa fa-check-circle-o"></i>快递票</span><span><i class="fa fa-check-circle-o"></i>纸质发票</span></p>
        <p><span>2019.07.20 周六 19:30<i class="el-icon-arrow-right"></i></span><span>演出时长约150分钟（以现场为准）</span></p>
        <div>
          <p><span>郑州市郑州国际会展中心</span><span>中国郑州市郑东新区商务内环路中央公园1号</span></p>
          <span class="el-icon-location-information"></span>
        </div>
    </div>

    <div class="mainContent over" ref="content">
      <div class="content">
        <h1>演出介绍</h1>
        <h3>购票须知</h3>
        <p>1、避免影响抢票体验，请您升级到大麦App最新版本购票。</p>
        <p>2、请您提前在大麦App后台添加完整个人的购票信息，包括身份证、电话、地址，以方便购票。</p>
        <p>3、因项目火爆，不支持合并配送，不支持不同订单号连座安排，敬请谅解。</p>
        <p>4、对于异常订购行为，大麦网有权在订单成立或者生效之后取消相应订单。异常订购行为包括但不限于以下情形：</p>
        <p>（1）通过同一ID订购超出限购张数的订单；</p>
        <p>（2）经合理判断认为非真实消费者的下单行为，包括但不限于通过批量相同或虚构的支付账号、收货地址（包括下单
          时填写及最终实际收货地址）、收件人、电话号码订购超出限购张数的订单。</p>
        <p>5、因项目火爆，本演出不支持修改收货信息，请您务必在下单前检查好您的收货地址。</p>
        <h3>一票一证说明</h3>
        <p>因主办方要求本项目实名制购买，一票一证，每个用户限购4张，票品仅支持快递配送（请使用有效身
          份证，支持护照、台胞证和港澳居民往来大陆通行证）；</p>
        <p>一票一证：指每张门票均需对应不同且首次使用的身份证号码。无论同一订单购买单张或多张门
          票，如您提供的身份证信息已被用于其他购票渠道购买本项目门票（如：大麦网天猫旗舰店），或出现多张门票重复使用同
          一身份证信息等任何违反一票一证制度的购买行为，大麦网将会在5个工作日内通过系统原路退回该订单下全部票款，不予配票。
          请您购买前务必选择【不同】且【未被使用在其他购票渠道】的【真实】身份证信息进行购票！ </p>
        <p>您点击购买本项目票品的行为，视同已详细阅读并认可上述全部购票规则。</p>
        <h3>演出介绍</h3>
        <p>他说，</p>
        <p>做音乐是件很帅的事情。</p>
        <p></p><p style="text-align: center;"><img width="600" height="300" src="https://img.alicdn.com/imgextra/i3/2251059038/O1CN018XgNhO2GdSAuzGZEd_!!2251059038.jpg"></p>
        <p>自2013年出道以来，李荣浩专注音乐潜心创作，一年一张专辑的频率被誉为&quot;音乐圈劳模&quot;，而2018年新
          专辑《耳朵》一经推出就取得了相当可观的成绩，多首歌曲长期处于&quot;霸榜&quot;状态，亿万播放量更是霸气成各大榜单
          赢家。而在互联网时代，数字单曲是大趋势的情况下，李荣浩一直坚持做实体专辑，不随波逐流，用自己的脚踏实地去回报音乐，致敬音乐。</p>
        <p>一年一张专辑，一年几首HitSong，已然成了李荣浩发片常态。前几张专辑里，经典曲目层出不穷，其代表作就有《模特》
          《李白》《老街》《不将就》《喜剧之王》《作曲家》《戒烟》等，成众多人歌单里的单曲循环，素有百听不厌之势。如果说
          首专是李荣浩音乐生涯的一座高峰，那2018年新专辑《耳朵》就是其职业生涯的另一座高峰，引发全民狂欢的《贝贝》，同名大热主
          打歌《耳朵》，刮起复古都市风的《王牌冤家》，以及引发群体共鸣的《成长之重量》，都为成就这张&quot;神专&quot;添砖加瓦，而网
          络爆款《年少有为》则为这张专辑添了浓墨重彩的一笔，直戳亿万网友内心，让每一个有故事的人珍惜身边所拥有的。</p>
        <h3>李荣浩2019「年少有为」巡回演唱会已经开启</h3>
        <p>李荣浩「年少有为」巡回演唱会2019年3月16日上海正式开跑，这也是继「天生李荣浩亚洲巡回演唱会」和「李荣
          浩有理想世界巡回演唱会」之后，职业生涯的第三轮巡演，也是第五张专辑发行后众多新歌首秀舞台，当然，前几张专辑的经典
          曲目也将进行重新编曲再演绎，争取让歌迷们享受到一次全新的音乐之旅。</p>
        <p>作为本次演唱会的总导演之一及总策划，李荣浩事事亲力亲为，严格把关各个关卡，从主视觉海报拍摄、到曲目编排
          ，再到舞美灯光，事无巨细，极尽所能做好最好，意在给歌迷一个独特的演唱会体验，这无疑不体现对于本次巡演重视之程度。而以
          「年少有为」作为本次巡演的主题，也是希望大家能够珍惜身边所有，不负热望。</p>
        <p></p><p style="text-align: center;">
        <img width="600" height="601" src="https://img.alicdn.com/imgextra/i3/2251059038/O1CN01bn986h2GdSAvAck1i_!!2251059038.jpg"></p>
        <p>在对的时间</p>
        <p>看一场李荣浩演唱会</p>
        <p>在对的人面前</p>
        <p>祝你「年少有为」</p>
        <p></p>
        <p style="text-align: center;"><img width="600" height="667" src="https://img.alicdn.com/imgextra/i4/2251059038/O1CN017HXgoj2GdSAvAdoda_!!2251059038.jpg"></p>
      </div>
    </div>
    <p @click="open" ref="p">展开更多<span class="el-icon-arrow-down"></span></p>
    <div class="content-next">
        <h1>演出阵容</h1>
        <div class="cast">
          <img src="https://intercms.damai.cn/artist/pic/1534413360605/1534413360605-main.jpg" alt="">
          <div class="description">
              <p><span>李荣浩</span><span>+关注</span></p>
              <p>李荣浩，中国流行男歌手，音乐制作人，吉他手</p>
          </div>
        </div>
    </div>
    <div class="instruction">
        <h1>须知事项</h1>
        <section>
          <h3>购票须知</h3>
          <h5><small class="fa fa-check-circle-o"></small>限购说明</h5>
          <p>每个账号做多购买4张</p>
          <h5><small class="fa fa-check-circle-o"></small>实名制</h5>
          <p>购买是您需要输入购票人的身份证信息，每张门票对应一个证件号</p>
          <h5><small class="fa fa-check-circle-o"></small>配送信息说明</h5>
          <p>本项目不支持修改配送地址，请务必在下单钱检查好您的收货地址</p>
          <span @click="shop('购票须知')">全部9条购票须知</span>
        </section>
        <section>
          <h3>观演须知</h3>
          <h5><small class="fa fa-check-circle-o"></small>入场时间</h5>
          <p>演出前约120分钟</p>
          <h5><small class="fa fa-check-circle-o"></small>禁止携带物品</h5>
          <p>1.由于安保和版权的原因，多数演出、展览以及比赛场所禁止携带食品、饮料、专特摄录设备、打火机等物品
          请您注意现场工作人员和广播的提示，予以配合；2.儿童凭全票入场；3.语境验票的票品，禁止二次入场</p>
          <h5><small class="fa fa-check-circle-o"></small>寄存说明</h5>
          <p>无寄存处，请自行保管携带物品</p>
          <span @click="shop('观演须知')">全部7条观演须知</span>
        </section>
    </div>
    <div class="recommend">
        <h1>为你推荐</h1>

      <section v-for="(ticket , ins) in commendList" :key="'ins'+ins">
        <img :src="ticket.verticalPic" alt="">
        <div class="con-Right">
          <h1>{{ticket.name}}</h1>
          <p>{{ticket.cityName}}/{{ticket.showTime}}/{{ticket.venueName}}</p>
          <span>￥{{ticket.formattedPriceStr}}</span>
        </div>
      </section>
    </div>

    <detail-btm class="detailBtm"></detail-btm>
  </div>
</template>

<script>
    import bus from '../bus'
    import DetailBtm from '../components/DetailBtm'
    import NoticeWhat from '../components/NoticeWhat'
    import recommends from '../assets/recommend'
    import PurchaseCom from '../components/PurchaseCom'
    export default {
        data: function () {
            return {
                isShow:false,
                isTrue:false,
                msg:'',
                commendList:[],
            }
        },
        mounted(){
          this.commendList=recommends.data.projectInfo;
          bus.$on('closeXu',function(val){
            this.isShow=false
          }.bind(this))
          bus.$on('kaiValue',function(val){
            this.isTrue=true
          }.bind(this))
        },
        components:{
          DetailBtm,
          NoticeWhat,
          PurchaseCom

        },
        methods:{
          open(){
              $(this.$refs.content).removeClass('over');
              $(this.$refs.p).get(0).style.display='none';
          },
          shop(val){
            bus.$emit('xuValue',false);
            $(document.body).css({
              "overflow-x":"hidden",
              "overflow-y":"hidden"
            });
            // console.log(this.isShow)
            this.isShow=true;
            this.msg=val;
          },
          shou(val){
            this.isTrue=val;
          }

        }
    }
</script>

<style scoped>
  .zhao{
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 5;
    background-color: rgba(0,0,0,0.5);
  }
  .v-enter{
    /*opacity: 0;*/
    transform: translateY(500px);
  }
  /*.v-leave{*/
    /*transform: translateY(0px);*/
  /*}*/
  .v-leave-to{
    transform: translateY(500px);
  }
  /*设置标签的过渡样式*/
  .v-enter-active,.v-leave-active{
    transition: 0.5s;
  }
  .detail{
    position: relative;
    padding-bottom: 70px;
    background-color: #f8f8f8;
  }
  .detail .detail-top {

    background-image: url("https://gd2.alicdn.com/imgextra/i2/0/O1CN01Y3XLnA2GdSApi9DmX_!!0-item_pic.jpg_400x400");
    width:100%;
    height: 300px;
    filter: saturate(1) brightness(1.1) blur(.6rem) contrast(.8);
  }

  .detail .top{
    position: absolute;
    top: 20px;
    left: 20px;
  }

  .detail .top .top-img{

    /*background-color: rgba(0,0,0,0.8);*/
    overflow: hidden;
  }
  .detail .top .top-img .img{
    background-image: url("https://gd2.alicdn.com/imgextra/i2/0/O1CN01Y3XLnA2GdSApi9DmX_!!0-item_pic.jpg_400x400");
    background-size: 150px;
    width: 150px;
    height: 200px;
    float: left;
  }
  .detail .top .top-img .img  span{
    background-color: black;
    display: block;
    color:#fff;
    text-align: left;
    font-size: 14px;
    padding: 2px;
    width: 50px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  .detail .top .top-img .description{
    float: left;
    width: 250px;
    margin-left: 20px;
  }
  .detail .top .top-img .description h1{
    font-size: 20px;
    color: #fff;text-align: left;
    margin-bottom: 125px;
  }
  .detail .top .top-img .description span{
    color: #fff;
    font-size:20px;
    display:block;
    text-align: left;
  }
  .detail .top p{
    color:#f0f0f0;
    margin-top: 20px;
    background-color: rgba(255,255,255,0.2);
    padding: 10px 0;
    border-radius: 4px;
  }
  .detail .top-next{
    background-color: #fff;
  }
  .detail .top-next > p:first-child{
    background-color: #e0e0e0;
    padding: 10px 0;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;

  }
  .detail .top-next > p:first-child span{
    margin-right: 30px;
  }
  .detail .top-next > p:first-child span i{
    color:#ff1268;
    font-size: 18px;
    margin-right: 10px;
  }
  .detail .top-next > p:nth-child(2){
    border-bottom: solid 1px #e0e0e0;
    margin: 0 20px;
    padding: 20px 0;
  }
  .detail .top-next > p:nth-child(2) span{
    display: block;
    text-align: left;
    font-size: 23px;
    font-weight: bolder;
  }
  .detail .top-next > p:nth-child(2) span:nth-child(2),.detail .top-next div p span:nth-child(2){
    color: #999;
    font-weight: normal;
    font-size: 16px;
    margin-top: 5px;
  }
  .detail .top-next div{
    overflow: hidden;
    padding:0 20px;
  }
  .detail .top-next div p{
    float: left;
    text-align: left;
    margin-top: 20px;
  }
  .detail .top-next div p span{
    display: block;
    margin-bottom: 15px;
    font-size: 23px;
    font-weight: bolder;
  }
  .detail .top-next div > span{
    font-size: 30px;
    padding-left: 10px;
    float: right;
    display: block;
    margin-top: 20px;
    margin-right: 20px;
    border-left: solid 1px #eee;

  }
  .detail .over{
    height: 200px;
    overflow: hidden;
  }
  .detail .mainContent .content{
    text-align: left;
    padding:0 20px;
    background-color: #fff;
    margin-top: 20px;
    padding-bottom: 20px;
  }
  .detail .mainContent .content h1{
    padding: 30px 0;
  }
  .detail .mainContent .content h3{
    font-size: 14px;
    color: #989898;
  }
  .detail .mainContent .content p{
    color:#989898;
    line-height: 28px;
  }
  .detail .mainContent .content img{
    width: 100%;
  }
  .detail > p{
    background-color: #fff;
    padding: 20px 0;
    font-size: 20px;
    color:#ff1268;
    cursor: pointer;
  }
  .detail .content-next{
    background-color: #fff;
    text-align: left;
    padding: 0 20px;
  }
  .detail .content-next h1{
    margin-bottom: 20px;

  }
  .detail .content-next .cast{
    padding:15px 0;
    overflow: hidden;
  }
  .detail .content-next .cast img{
    width: 100px;
    border-radius: 50%;
    float: left;
  }
  .detail .content-next .cast .description{
    float: right;
    width: 70%;
  }
  .detail .content-next .cast .description p span:first-child{
    font-size: 20px;
    margin-right: 150px;
    color: black;
  }
  .detail .content-next .cast .description p span:nth-child(2){
    padding: 10px 15px;
    display: inline-block;
    color:#ff1268;
    border: solid 1px #ff1268;
    border-radius: 20px;

  }
  .detail .content-next .cast .description p{
    color:#999;
    margin-bottom: 10px;
  }
  .detail .instruction{
    background-color: #fff;
    margin-top: 20px;
    text-align: left;
    padding: 0 20px;
  }
  .detail .instruction h1{
    padding-top: 20px ;
  }
  .detail .instruction section{
    border-bottom: solid 1px #f0f0f0;
  }
  .detail .instruction section h3{
    margin: 15px 0;
  }
  .detail .instruction section h5{
    font-weight: normal;
    font-size: 17px;
    padding: 10px 0;

  }
  .detail .instruction section h5 small{
    color: #ff1268;
    margin-right: 20px;
  }
  .detail .instruction section p{
    line-height: 30px;
    color:#989898;
    padding-left:20px;
  }
  .detail .instruction section span{
    display: block;
    text-align: center;
    margin: 20px 0;
    color: #ff1658;
    font-size: 17px;
    cursor: pointer;
  }
  .detail .recommend{
    background-color: #fff;
    padding:0 20px 60px 20px;
    text-align: left;

  }
  .detail .recommend > h1{
    padding:20px 0;
  }
  .detail .recommend section{
    overflow: hidden;
    margin-top: 20px;
  }
  .detail .recommend section img{
    float: left;
    width: 130px;
    margin-right: 20px;
  }
  .detail .recommend section .con-Right{
    float: left;
    width: 60%;
  }
  .detail .recommend section .con-Right h1{
    font-size: 18px;
    text-align: left;
    margin-bottom: 10px;
  }
  .detail .recommend section .con-Right p{
    color: #888;
    font-size: 15px;
    height: 20px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom: 70px;
  }
  .detail .recommend section .con-Right span{
    color:#ff1268;
    display: block;
    text-align: left;
    font-size: 18px;
  }
</style>
