
// 邮件发送功能
const nodemailer = require('nodemailer');
const setting = require('../setting');

const mail = {
    sendMails:function(email,code, callback){

        var transporter = nodemailer.createTransport({
            service:'163',
            auth:{
                user:setting.mail.auth.user,
                pass:setting.mail.auth.pass   // 163邮箱设置的授权码
            },
            // host:setting.mail.host
        })
        var mailOptions = {
            from:setting.mail.auth.user,    //
            to: email ,   // 接收者邮箱  --- 即，注册用户的邮箱
            subject:'邮件测试',
            html:'<h1>欢迎注册大麦网</h1><p>您的验证码是'+code+'</p>'
        }
        transporter.sendMail(mailOptions, function(err, info){

            if(err){
                callback(err)
            }

        })
    }
}

// 只暴露一个出口
module.exports = mail;

