<template>
  <div class="signIn">
    <img src="//gw.alicdn.com/tfs/TB1QfeUQAvoK1RjSZFDXXXY3pXa-300-138.png" alt="">
    <div class="input-Form">
      <el-form :rules="rules" :model="form">
          <el-form-item label="账号:" prop="username">
              <el-input v-model="form.username" name="username" ref="username"></el-input>
          </el-form-item>
        <el-form-item label="邮箱:" prop="email">
          <el-input type="email"  v-model="form.email" name="email" ref="email"></el-input>
        </el-form-item>
        <el-form-item class="check-item" prop="checked">
          <el-input v-model="form.checked" ref="code"></el-input>
          <el-button type="button" @click="check()" ref="checkCode" class="a">发送验证码</el-button>
        </el-form-item>
        <el-form-item label="密码:" prop="password">
          <el-input type="password"  v-model="form.password" name="password" ref="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="submit" class="zhuce" ref="zhuce" @click="zhuce">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    data: function () {
      return {
        error:0,
        form:{
          username:'',
          email:'',
          checked:'',
          password:'',


        },
        rules:{
          username:[
            {required: true, message: '请输入账号', trigger: 'blur'},
            {pattern:/^[a-zA-Z][a-zA-Z0-9_\*\#\.]{4,11}$/,message:'账号不符合规则'}
          ],

          email:[
            {required: true, message: '请输入邮箱', trigger: 'blur'},
            {pattern: /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/,message:'邮箱不符合规则'}
          ],
          checked:[
            {required: true, message: '请输入验证码', trigger: 'blur'},
          ],
          password:[
            {required: true, message: '请输入密码', trigger: 'blur'},
            {pattern: /(?!^\\d+$)(?!^[a-zA-Z]+$)(?!^[_#@]+$).{5,}/,message:'密码不符合规则'}
          ],
        }
      }
    },
    methods:{
        check(){
            var time = 120;
            var $button = $(this.$refs.checkCode.$el);
            var $code = $(this.$refs.checkCode.$el.children);
            var $username = $(this.$refs.username.$el.children);
            var $email = $(this.$refs.email.$el.children);
            var email = $email.val();

            axios.post('/api/getemail',{
                params:{
                  email:email
                }
            }).then((val)=>{
              if(val.data.error!==0){
                alert(val.data.msg);
              }else{
                alert(val.data.msg);
              }

              }).catch((err)=>{
                  console.log(err);
              })


              var mytime = setInterval(function () {
                sub();
              },1000)
              function sub(){
                time--;
                $code.get(0).innerHTML='请等待'+time+'秒';
                $button.attr("disabled",true)
                if(time===0){
                  clearInterval(mytime);
                  $code.get(0).innerHTML='发送验证码';
                  $button.attr("disabled",false);//按键可用

                }
              }

        },
        zhuce(){
          var $username = $(this.$refs.username.$el.children);
          var $email = $(this.$refs.email.$el.children);
          var $possword = $(this.$refs.password.$el.children);
          var $code = $(this.$refs.code.$el.children);
          var username = $username.val();
          var email = $email.val();
          var password = $possword.val();
          var code = $code.val();
          axios.post('/api/zhuce',{
                username:username,
                email:email,
                password:password,
                checkCode:code
          }).then((val)=>{
            console.log(val)
            if(val.data.error!==0){
              alert(val.data.msg);
            }else{
              alert(val.data.msg);
              location.href='#/login';


            }
          }).catch((err)=>{
            console.log(err);
          })
        }

    }
  }
</script>

<style scoped>
  .signIn img{
    margin: 50px 0 30px 0;
    width: 30%;
  }
  .signIn >>> .el-form-item{

    margin:0;
    height: 60px;
  }
  .signIn >>> .el-form-item .el-form-item__label{
    float: left;
    width: 25%;
    font-size: 18px;
    text-align: right;
    padding-top: 5px;
  }
  .signIn >>> .el-form-item .el-form-item__content{
    float: right;
    width: 70%;
    height: 30px;
    margin-right: 5%;
  }
  .signIn >>> .el-form-item .el-form-item__content .el-form-item__error{
    top:40px;
    left: 20px;
      }
  .signIn >>> .el-form-item .el-form-item__content .el-input{
    /*height: 40px;*/
  }
  .signIn >>> .el-form-item .el-form-item__content .el-input__inner{
    border-top: transparent;
    border-left: transparent;
    border-radius: 0;
    height: 30px;
    width: 90%;
    border-right: transparent;
    font-size: 18px;
    padding-top: 0;
  }
  .check-item >>> .el-form-item__content{
    display: flex;
  }
  .check-item >>> .el-form-item__content .el-input{
      width: 50%;
   margin: 0 8px;

  }
  .check-item >>> .el-form-item__content .el-button{
    height: 40px;
    width: 40%;
    color: #fc347b;
    background: #fff1f6;
    border-radius:30px;
    padding-left:15px
  }
  .check-item >>> .el-form-item__content .el-button span{
    padding-bottom: 5px;
  }
  .signIn .zhuce{
    width: 80%;
    margin-right: 60%;
    background-image: linear-gradient(90deg,#ff4aae,#ff1268) ;
    color:white;
    font-size: 18px;
    border: none;
  }
</style>
