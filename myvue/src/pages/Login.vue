<template>
    <div class="login">
      <img src="//gw.alicdn.com/tfs/TB1QfeUQAvoK1RjSZFDXXXY3pXa-300-138.png" alt="">
      <div class="login-form">
        <el-form :rules="rules" :model="form">
          <el-form-item label="账号:" prop="username">
            <el-input v-model="form.username" name="username" ref="username"></el-input>
          </el-form-item>
          <el-form-item label="密码:" prop="password">
            <el-input type="password"  v-model="form.password" name="password" ref="password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="submit" class="denglu" @click="login">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="login-btm">
        <p><span>忘记密码</span><span><a href="#/signIn">新用户注册</a></span></p>
      </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data: function () {
            return {
              form:{
                username:'',
                password:'',

              },
              rules:{
                username:[
                  {required: true, message: '请输入账号', trigger: 'blur'},
                  {pattern:/^[a-zA-Z][a-zA-Z0-9_\*\#\.]{4,11}$/,message:'账号不符合规则'}
                ],
                password:[
                  {required: true, message: '请输入密码', trigger: 'blur'},
                  {pattern: /(?!^\\d+$)(?!^[a-zA-Z]+$)(?!^[_#@]+$).{5,}/,message:'密码不符合规则'}
                ],
              }
            }
        },
        methods:{
            login(){
              console.log('sddd');
                var $username = $(this.$refs.username.$el.children);
                var $password = $(this.$refs.password.$el.children);
                var username = $username.val();
                var password = $password.val();
                axios.post('/api/login',{
                  username:username,
                  password:password
                }).then((val)=>{
                  console.log(val);
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
  .login img{
    margin: 50px 0 30px 0;
    width: 30%;
  }
  .login >>> .el-form-item{

    margin:0;
    height: 60px;
  }
  .login >>> .el-form-item .el-form-item__label{
    float: left;
    width: 25%;
    font-size: 18px;
    text-align: right;
    padding-top: 5px;
  }
  .login >>> .el-form-item .el-form-item__content{
    float: right;
    width: 70%;
    height: 30px;
    margin-right: 5%;
  }
  .login >>> .el-form-item .el-form-item__content .el-form-item__error{
    top:40px;
    left: 20px;
  }
  .login >>> .el-form-item .el-form-item__content .el-input{
    /*height: 40px;*/
  }
  .login >>> .el-form-item .el-form-item__content .el-input__inner{
    border-top: transparent;
    border-left: transparent;
    border-radius: 0;
    height: 30px;
    width: 90%;
    border-right: transparent;
    font-size: 18px;
    padding-top: 0;
  }
  .login .denglu{
    width: 80%;
    margin-right: 60%;
    background-image: linear-gradient(90deg,#ff4aae,#ff1268) ;
    color:white;
    font-size: 18px;
    border: none;
  }


  .login .login-btm p span{
    display: inline-block;
    width: 50%;
    padding-top: 5px;
    font-size: 14px;
    color:#757575;

  }
  .login .login-btm p span a{
    color:#757575;
  }
</style>
