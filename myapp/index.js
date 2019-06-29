var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var db = require('./models/db');
var setting = require('./setting');
var app = express();

var mail = require('./commons/mail');
var UserModel = require('./models/User');
var auth = require('./commons/auth');

app.use(express.static('www'));
app.use( bodyParser.urlencoded({extended:false}) );
app.use(bodyParser.json());
app.use(cookieParser( setting.secret ));
app.use( session({
    secret: setting.secret ,
    resave:true,
    saveUninitialized:true,
    store: new MongoStore({
        // url: 'mongodb://localhost/sessionmongo'
        url:'mongodb://' + setting.host + '/' + setting.db
    })
}) )

app.use(auth.createSession);
app.use(function(req, res, next){
    res.locals.user = req.session.user;
    next();
})


app.post('/getemail',function(req,res){
    console.log(req.body);
   var email = req.body.params.email;
   console.log(typeof email);
   var code = createSixNum();
   console.log(code);
   function createSixNum(){
    var Num="";
    for(var i=0;i<6;i++)
    {
        Num+=Math.floor(Math.random()*10);
    }
    return Num;
    }
   UserModel.findOne({email:email}).exec(function(err,data){
       if(err){
           return res.josn({
               error:1,
               msg:'系统错误'
           })
       }
       if(data){
           return res.json({
               error:1,
               msg:'该邮箱已注册，请重新输入一个邮箱'
           })
       }
       var user = new UserModel({
            email:email,
            checkCode:code
       })
       user.save(function(err){
           if(!err){
               console.log('即将发送邮件');
               mail.sendMails(email,code,function(err){
                   if(err){
                       console.log('邮件发送失败');
                   }
               })
           }
           res.json({
               error:0,
               msg:'验证码已经发送到您的邮箱，请注意查收'
           })
       })
   })
})

app.post('/zhuce',function(req,res){
    UserModel.findOne({email:req.body.email}).exec(function(err,data){
        if(err){
            return res.json({
                error:1,
                msg:'数据库错误'
            })
        }
        if(!data){
            return res.json({
                error:1,
                msg:'数据库错误'
            })
        }
        if(data.checkCode !== req.body.checkCode){
            return res.json({
                error:1,
                msg:'验证码输入错误，请重新输入'
            })
        }
        data.username=req.body.username;
        data.password=req.body.password;
        data.save(function(err){
            if(!err){
                res.json({
                    error:0,
                    msg:'注册成功'
                })
            }
        });
    })
})


app.post('/login',function(req,res){
    // console.log(req.body);
    console.log(req.session.user);
    var username = req.body.username;
    var password = req.body.password;
    UserModel.findOne({username}).exec(function(err,data){
        // console.log(data);
        if(err){
            return res.json({
                error:1,
                msg:'数据库错误'
            })
        }
        if(!data){
            return res.json({
                error:1,
                msg:'数据库错误'
            })
        }
        if(data.password !== password){
            return res.json({
                error:1,
                msg:'密码输入错误'
            })
        }
        auth.createCookie(data,res);
        res.json({
            error:0,
            msg:'登录成功'
        })
    })
})

app.get('/getUser',function(req,res){
    console.log(req.session.user);
    console.log(res.locals.user);
    res.json({
        error:0,
        user:req.session.user
    })
})

app.get('/exit',function(req,res){
    res.clearCookie( setting.cookieName );
    req.session.user = null;
    res.json({
        error:0,
        msg:'退出成功'
    })
})
app.listen(3200,function(){
    console.log('服务器启动了');
})