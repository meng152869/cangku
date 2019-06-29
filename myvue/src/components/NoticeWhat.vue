<template>
    <div class="notice">
       <div class="what">
         <p><span @click="gou" :class="{active:msg==='购票须知'}">购票须知</span><span @click="guan" :class="{active:msg==='观演须知'}">观演须知</span><span class="close" @click="closeThis">x</span></p>
         <div class="content">
            <section v-for="(instruction , index) in instructions" v-if="instruction.noteTitle===msg" :key="'index'+index">
              <div v-for="(ticket,ins) in instruction.ticketList">
                <h5><small class="fa fa-check-circle-o"></small>{{ticket.title}}</h5>
                <p>{{ticket.content}}</p>
              </div>
            </section>
         </div>
       </div>
    </div>
</template>

<script>
    import bus from '../bus'
    export default {
      data: function () {
        return {
          instructions: [
            {
              noteTitle: '购票须知',
              ticketList: [
                {
                  title: "限购说明",
                  content: "每个账号最多购买4张"
                },
                {
                  title: "实名制",
                  content: "购买时您需要输入购票人身份证信息，每张门票对应一个证件号"
                },
                {
                  title: "配送信息说明",
                  content: "本项目不支持修改配送地址，请务必在下单前检查好您的收货地址"
                },
                {
                  title: "儿童购票说明",
                  content: "儿童一律凭票入场"
                },
                {
                  title: "座位类型",
                  content: "请按门票对应位置，有序对号入座"
                },
                {
                  title: "发票说明",
                  content: "如需发票，请您在演出开始前通过订单页补开，发票将在演出结束后1个月左右，统一由开具方提供"
                },
                {
                  title: "退换政策",
                  content: "票品不支持退换。如无法正常观看，还请自行处理，给您带来不便敬请谅解"
                },
                {
                  title: "演出时长",
                  content: "演出时长约150分钟（以现场为准）"
                },
                {
                  title: "异常订购说明",
                  content: "对于异常订购行为，大麦网有权在订单成立或者生效之后取消相应订单。异常订购行为包括但不限于以下情形：（1）通过同一ID订购超出限购张数的订单；（2）经合理判断认为非真实消费者的下单行为，包括但不限于通过批量相同或虚构的支付账号、收货地址（包括下单时填写及最终实际收货地址）、收件人、电话号码订购超出限购张数的订单"
                }
              ],
            },
            {
              noteTitle: "观演须知",
              ticketList: [
                {
                  title: '入场时间',
                  content: '演出前约120分钟'
                },
                {
                  title: '禁止携带物品',
                  content: '1.由于安保和版权的原因，大多数演出、展览及比赛场所禁止携带食品、饮料、专业摄录设备、打火机等物品，请您注意现场工作人员和广播的提示，予以配合；2.儿童凭全票入场；3.已经验票的票品，禁止二次入场；'
                },
                {
                  title: '寄存说明',
                  content: '无寄存处，请自行保管携带物品'
                },
                {
                  title: '最低演出时长',
                  content: '150分钟'
                },
                {
                  title: '最低演出曲目数',
                  content: '22'
                },
                {
                  title: '入场时间',
                  content: '演出前约120分钟'
                },
                {
                  title: '主要演员（团体）',
                  content: '李荣浩'
                },

              ]
            }
          ],
          msg: this.str,
        }
      },

      props:['str'],
      methods:{
        gou(){
          this.msg='购票须知';
        },
        guan(){
          this.msg='观演须知';
        },
        closeThis(){
          bus.$emit('closeXu',false);
          $(document.body).css({
            "overflow-x":"scroll",
            "overflow-y":"scroll"
          });
        }

      },
      mounted() {

      }
    }
</script>

<style scoped>
  .notice{
    /*background-color: rgba(0,0,0,0.3);*/
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 20;
  }
  .notice .what > P{
    padding: 10px 0;
    font-size: 20px;
    border-bottom: solid 1px #f0f0f0;
    position: fixed;
    width: 100%;
    background-color: #fff;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }
  .notice .what > P span{
    margin-right: 25px;
    cursor: pointer;

  }
  .notice .what > P .close{
   position: absolute;
    right: 5px;
    top: 10px;
  }

  .notice .what{
    background-color: #fff;
    height: 350px;
    overflow: scroll;
    position: absolute;
    bottom:0;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

  }
  .notice .what .content{
    text-align: left;
    padding:20px;
    margin-top: 30px;
  }
  .active{
    color:#ff1268;
  }
  .notice .what .content section div h5{
    font-weight: normal;
    font-size: 17px;
    padding: 10px 0;

  }
  .notice .what .content section div h5 small{
    color: #ff1268;
    margin-right: 20px;
  }
  .notice .what .content section div p{
    line-height: 30px;
    color:#989898;
    padding-left:20px;
  }
  .notice .what .content section div span{
    display: block;
    text-align: center;
    margin: 20px 0;
    color: #ff1658;
    font-size: 17px;
    cursor: pointer;
    padding-bottom: 20px;
  }
</style>
