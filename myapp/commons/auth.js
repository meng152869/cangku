
// 用户登录成功之后，浏览器端和服务端进行数据存储的
const setting = require('../setting');
const UserModel = require('../models/User');
const auth = {
    // 用户登录成功之后，设置cookie
    createCookie: function (user, res) {
        console.log(user);
        res.cookie(setting.cookieName, user._id + '$$$$', {
            signed: true,     // 加密cookie数据
            maxAge: 1000 * 60 * 60 * 24 * 30  // cookie存在时间，按照毫秒计  30天
        })


    },

    createSession: function (req, res, next) {
        console.log('aaa');
        console.log(req.session.user);
        console.log(res.cookie);
        if (!req.session.user) {
            var cookieId = req.signedCookies[setting.cookieName];
            if (!cookieId) {
                return next();
            }

            // split() 将字符串按照条件分割成数组
            var userId = cookieId.split('$$$$')[0]
            UserModel.findOne({ '_id': userId }).exec(function (err, user) {
                if (err) {
                    return next();
                }
                req.session.user = user;
                next();
            })

        }else{
            next();
        }
       
    }

}


module.exports = auth;



