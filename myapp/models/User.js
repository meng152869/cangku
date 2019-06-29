/**
 * Created by hama on 2017/5/10.
 */
//保存登录用户的信息
const mongoose = require('mongoose');
const shortid = require('shortid');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    //用户的ID
    _id:{
        type:String,
        default:shortid.generate,
        unique:true //id经常会被查询，所以，把ID作为索引
    },
    //用户名
    username:{
        type:String,
        require:true
    },
    //密码
    password:{
        type:String,
        require:true
    },
    //邮箱
    email:{
        type:String
    },
    checkCode:{
        type:String
    },
    //个人简介
    motto:{
        type:String,
        default:'这家伙很懒,什么都没有留下..'
    },
    //个人头像
    avatar:{
        type:String,
        default:'/www/images/avatar.png'
    },
    //创建时间
    createtime:{
        type:Date,
        default:Date.now
    },
    // 更新时间
    updateTime:{
        type:Date,
        default:Date.now
    },
    // 积分
    score:{
        type:Number,
        default:0
    },
    // 回复数量
    replyCount:{
        type:Number,
        default:0
    },
    // 关注量
    followCount:{
        type:Number,
        default:0
    },
    // 粉丝量
    fansCount:{
        type:Number,
        default:0
    }

})

const User = mongoose.model('User',UserSchema);
module.exports = User;

