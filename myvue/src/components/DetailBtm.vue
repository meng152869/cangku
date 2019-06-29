<template>
    <div class="detailBtm">
        <div class="btm">
            <p><span><a href="#/"><i class="fa fa-home"></i></a>大麦首页</span><span @click="look"><i class="fa fa-heart  look" v-if="isLook"></i><i class="fa fa-heart-o" v-else></i>想看</span></p>
            <button @click="open">立即预定</button>
        </div>
    </div>
</template>

<script>
    import bus from '../bus'
    export default {
        data: function () {
            return {
              isLook:false
            }
        },
        methods:{
          look(){
            this.isLook = ! this.isLook;
          },
          open(){
            $(document.body).css({
              "overflow-x":"hidden",
              "overflow-y":"hidden"
            });
            bus.$emit('kaiValue',true)
          }
        }
    }
</script>

<style scoped>
  .btm{
    width: 100%;
    position: fixed;
    bottom: 0;
    overflow: hidden;
    border-top: solid 1px #f0f0f0;
    padding: 10px 2px;
    background-color: #fff;
  }
  .btm p{
    float: left;
  }
  .btm p span{
    display: inline-block;
    font-size: 14px;
    margin-left: 20px;
    cursor: pointer;
  }
  .btm p span:first-child{
    border-right: solid 1px #f0f0f0;
    padding-right: 10px;
  }
  .btm p span i{
    display: block;
    font-size: 25px;
  }
  .btm button{
    float: right;
    color:#fff;
    background-image: linear-gradient(90deg,#ff7f81,#ff2d79);
    margin-right:20px;
    border: none;
    padding: 15px 90px;
    border-radius: 50px;
    font-size: 18px;
    cursor: pointer;
  }
  .look{
    /*background-image: linear-gradient(90deg,#ff7f81,#ff2d79);*/
    color:#ff2d79;
  }
</style>
