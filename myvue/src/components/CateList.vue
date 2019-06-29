<template>
    <div class="catelist">
        <div class="listBox">
            <div>
              <ul>
                <li v-for="(cate , ins) in cates" :key="ins+'ins'">
                  <span @click="change(cate)">{{cate}}</span>
                </li>
              </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import bus from '../bus';
    export default {
        data: function () {
            return {
              cates:['全部分类','演唱会','话剧歌剧','音乐会','曲苑杂坛','舞蹈芭蕾','体育比赛','儿童亲子','展览休闲','二次元','旅游展览']
            }
        },
        methods:{
          change(val){
              bus.$emit('cateVal',val);
          }
        }
    }
</script>

<style scoped>
    .catelist{
      position: relative;
    }
    .catelist .listBox{
      background-color: rgba(0,0,0,0.3);
      height: 100vh;
      width: 100vw;
      position: absolute;
      left: -20px;
      overflow: hidden;
      z-index: 2;
    }
    .catelist .listBox div{
      height: 60%;
      overflow: scroll;
    }
    .catelist .listBox div ul{
      background-color: #fff;
      padding-left: 20px;

      /*height: 60vh;*/
    }
    .catelist .listBox div ul{
      list-style: none;
    }
    .catelist .listBox div ul li{
      border-top: solid 1px #e7e7e7;
    }
    .catelist .listBox div ul li span{
      display: block;
      text-align: left;
      padding: 20px 0;
      cursor: pointer;
    }
</style>
