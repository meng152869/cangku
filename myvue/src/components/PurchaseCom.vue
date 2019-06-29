<template>
    <div class="purchase">
      <div class="box">
        <div class="top"><span><i @click="close">x</i></span></div>

        <div class="page">
          <section>
            <div>
              <h2>日期</h2>
              <span>07.20周六</span>
            </div>
            <div>
              <h2>场次</h2>
              <span>19:30</span>
            </div>
            <div>
              <h2>票档</h2>
              <ul>
                <li v-for="(ticket,ins) in tickets" :key="'ins'+ins">

                  <span @click="choose(ticket)" :class="{active:ticket.price === price}"><i v-if="ticket.hint !==''">{{ticket.hint}}</i>{{ticket.price}}元</span>
                </li>
              </ul>
            </div>
          </section>
        </div>
        <div class="ticket">
          <div><span>购买数量</span><el-input-number v-model="num" @change="handleChange" :min="1" :max="4" label="描述文字"></el-input-number></div>
          <p><span>自动分配连坐座位</span><span>每人限定4张</span></p>
        </div>
        <div class="bottom">
          <p class="text">请选择票档</p>
          <button class="button">确定</button>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
              tickets:[
                {
                  price:380,
                  hint:'缺货登记'
                },
                {
                  price:580,
                  hint:'缺货登记'
                },
                {
                  price:780,
                  hint:'缺货登记'
                },
                {
                  price:980,
                  hint:''
                },
                {
                  price:1280,
                  hint:''
                },
              ],
              price:380,
              num:1
            }

        },
        methods:{
          close(){
              this.$emit('chuan',false);
            $(document.body).css({
              "overflow-x":"scroll",
              "overflow-y":"scroll"
            });
          },
          choose(val){
            this.num=1;
            this.price=val.price;
            $('.text').get(0).innerHTML='￥'+val.price;
            $('.text').css({
              color:'#ff1628'
            })
            if(val.hint!==''){
              $('.button').html('提交缺货登记')
              $('.ticket').css({
                display:'none'
              })
            }else{
              $('.button').html('购买')
              $('.ticket').css({
                display:'block'
              })
            }
          },
          handleChange(){
            $('.text').get(0).innerHTML= '￥'+ this.price * this.num;
          }
        }
    }
</script>

<style scoped>
    .purchase{
      position: fixed;
      z-index: 20;
      height: 100vh;
      width: 100vw;


    }
    .purchase .box{
      width: 100vw;
      bottom:0;
      position: fixed;
      /*bottom: 0;*/
      background-color: white;
      border-top-right-radius: 10px;
      border-top-left-radius: 10px;
    }

    .purchase .box .top{
      position: fixed;
      width: 100%;
      border-top-right-radius: 10px;
      border-top-left-radius: 10px;
      background-color: white;
      margin-top: 0;

    }
    .purchase .box .top span{
      display: block;
      padding: 10px 0;
      /*text-align: right;*/

    }
    .purchase .box .top span i{
      margin-left: 420px;
      font-size: 25px;
      font-style: normal;
      color: #999;
      cursor: pointer;
    }
    .purchase .box .page{
        margin-top: 10px;
        text-align: left;
        padding: 0 20px;
        height: 300px;
        overflow: scroll;


    }
    .purchase .box .page div h2{
      font-size: 22px;
      padding: 15px 0;
    }
    .purchase .box .page div:first-child{
      margin-top: 30px;
    }
    .purchase .box .page div:first-child span,.purchase .box .page div:nth-child(2) span{
      background-color: rgba(255, 192, 203, 0.5);
      display: block;
      width: 30%;
      padding: 15px 0 15px 25px;
      border-radius: 5px;
      color: rgba(255, 18, 104, 0.65);
      font-size: 18px;
    }
    .purchase .box .page div:nth-child(3) ul{
      list-style: none;
      overflow: hidden;
    }
    .purchase .box .page div:nth-child(3) ul li{
      float: left;
      width: 30%;
      margin-left: 10px;
      margin-top: 10px;

    }
    .purchase .box .page div:nth-child(3) ul li span{
      /*width: 30%;*/
      display: block;
      background-color: rgba(153, 153, 153, 0.1);
      padding: 15px 0 15px 25px;
      border-radius: 5px;
      position: relative;
      font-size: 18px;
      cursor: pointer;

    }
    .purchase .box .page div:nth-child(3) ul li span.active{
      background-color: rgba(255, 117, 149, 0.27);
    }
    .active i{
      background-color: rgba(255, 117, 149, 0.66);
    }
    .purchase .box .page div:nth-child(3) ul li span i{
      position: absolute;
      font-size: 12px;
      top:0;
      left: 0;
      font-style: normal;
      padding: 1px 5px;
      border-radius: 5px;
    }
    .purchase .box .ticket{
      padding:10px 20px;
      display: none;

    }
    .purchase .box .ticket > div{
      overflow: hidden;

    }
    .purchase .box .ticket div span{
      float: left;
      font-size: 18px;
      font-weight: bolder;
      margin: 5px 0 0 15px;
    }
    .purchase .box .ticket div >>> .el-input-number{
      float: right;
      width: 140px;
    }
    .purchase .box .ticket p{
      text-align: left;
      font-size: 18px;
      color: rgba(153, 153, 153, 0.62);
    }
    .purchase .box .ticket p span:nth-child(2){
      margin-left: 180px;
    }

    .purchase .bottom{
      overflow: hidden;
      padding: 13px 20px;
    }
    .purchase .bottom p{
      float:left;
      font-size: 20px;
      padding: 7px;
      color: #cbcbcb;
    }
    .purchase .bottom button{
      float: right;
      font-size: 20px;
      background-image: linear-gradient(90deg,#ff7f81,#ff2d79);
      border: none;
      padding: 7px 50px;
      border-radius: 20px;
      color: #fff;
    }
</style>
